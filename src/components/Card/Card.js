/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

const cardStyle = {
  display: 'flex',
}

const Card = (props) => {
  return (
    <div css={{
      borderRadius: '8px',
      backgroundColor: 'white',
      color: 'black',
      overflow: 'hidden',
      '& .image-holder': {
        width: '100%',
        position: 'relative',
      }
    }}>
      <div className="image-holder">
        <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png"
              css={{
                maxWidth: '100%',
        }} />
      </div>
      <div className="information">
        <p>Judul: AAA</p>
        <p>Deskripsi: BBB</p>
        <p>Rating: 10/10</p>
      </div>
    </div>
  );
};

export default Card;