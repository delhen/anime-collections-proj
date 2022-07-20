/** @jsxImportSource @emotion/react */
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { useQuery } from "@apollo/client";
import { animeListOptions, GET_ANIME_LIST } from "../../utils/AnimeApi";
import { animeListContainerStyle, animeListStyle } from "./AnimeListStyle";
import Spinner from "../../components/Spinner/Spinner";
import AnimeBody from "../../components/Card/AnimeBody/AnimeBody";
import { useState } from "react";

function AnimeList() {
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = (page) => {
    setCurrentPage(page+1)
  }
  const goToPrevPage = (page) => {
    setCurrentPage(page-1)
  }

  const { loading, error, data } = useQuery(GET_ANIME_LIST, animeListOptions(currentPage));
  if (loading) return <Spinner />;

  const animeList = data.Page.media;
  return (
    <div css={animeListContainerStyle}>
      <div css={animeListStyle}>
        {
          animeList.map(anime => {
            return (
              <Card img_url={anime.coverImage.large} id={anime.id} key={anime.id}>
                <AnimeBody title={anime.title.english} title_native={anime.title.native} rating={anime.averageScore} />
              </Card>
            )
          })
        }
      </div>
      <Pagination 
          page={currentPage} 
          nextPage={data.Page.pageInfo.hasNextPage} 
          onNextPage={() => goToNextPage(currentPage)}
          onPrevPage={() => goToPrevPage(currentPage)}
      />
    </div>
  );
}

export default AnimeList;