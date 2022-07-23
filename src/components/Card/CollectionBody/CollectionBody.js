import { useContext } from "react";
import { getKeyFromObject } from "../../../utils/CommonHelper";
import { AnimeWithCollectionContext, CollectionContext } from "../../../utils/Context";
import Button from "../../Button/Button";
import { btnStyle, editBtnColor, removeBtnColor } from "./CollectionBodyStyle"
/** @jsxImportSource @emotion/react */

const CollectionBody = props => {
  const collectionContext = useContext(CollectionContext);
  const animeWithCollectionContext = useContext(AnimeWithCollectionContext);

  const deleteCollection = (e) => {
    e.stopPropagation()
    if(window.confirm("Are you sure want to remove this collection?")){
      const animeCollections = animeWithCollectionContext.animeCollections;
      const keyAnimeCollections = getKeyFromObject(animeCollections);
      keyAnimeCollections.forEach(animeId => {
        if(animeCollections[animeId].collections[props.id] !== undefined){
          delete animeCollections[animeId].collections[props.id];
        }
      })
      animeWithCollectionContext.setAnimeCollections({...animeCollections});

      const collectionReplicate = collectionContext.collections;
      delete collectionReplicate[props.id];
      collectionContext.setCollections({...collectionReplicate});

      localStorage.setItem("collection-list", JSON.stringify(collectionReplicate));
      localStorage.setItem("anime-with-collections", JSON.stringify(animeCollections));
      alert("Collection has been deleted!");
    }
  }

  return (
    <div css={{padding: "4px"}}>
      <p><b>{props.name}</b></p>
      <Button color="blue" clickAction={e => {
        e.stopPropagation();
        props.onEdit();
      }}>Edit</Button>
      <Button color="pink" clickAction={e => deleteCollection(e)}>Delete</Button>
      <br/>
      <br/>
    </div>
  )
}

export default CollectionBody;