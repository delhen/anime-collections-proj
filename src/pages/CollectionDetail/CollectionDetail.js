/** @jsxImportSource @emotion/react */
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeBody from "../../components/Card/AnimeBody/AnimeBody";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { getAnimeId, getAnimesFromCollection } from "../../utils/CommonHelper";
import { CollectionContext } from "../../utils/Context";
import AnimeList from "../AnimeList/AnimeList";
import { containerLayout, gridLayout } from "./CollectionDetailStyle";

const CollectionDetail = (props) => {
  const collectionContext = useContext(CollectionContext);
  
  const params = useParams();
  const currentCollection = collectionContext.collections[params.id]
  const animeList = getAnimesFromCollection(currentCollection);
  console.log(animeList)

  return (
    <div css={containerLayout}>
      <h1>{collectionContext.collections[params.id].name}</h1>
      <h3>Anime List</h3>
      <div css={gridLayout}>
        {
          animeList.map(anime => {
            return (
              <Card img_url={anime.coverImage} id={getAnimeId(anime.id)} key={getAnimeId(anime.id)}>
                <AnimeBody title={anime.title} title_native={anime.native} rating={anime.rating} showRemove={true} fromCollection={params.id} animeId={anime.id} />
              </Card>
            )
          })
        }
      </div>
    </div>
  );
}

export default CollectionDetail;
