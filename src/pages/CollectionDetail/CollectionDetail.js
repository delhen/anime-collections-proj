/** @jsxImportSource @emotion/react */
import { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import AnimeBody from "../../components/Card/AnimeBody/AnimeBody";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { getAllCollection, getAnimeId, getAnimesFromCollection, getKeyFromObject, validateExistingName, validateSpecialChars } from "../../utils/CommonHelper";
import { AnimeWithCollectionContext, CollectionContext } from "../../utils/Context";
import AnimeList from "../AnimeList/AnimeList";
import { addNewCollectionBtnStyle, containerLayout, gridLayout, inputTextStyle } from "./CollectionDetailStyle";

const CollectionDetail = (props) => {
  const collectionContext = useContext(CollectionContext);
  const animeWithCollectionContext = useContext(AnimeWithCollectionContext);
  const params = useParams();
  const collectionNameRef = useRef(null);
  const [show, setShow] = useState(false);
  
  const currentCollection = collectionContext.collections[params.id]
  const animeList = getAnimesFromCollection(currentCollection);

  let component = <h4>Lets add a new anime for this collection!</h4>
  if(animeList.length > 0){
    component = (
      <div css={gridLayout}>
        {
          animeList.map(anime => {
            return (
              <Card img_url={anime.coverImage} id={getAnimeId(anime.id)} key={getAnimeId(anime.id)}>
                <AnimeBody title={anime.title} title_native={anime.native} rating={anime.rating} showRemove={true} fromCollection={params.id} animeId={anime.id} />
              </Card>
            )
          })
        }
      </div>
    )
  }
  
  const editCollectionName = () => {
    console.log(CollectionContext)
    if(collectionNameRef.current.value === null || collectionNameRef.current.value === "") alert("Collection name cannot be empty!");
    else if(validateSpecialChars(collectionNameRef.current.value)) alert("Collection name has special characters!");
    else if(!validateExistingName(collectionNameRef.current.value, getAllCollection(collectionContext.collections))) alert("Collection name already exist!")
    else{
      const newName = collectionNameRef.current.value;

      collectionContext.collections[params.id] = {
        ...collectionContext.collections[params.id],
        name: newName
      }

      const animeCollecitons = animeWithCollectionContext.animeCollections;
      const keyAnimeCollections = getKeyFromObject(animeCollecitons);
      keyAnimeCollections.forEach(animeId => {
        if(animeCollecitons[animeId].collections[params.id] !== undefined){
          animeCollecitons[animeId].collections[params.id] = {
            ...animeCollecitons[animeId].collections[params.id],
            name: newName,
          }
        }
      })

      localStorage.setItem("collection-list", JSON.stringify(collectionContext.collections));
      localStorage.setItem("anime-with-collections", JSON.stringify(animeWithCollectionContext.animeCollections));
      alert("Collection successfully edited!");
      setShow(false);
    }
  }

  return (
    <div css={containerLayout}>
      <h1>{collectionContext.collections[params.id].name}</h1>
      <Button color="white" clickAction={() => setShow(true)}>Edit Name</Button>
      <h3>Anime List</h3>
      {component}
      <Modal show={show} onClose={() => setShow(!show)}>
        <div>
          <h4>Edit Collection Name</h4>
        </div>
        <div>
          <div>
            <input type="text" placeholder="New collection name" css={inputTextStyle} ref={collectionNameRef} />
            <Button color="pink" clickAction={() => editCollectionName()}>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CollectionDetail;
