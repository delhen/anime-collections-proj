import { useContext } from "react";
import { getKeyFromObject } from "../../../utils/CommonHelper";
import { AnimeWithCollectionContext, CollectionContext } from "../../../utils/Context";
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
      <button css={{...btnStyle, ...editBtnColor}} onClick={e => e.stopPropagation()}>Edit</button>
      <button css={{...btnStyle, ...removeBtnColor}} onClick={e => deleteCollection(e)}>Delete</button>
      <br/>
      <br/>
    </div>
  )
}

export default CollectionBody;