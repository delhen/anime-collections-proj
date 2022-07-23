/** @jsxImportSource @emotion/react */
import { getRatingBgColor } from '../../../utils/CommonHelper';
import Button from '../../Button/Button';
import { ratingStyle } from './AnimeBodyStyle';

const AnimeBody = (props) => {
  const rating = parseInt(props.rating);
  let ratingBgColor = getRatingBgColor(rating);
  return(
    <div css={{padding: '8px'}}>
      <p><span css={{...ratingStyle, backgroundColor: ratingBgColor}}>{props.rating}</span></p>
      <p><b>{props.title != null ? props.title : props.title_native}</b></p>
      <p><small><i>{props.title_native != null != "" ? props.title_native : props.title}</i></small></p>
      {props.showRemove 
          && <Button color="red" clickAction={e => props.removeAction(e, props.fromCollectionId, props.animeId)}>Remove</Button>}
    </div>
  )
}

export default AnimeBody;