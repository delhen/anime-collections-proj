/** @jsxImportSource @emotion/react */
import { useContext, useRef } from "react";
import { useParams } from "react-router-dom";

import Button from "../../components/Button/Button";
import AnimeBody from "../../components/Card/AnimeBody/AnimeBody";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { processEditCollectionName, processRemoveAnimeFromCollection, validateCollectionName } from "../../utils/CollectionHelper";

import { getAllCollection, getAnimeId, getAnimesFromCollection, saveDataToStorage } from "../../utils/CommonHelper";
import { AnimeWithCollectionContext, CollectionContext, ModalContext } from "../../utils/Context";

import { containerLayout, gridLayout, inputTextStyle } from "./CollectionDetailStyle";

const CollectionDetail = () => {
  const collectionContext = useContext(CollectionContext);
  const animeWithCollectionContext = useContext(AnimeWithCollectionContext);
  const modalContext = useContext(ModalContext);
  const params = useParams();
  const collectionNameRef = useRef(null);
  
  const currentCollection = collectionContext.collections[params.id]
  const animeList = getAnimesFromCollection(currentCollection);

  const removeAnimeFromCollection = (e, collectionId, animeId) => {
    e.stopPropagation();
    if(window.confirm("Are you sure want to remove the anime from this collection?")){
      processRemoveAnimeFromCollection(collectionId, animeId, collectionContext, animeWithCollectionContext)
      saveDataToStorage(collectionContext.collections, animeWithCollectionContext.animeCollections);
      alert("Selected anime has been removed from this collection!");
    }
  }
  
  const editCollectionName = () => {
    try{
      const newName = collectionNameRef.current.value;
      const collections = getAllCollection(collectionContext.collections);
      validateCollectionName(newName, collections);

      processEditCollectionName(params.id, newName, collectionContext, animeWithCollectionContext);
      saveDataToStorage(collectionContext.collections, animeWithCollectionContext.animeCollections);
      alert("Collection successfully edited!");
      modalContext.setShowModal(false);
    }catch(errMsg){
      alert(errMsg)
    }
  }

  let component = <h4>Lets add a new anime for this collection!</h4>
  if(animeList.length > 0){
    component = (
      <div css={gridLayout}>
        {
          animeList.map(anime => {
            return (
              <Card img_url={anime.coverImage} id={getAnimeId(anime.id)} key={getAnimeId(anime.id)}>
                <AnimeBody title={anime.title} 
                        title_native={anime.native} 
                        rating={anime.rating} 
                        showRemove={true}
                        removeAction={removeAnimeFromCollection}
                        fromCollectionId={params.id} 
                        animeId={anime.id} />
              </Card>
            )
          })
        }
      </div>
    )
  }

  return (
    <div css={containerLayout}>
      <h1>{collectionContext.collections[params.id].name}</h1>
      <Button color="white" clickAction={() => modalContext.setShowModal(true)}>Edit Name</Button>
      <h3>Anime List</h3>
      {component}
      <Modal show={modalContext.showModal} onClose={() => modalContext.setShowModal(false)}>
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
