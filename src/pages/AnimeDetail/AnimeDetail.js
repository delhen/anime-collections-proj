/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

function AnimeDetail() {
  let params = useParams();
  const [show, setShow] = useState(false);

  const divStyle = {
    padding: "20px",
    "& .info-detail div": {
      backgroundColor: "#FF0063",
      color: "white",
      display: "inline-block",
      padding: "4px 8px",
      borderRadius: "4px",
      fontWeight: 'bold',
      margin: "4px"
    }
  }

  const collectionStyle = {
    
  }

  const addCollectionBtnStyle = {
    borderWidth: 0,
    padding: '8px',
    borderRadius: '4px',
    backgroundColor: '#EAF6F6',
    fontWeight: 'bold',
    '&:hover, &:active': {
      backgroundColor: '#C3E1E1',
      cursor: 'pointer'
    }
  }

  return (
    <div css={divStyle}>
      <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png" />
      <h1>Cowboy Bebop</h1>
      <h4>カウボーイビバップ天国の扉</h4>
      <div className="info-detail">
        <div>Rating: 87</div>
        <div>Status: FINISHED</div>
        <div>Duration: 115 minutes</div>
        <div>18+</div>
      </div>
      <h3>Genre</h3>
      <div className="info-detail">
        <div>Action</div>
        <div>Drama</div>
        <div>Mystery</div>
        <div>Sci-Fi</div>
      </div>
      <p>As the Cowboy Bebop crew travels the stars, they learn of the largest bounty yet, a huge 300 million Woolongs. Apparently, someone is wielding a hugely powerful chemical weapon, and of course the authorities are at a loss to stop it. The war to take down the most dangerous criminal yet forces the crew to face a true madman, with bare hope to succeed.<br /><br/>(Source: Anime News Network)</p>
      <h3>Collections</h3>
      <div>
        <button css={addCollectionBtnStyle} onClick={() => setShow(true)}>+ Add to Collection</button>
        <div css={{
          width: "100%",
          margin: '8px auto',
          "@media(min-width: 900px)":{
            width: "70%"
          }
        }}>
          <div css={{
            backgroundColor: '#EAF6F6',
            padding: '8px 16px',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '4px',
            textAlign: 'left',
            margin: "12px 0"
          }}>Logo | Collection 1</div>
          <div css={{
            backgroundColor: '#EAF6F6',
            padding: '8px 16px',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '4px',
            textAlign: 'left',
            margin: "12px 0"
          }}>Logo | Collection 2</div>
          <div css={{
            backgroundColor: '#EAF6F6',
            padding: '8px 16px',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '4px',
            textAlign: 'left',
            margin: "12px 0"
          }}>Logo | Collection 3</div>
          <div css={{
            backgroundColor: '#EAF6F6',
            padding: '8px 16px',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '4px',
            textAlign: 'left',
            margin: "12px 0"
          }}>Logo | Collection 4</div>
          <div css={{
            backgroundColor: '#EAF6F6',
            padding: '8px 16px',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '4px',
            textAlign: 'left',
            margin: "12px 0"
          }}>Logo | Collection 5</div>
          <div css={{
            backgroundColor: '#EAF6F6',
            padding: '8px 16px',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '4px',
            textAlign: 'left',
            margin: "12px 0"
          }}>Logo | Collection 6</div>
        </div>
      </div>
      <Modal show={show} onClose={() => setShow(!show)} />
    </div>
  );
}

export default AnimeDetail;
