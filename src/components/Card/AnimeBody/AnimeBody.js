/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { getRatingBgColor } from '../../../utils/CommonHelper';
import { CollectionContext } from '../../../utils/Context';
import { ratingStyle } from './AnimeBodyStyle'

const AnimeBody = (props) => {
  const collectionContext = useContext(CollectionContext);
  const rating = parseInt(props.rating);
  let ratingBgColor = getRatingBgColor(rating);
  // alert(props['animeId'])
  const processRemove = (e) => {
    e.stopPropagation();
    if(window.confirm("Remove this from collection " + props.fromCollection + "?")){
      const animesReplicate = collectionContext.collections[props.fromCollection].animes;
      delete animesReplicate[props.animeId];
      // console.log(animesReplicate)
      // delete collectionContext[props.fromCollection].animes[props.animeId];
      // console.log(collectionContext)
      // localStorage.setItem("collection-list", JSON.stringify(collectionContext));
      collectionContext.setCollections({
        ...collectionContext.collections,
        [props.fromCollection]: {
          ...collectionContext.collections[props.fromCollection],
          animes: animesReplicate,
        }
      })

      localStorage.setItem("collection-list", JSON.stringify(collectionContext.collections));
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