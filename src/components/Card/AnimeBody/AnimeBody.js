/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { getRatingBgColor } from '../../../utils/CommonHelper';
import { CollectionContext, AnimeWithCollectionContext } from '../../../utils/Context';
import { ratingStyle } from './AnimeBodyStyle'

const AnimeBody = (props) => {
  const collectionContext = useContext(CollectionContext);
  const animesWithCollectionContext = useContext(AnimeWithCollectionContext);
  const rating = parseInt(props.rating);
  let ratingBgColor = getRatingBgColor(rating);

  const processRemove = (e) => {
    e.stopPropagation();
    if(window.confirm("Remove this from collection " + props.fromCollection + "?")){
      const animesReplicate = collectionContext.collections[props.fromCollection].animes;
      delete animesReplicate[props.animeId];
      collectionContext.setCollections({
        ...collectionContext.collections,
        [props.fromCollection]: {
          ...collectionContext.collections[props.fromCollection],
          animes: animesReplicate,
        }
      })

      const collectionReplicate = animesWithCollectionContext.animeCollections[props.animeId].collections;
      delete collectionReplicate[props.fromCollection];
      animesWithCollectionContext.setAnimeCollections({
        ...animesWithCollectionContext.animeCollections,
        [props.animeId]: {
          ...animesWithCollectionContext.animeCollections[props.animeId],
          collections: collectionReplicate,
        }
      })

      localStorage.setItem("collection-list", JSON.stringify(collectionContext.collections));
      localStorage.setItem("anime-with-collections", JSON.stringify(animesWithCollectionContext.animeCollections));
      alert("Anime has been removed!")
    }
  }

  return(
    <div css={{padding: '8px'}}>
      <p><span css={{...ratingStyle, backgroundColor: ratingBgColor}}>{props.rating}</span></p>
      <p><b>{props.title != null ? props.title : props.title_native}</b></p>
      <p><small><i>{props.title_native != null != "" ? props.title_native : props.title}</i></small></p>
      {props.showRemove && <button onClick={e => processRemove(e)}>Remove</button>}
    </div>
  )
}

export default AnimeBody;