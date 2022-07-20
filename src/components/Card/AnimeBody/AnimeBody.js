/** @jsxImportSource @emotion/react */
import { getRatingBgColor } from '../../../utils/CommonHelper';
import { ratingStyle } from './AnimeBodyStyle'

const AnimeBody = (props) => {
  const rating = parseInt(props.rating);
  let ratingBgColor = getRatingBgColor(rating);

  return(
    <div>
      <p><span css={{...ratingStyle, backgroundColor: ratingBgColor}}>{props.rating}</span></p>
      <p><b>{props.title != null ? props.title : props.title_native}</b></p>
      <p><small><i>{props.title_native != null != "" ? props.title_native : props.title}</i></small></p>
    </div>
  )
}

export default AnimeBody;