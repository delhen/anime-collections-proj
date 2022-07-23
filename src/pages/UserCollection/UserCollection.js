/** @jsxImportSource @emotion/react */
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import CollectionBody from "../../components/Card/CollectionBody/CollectionBody";
import { addCollectionBtnStyle, addNewCollectionBtnStyle, containerLayout, gridLayout, inputTextStyle } from "./UserCollectionStyle";
import { useContext, useRef, useState } from "react";
import { AnimeWithCollectionContext, CollectionContext } from "../../utils/Context";
import { createRandomId, getAllCollection, getAnimesFromCollection, getKeyFromObject, validateExistingName, validateSpecialChars } from "../../utils/CommonHelper";
import Modal from "../../components/Modal/Modal";
import noCover from './no_image_cover.jpg';
import Button from "../../components/Button/Button";

function UserCollection() {
  const collectionContext = useContext(CollectionContext);
  const collections = getAllCollection(collectionContext.collections);
  const animeWithCollectionContext = useContext(AnimeWithCollectionContext);
  const [show, setShow] = useState(false);
  const [formType, setFormType] = useState("add");
  const [collectionId, setCollectionId] = useState();
  const [collectionName, setCollectionName] = useState();
  const collectionNameRef = useRef(null);

  const editCollectionName = (collectionId) => {
    if(collectionNameRef.current.value === null || collectionNameRef.current.value === "") alert("Collection name cannot be empty!");
    else if(validateSpecialChars(collectionNameRef.current.value)) alert("Collection name has special characters!");
    else if(!validateExistingName(collectionNameRef.current.value, getAllCollection(collectionContext.collections))) alert("Collection name already exist!")
    else{
      const newName = collectionNameRef.current.value;

      collectionContext.collections[collectionId] = {
        ...collectionContext.collections[collectionId],
        name: newName
      }

      const animeCollecitons = animeWithCollectionContext.animeCollections;
      const keyAnimeCollections = getKeyFromObject(animeCollecitons);
      keyAnimeCollections.forEach(animeId => {
        if(animeCollecitons[animeId].collections[collectionId] !== undefined){
          animeCollecitons[animeId].collections[collectionId] = {
            ...animeCollecitons[animeId].collections[collectionId],
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

  const addNewCollection = () => {
    console.log(collectionContext)
    if(collectionNameRef.current.value === null || collectionNameRef.current.value === "") alert("Collection name cannot be empty!");
    else if(validateSpecialChars(collectionNameRef.current.value)) alert("Collection name has special characters!");
    else if(!validateExistingName(collectionNameRef.current.value, collections)) alert("Collection name already exist!")
    else{
      let id = createRandomId()
      const name = collectionNameRef.current.value;

      collectionContext.collections[id] = {
        name: name,
        id: id,
        animes: {}
      }
      localStorage.setItem("collection-list", JSON.stringify(collectionContext.collections));
      alert("Collection Added!");
      setShow(false);
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
  if(formType == 'edit'){
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
                <CollectionBody name={collection.name} id={collection.id} onEdit={() => {
                  setCollectionId(collection.id);
                  setCollectionName(collection.name);
                  setFormType("edit");
                  setShow(true);
                }} />
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
        setShow(true);
        setFormType('add');
      }}>+ Add New Collection</Button>
      {component}
      {/* <Pagination /> */}
      <Modal show={show} onClose={() => setShow(!show)}>
        {formAddEdit}
      </Modal>
    </div>
  );
}

export default UserCollection;