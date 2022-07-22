/** @jsxImportSource @emotion/react */
import { cardStyle } from "./CardStyle";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const goToDetailPage = (id) => {
    if(props.type === "collection"){
      navigate(`/collection/${id}`);
      window.scrollTo(0, 0);
    }else{
      navigate(`/anime/${id}`);
      window.scrollTo(0, 0);
    }
  }

  return (
    <div css={cardStyle} onClick={() => goToDetailPage(props.id)}>
      <div className="image-holder">
        <img src={props.img_url} height={360} />
      </div>
      <div className="information">
        {props.children}
      </div>
    </div>
  );
};

export default Card;