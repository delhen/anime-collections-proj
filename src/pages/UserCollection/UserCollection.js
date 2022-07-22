/** @jsxImportSource @emotion/react */
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import CollectionBody from "../../components/Card/CollectionBody/CollectionBody";
import { addCollectionBtnStyle, addNewCollectionBtnStyle, containerLayout, gridLayout, inputTextStyle } from "./UserCollectionStyle";
import { useContext, useRef, useState } from "react";
import { CollectionContext } from "../../utils/Context";
import { createRandomId, getAllCollection, validateExistingName, validateSpecialChars } from "../../utils/CommonHelper";
import Modal from "../../components/Modal/Modal";
import noCover from './no_image_cover.jpg';
import Button from "../../components/Button/Button";

function UserCollection() {
  const collectionContext = useContext(CollectionContext);
  const collections = getAllCollection(collectionContext.collections);
  const [show, setShow] = useState(false);
  const collectionNameRef = useRef(null);

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

  return (
    <div css={containerLayout}>
      <Button color="white" clickAction={() => setShow(true)}>+ Add New Collection</Button>
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
                <CollectionBody name={collection.name} id={collection.id} />
              </Card>
            )
          })
        }
      </div>
      {/* <Pagination /> */}
      <Modal show={show} onClose={() => setShow(!show)}>
        <div>
          <h4>Add New Collection</h4>
        </div>
        <div>
          <div>
            <input type="text" placeholder="New collection name" css={inputTextStyle} ref={collectionNameRef} />
            <Button color="pink" clickAction={addNewCollection}>+ New</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default UserCollection;