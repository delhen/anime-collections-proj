/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";

const CollectionCard = (props) => {
  const navigate = useNavigate();
  const goToCollectionDetail = (id) => {
    navigate(`/collection/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <div css={cardStyle} onClick={() => goToCollectionDetail(props.id)}>
      <div className="image-holder">
        <img src={props.img_url} height={360} />
      </div>
      <div className="information">
        {props.children}
      </div>
    </div>
  );
};

export default CollectionCard;