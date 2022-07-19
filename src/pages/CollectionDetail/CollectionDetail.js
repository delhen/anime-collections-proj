/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import AnimeList from "../AnimeList/AnimeList";

function CollectionDetail() {
  const params = useParams()
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

  return (
    <div css={divStyle}>
      <h1>My Collection 1</h1>
      <h3>Anime List</h3>
      <AnimeList />
    </div>
  );
}

export default CollectionDetail;
