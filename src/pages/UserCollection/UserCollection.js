/** @jsxImportSource @emotion/react */
import { useContext, useRef, useState } from "react";

import Card from "../../components/Card/Card";
import CollectionBody from "../../components/Card/CollectionBody/CollectionBody";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import { containerLayout, gridLayout, inputTextStyle } from "./UserCollectionStyle";

import { AnimeWithCollectionContext, CollectionContext, ModalContext } from "../../utils/Context";
import { createRandomId, getAllCollection, getKeyFromObject, saveDataToStorage } from "../../utils/CommonHelper";
import { processEditCollectionName, validateCollectionName } from "../../utils/CollectionHelper";

import noCover from './no_image_cover.jpg';

function UserCollection() {
  const collectionContext = useContext(CollectionContext);
  const animeWithCollectionContext = useContext(AnimeWithCollectionContext);
  const modalContext = useContext(ModalContext);

  const [formType, setFormType] = useState("add");
  const [collectionId, setCollectionId] = useState();
  const [collectionName, setCollectionName] = useState();
  const collectionNameRef = useRef(null);

  const collections = getAllCollection(collectionContext.collections);

  const editClicked = (e, collectionId, collectionName) => {
    e.stopPropagation();
    setCollectionId(collectionId);
    setCollectionName(collectionName);
    setFormType("edit");
    modalContext.setShowModal(true);
  }

  const deleteCollection = (e, collectionId) => {
    e.stopPropagation()
    if(window.confirm("Are you sure want to remove this collection?")){
      const animeCollections = animeWithCollectionContext.animeCollections;
      const keyAnimeCollections = getKeyFromObject(animeCollections);
      keyAnimeCollections.forEach(animeId => {
        if(animeCollections[animeId].collections[collectionId] !== undefined){
          delete animeCollections[animeId].collections[collectionId];
        }
      })
      animeWithCollectionContext.setAnimeCollections({...animeCollections});

      const collectionReplicate = collectionContext.collections;
      delete collectionReplicate[collectionId];
      collectionContext.setCollections({...collectionReplicate});

      saveDataToStorage(collectionReplicate, animeCollections)
      alert("Collection has been deleted!");
    }
  }
  
  const editCollectionName = (collectionId) => {
    try{
      const newName = collectionNameRef.current.value;
      validateCollectionName(newName, collections);
  
      processEditCollectionName(collectionId, newName, collectionContext, animeWithCollectionContext);
      saveDataToStorage(collectionContext.collections, animeWithCollectionContext.animeCollections);
      alert("Collection successfully edited!");
      modalContext.setShowModal(false);
    }catch(errMsg){
      alert(errMsg);
    }
  }

  const addNewCollection = () => {
    try{
      const name = collectionNameRef.current.value;
      validateCollectionName(name, collections);

      let id = createRandomId();
      collectionContext.collections[id] = {
        name: name,
        id: id,
        animes: {}
      }
      localStorage.setItem("collection-list", JSON.stringify(collectionContext.collections));
      alert("Collection Added!");
      modalContext.setShowModal(false);
    }catch(errMsg){
      alert(errMsg);
    }
  }

  let component = <h4>You have no collection recently. Lets add a new one!</h4>
  let formAddEdit = (
    <>
      <div>
        <h4>Add New Collection</h4>
      </div>
      <div>
        <div>
          <input type="text" placeholder="New collection name" css={inputTextStyle} ref={collectionNameRef} />
          <Button color="pink" clickAction={addNewCollection}>+ New</Button>
        </div>
      </div>
    </>
  )
  if(formType === 'edit'){
    formAddEdit = (
      <>
        <div>
          <h4>Edit Collection: {collectionName}</h4>
        </div>
        <div>
          <div>
            <input type="text" placeholder="New collection name" css={inputTextStyle} ref={collectionNameRef} />
            <Button color="pink" clickAction={() => editCollectionName(collectionId)}>Save</Button>
          </div>
        </div>
      </>
    )
  }
  if(collections.length > 0){
    component = (
      <div css={gridLayout}>
        {
          collections.map(collection => {
            const animeKeyList = Object.keys(collection.animes);
            let imgUrl = null;
            if(animeKeyList.length === 0){
              imgUrl = noCover;
            }else{
              const firstAnimeKey = animeKeyList[0];
              const firstAnime = collection.animes[firstAnimeKey];
              imgUrl = firstAnime.coverImage;
            }
          
            return (
              <Card img_url={imgUrl} type="collection" key={collection.id} id={collection.id}>
                <CollectionBody name={collection.name} 
                  id={collection.id} 
                  onEdit={editClicked}
                  onDelete={deleteCollection} />
              </Card>
            )
          })
        }
      </div>
    )
  }

  return (
    <div css={containerLayout}>
      <Button color="white" clickAction={() => {
        modalContext.setShowModal(true);
        setFormType('add');
      }}>+ Add New Collection</Button>
      {component}
      {/* <Pagination /> */}
      <Modal show={modalContext.showModal} onClose={() => modalContext.setShowModal(false)}>
        {formAddEdit}
      </Modal>
    </div>
  );
}

export default UserCollection;