/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

const Navigation = _ => {
  return (
    <nav css={{
      textAlign: "center",
      display: "flex",
      justifyContent: "center"
    }}>
      <ul css={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
        '& li': {
          display: "inline",
          padding: '8px',
          '& a': {
            color: '#EAF6F6',
            textDecoration: 'none',
            fontWeight: 600,
            '&:hover': {
              color: '#c9d0d0'
            }
          }
        }
      }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collections">My Collections</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;