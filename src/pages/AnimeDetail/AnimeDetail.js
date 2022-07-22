/** @jsxImportSource @emotion/react */
import { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { GET_ANIME_DETAIL } from "../../utils/AnimeApi";
import { animeDetailSectionStyle, addCollectionBtnStyle, inputTextStyle, addNewCollectionBtnStyle } from "./AnimeDetailStyle";
import { useQuery } from "@apollo/client";
import Spinner from "../../components/Spinner/Spinner";
import { collectionObjectToArray, createAnimeId, createRandomId, getAllCollection, getCollectionFromAnime, getRatingBgColor, getStatusAnime, validateCollectionName, validateExistingName, validateSpecialChars } from "../../utils/CommonHelper";
import CollectionList from "../../components/CollectionList/CollectionList";
import CollectionListModal from "../../components/CollectionListModal/CollectionListModal";
import { AnimeWithCollectionContext, CollectionContext } from "../../utils/Context";
import Button from "../../components/Button/Button";

function AnimeDetail() {
  const params = useParams();
  const collectionFromContext = useContext(CollectionContext);
  const animeWithCollectionsFromContext = useContext(AnimeWithCollectionContext);
  const collectionNameRef = useRef(null);
  const [show, setShow] = useState(false);

  const { loading, error, data } = useQuery(GET_ANIME_DETAIL, {variables: { id: params.id }});
  if (loading) return <Spinner />;

  // Load collections for listing add anime to collections
  const collections = getAllCollection(collectionFromContext.collections);  
  const anime = data.Media;
  const rating = parseInt(anime.averageScore), 
      ratingBgColor = getRatingBgColor(rating),
      ratingStatusObj = getStatusAnime(anime.status);

  // Load collections that related to the anime
  let animeWithCollections = [];
  if(animeWithCollectionsFromContext.animeCollections[createAnimeId(anime.id)] !== undefined){
    animeWithCollections = getCollectionFromAnime(animeWithCollectionsFromContext.animeCollections[createAnimeId(anime.id)]);
  }

  const addNewCollection = () => {
    if(collectionNameRef.current.value === null || collectionNameRef.current.value === "") alert("Collection name cannot be empty!");
    else if(validateSpecialChars(collectionNameRef.current.value)) alert("Collection name has special characters!");
    else if(!validateExistingName(collectionNameRef.current.value, collections)) alert("Collection name already exist!")
    else{
      let id = createRandomId()
      const name = collectionNameRef.current.value;
      const newAnimeCollection = {
        title: anime.title.english,
        native: anime.title.native,
        rating: anime.averageScore,
        coverImage: anime.coverImage.large,
      }

      collectionFromContext.collections[id] = {
        name: name,
        id: id,
        animes: {
          [createAnimeId(anime.id)]: newAnimeCollection
        }
      }

      if(animeWithCollectionsFromContext.animeCollections[createAnimeId(anime.id)] !== undefined){
        animeWithCollectionsFromContext.animeCollections[createAnimeId(anime.id)].collections[id] = { name: name }
      }else{
        animeWithCollectionsFromContext.animeCollections[createAnimeId(anime.id)] = {
          id: createAnimeId(anime.id),
          collections: {
            [id]: {
              name: name,
            }
          }
        }
      }

      localStorage.setItem("collection-list", JSON.stringify(collectionFromContext.collections));
      localStorage.setItem("anime-with-collections", JSON.stringify(animeWithCollectionsFromContext.animeCollections));
      alert("Collection Added!");
      setShow(false);
    }
  }

  return (
    <div css={animeDetailSectionStyle}>
      <img src={anime.coverImage.large} />
      <h1>{anime.title.english != null ? anime.title.english : anime.title.native}</h1>
      <h4>{anime.title.native != null ? anime.title.native : anime.title.english}</h4>
      <div className="info-detail">
        <div css={{backgroundColor: ratingBgColor}}>&#11088; {rating}</div>
        <div css={{backgroundColor: ratingStatusObj.bgColor}} dangerouslySetInnerHTML={{ __html: ratingStatusObj.innerMsg }}></div>
        <div css={{backgroundColor: "#748DA6"}}>&#128337; {anime.duration} mins</div>
        {anime.isAdult && <div css={{backgroundColor: "#EB1D36"}}>&#128286; 18+</div>}
      </div>
      <p dangerouslySetInnerHTML={{ __html: anime.description }}></p>
      <h3>Genre</h3>
      <div className="genre">
        {
          anime.genres.map(genre => {
            return (<div key={genre}>{genre}</div>)
          })
        }
      </div>
      <h3>Collections</h3>
      <div>
        <Button color="white" clickAction={() => setShow(true)}>+ Add to Collection</Button>
        <CollectionList collections={animeWithCollections} />
      </div>
      <Modal show={show} onClose={() => setShow(!show)}>
        <div>
          <h4>Add to Collection</h4>
          <img src={anime.coverImage.large} width={80} />
          <p>{anime.title.english}</p>
        </div>
        <div>
          <div>
            <input type="text" placeholder="New collection name" css={inputTextStyle} ref={collectionNameRef} />
            <Button color="pink" clickAction={addNewCollection}>+ New</Button>
          </div>
          <CollectionListModal collections={collections} anime={anime} closeAfterAdd={() => setShow(false)} />
        </div>
      </Modal>
    </div>
  );
}

export default AnimeDetail;
