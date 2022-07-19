/** @jsxImportSource @emotion/react */
import Card from "../../components/Card/Card";
import { Link } from 'react-router-dom';
import Pagination from "../../components/Pagination/Pagination";

function AnimeList() {
  return (
    <div css={{
      marginTop: '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: "center",
      width: "100%",
    }}>
      <div css={{
        display: 'grid',
        gap: '16px',
        padding: '16px',
        gridTemplateColumns: 'repeat(2, auto)',
        
        '@media (min-width: 600px)': {
          gridTemplateColumns: 'repeat(3, auto)',
        },
        '@media (min-width: 900px)': {
          gridTemplateColumns: 'repeat(4, auto)',
        }
      }}>
        <Link to="/anime/1">
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>Cowboy Bebop</b></p>
            <p>Lorem ipsum</p>
          </Card>
        </Link>
        <Link to="/anime/1">
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>Cowboy Bebop</b></p>
            <p>Lorem ipsum</p>
          </Card>
        </Link>
        <Link to="/anime/1">
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>Cowboy Bebop</b></p>
            <p>Lorem ipsum</p>
          </Card>
        </Link>
        <Link to="/anime/1">
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>Cowboy Bebop</b></p>
            <p>Lorem ipsum</p>
          </Card>
        </Link>
        <Link to="/anime/1">
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>Cowboy Bebop</b></p>
            <p>Lorem ipsum</p>
          </Card>
        </Link>
        <Link to="/anime/1">
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>Cowboy Bebop</b></p>
            <p>Lorem ipsum</p>
          </Card>
        </Link>
        <Link to="/anime/1">
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>Cowboy Bebop</b></p>
            <p>Lorem ipsum</p>
          </Card>
        </Link>
        <Link to="/anime/1">
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>Cowboy Bebop</b></p>
            <p>Lorem ipsum</p>
          </Card>
        </Link>
        <Link to="/anime/1">
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>Cowboy Bebop</b></p>
            <p>Lorem ipsum</p>
          </Card>
        </Link>
        <Link to="/anime/1">
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>Cowboy Bebop</b></p>
            <p>Lorem ipsum</p>
          </Card>
        </Link>
      </div>
      <Pagination />
    </div>
  );
}

export default AnimeList;