/** @jsxImportSource @emotion/react */
import Card from "../../components/Card/Card";
import { Link } from 'react-router-dom';
import Pagination from "../../components/Pagination/Pagination";

function UserCollection() {
  return (
    <div css={{
      marginTop: '8px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: "center",
      width: "100%",
    }}>
      <button>+ Add New Collection</button>
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
        <Link to="/collection/1" css={{
          textDecoration: "none"
        }}>
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>My Collection</b></p>
            <button onClick={e => e.preventDefault()}>Edit</button>
            <button>Delete</button>
            <br/>
            <br/>
          </Card>
        </Link>
        <Link to="/collection/1" css={{
          textDecoration: "none"
        }}>
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>My Collection</b></p>
            <button>Edit</button>
            <button>Delete</button>
            <br/>
            <br/>
          </Card>
        </Link>
        <Link to="/collection/1" css={{
          textDecoration: "none"
        }}>
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>My Collection</b></p>
            <button>Edit</button>
            <button>Delete</button>
            <br/>
            <br/>
          </Card>
        </Link>
        <Link to="/collection/1" css={{
          textDecoration: "none"
        }}>
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>My Collection</b></p>
            <button>Edit</button>
            <button>Delete</button>
            <br/>
            <br/>
          </Card>
        </Link>
        <Link to="/collection/1" css={{
          textDecoration: "none"
        }}>
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>My Collection</b></p>
            <button>Edit</button>
            <button>Delete</button>
            <br/>
            <br/>
          </Card>
        </Link>
        <Link to="/collection/1" css={{
          textDecoration: "none"
        }}>
          <Card img_url="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png">
            <p><b>My Collection</b></p>
            <button>Edit</button>
            <button>Delete</button>
            <br/>
            <br/>
          </Card>
        </Link>
      </div>
      {/* <Pagination /> */}
    </div>
  );
}

export default UserCollection;