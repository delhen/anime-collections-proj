/** @jsxImportSource @emotion/react */
import { ratingStyle } from './AnimeBodyStyle'

const AnimeBody = (props) => {
  let ratingBgColor = "";
  const rating = parseInt(props.rating);
  if(rating > 75) ratingBgColor = "green";
  else if(rating > 50 && rating <= 75) ratingBgColor = "#D9C52A";
  else if(rating < 25 && rating >= 50) ratingBgColor = "orange";
  else ratingBgColor = "red";

  return(
    <div>
      <p><span css={{...ratingStyle, backgroundColor: ratingBgColor}}>{props.rating}</span></p>
      <p><b>{props.title != null ? props.title : props.title_native}</b></p>
      <p><small><i>{props.title_native != null != "" ? props.title_native : props.title}</i></small></p>
    </div>
  )
}

export default AnimeBody;