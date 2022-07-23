/** @jsxImportSource @emotion/react */
import { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { GET_ANIME_DETAIL } from "../../utils/AnimeApi";
import { animeDetailSectionStyle, addCollectionBtnStyle, inputTextStyle, addNewCollectionBtnStyle } from "./AnimeDetailStyle";
import { useQuery } from "@apollo/client";
import Spinner from "../../components/Spinner/Spinner";
import { collectionObjectToArray, createAnimeId, createRandomId, getAllCollection, getCollectionFromAnime, getRatingBgColor, getStatusAnime, saveDataToStorage } from "../../utils/CommonHelper";
import CollectionList from "../../components/CollectionList/CollectionList";
import CollectionListModal from "../../components/CollectionListModal/CollectionListModal";
import { AnimeWithCollectionContext, CollectionContext, ModalContext } from "../../utils/Context";
import Button from "../../components/Button/Button";
import { addAnimeToExistingCollection, addAnimeToNewCollection } from "../../utils/AnimeHelper";
import { validateCollectionName } from "../../utils/CollectionHelper";

function AnimeDetail() {
  const params = useParams();
  const collectionFromContext = useContext(CollectionContext);
  const animeWithCollectionsFromContext = useContext(AnimeWithCollectionContext);
  const modalContext = useContext(ModalContext);
  const collectionNameRef = useRef(null);

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
    try{
      const collectionName = collectionNameRef.current.value;
      validateCollectionName(collectionName, collections);
      addAnimeToNewCollection(collectionName, anime, collectionFromContext, animeWithCollectionsFromContext);
      saveDataToStorage(collectionFromContext.collections, animeWithCollectionsFromContext.animeCollections)
      
      alert("Collection Added!");
      modalContext.setShowModal(false);
    }catch(errMsg){
      alert(errMsg);
    }
  }

  const addAnimeWithExistCollection = (collectionId, collectionName, anime, isAlreadyAdded) => {
    try{
      const collectionObj = {
        id: collectionId,
        name: collectionName,
      }
      addAnimeToExistingCollection(collectionObj, anime, collectionFromContext, animeWithCollectionsFromContext, isAlreadyAdded);
      saveDataToStorage(collectionFromContext.collections, animeWithCollectionsFromContext.animeCollections)

      alert("Anime added to the collection!");
      modalContext.setShowModal(false);
    }catch(errMsg){
      alert(errMsg);
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
        <Button color="white" clickAction={() => modalContext.setShowModal(true)}>+ Add to Collection</Button>
        <CollectionList collections={animeWithCollections} />
      </div>
      <Modal show={modalContext.showModal} onClose={() => modalContext.setShowModal(false)}>
        <div>
          <h4>Add to Collection</h4>
        </div>
        <div>
          <div>
            <input type="text" placeholder="New collection name" css={inputTextStyle} ref={collectionNameRef} />
            <Button color="pink" clickAction={addNewCollection}>+ New</Button>
          </div>
          <CollectionListModal collections={collections} anime={anime} collectionClickAction={addAnimeWithExistCollection} />
        </div>
      </Modal>
    </div>
  );
}

export default AnimeDetail;
