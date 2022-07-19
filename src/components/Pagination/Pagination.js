/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";

const paginationStyle = {
  display: "flex",
  justifyContent: "space-between",
  margin: '32px 0 24px 0',
  width: '300px',
  "& a": {
    color: 'black',
    padding: '8px 16px',
    textDecoration: 'none',
    borderRadius: '4px',
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FF0063",
      color: "white",
    }
  }
}

const Pagination = _ => {
  return (
    <div css={paginationStyle}>
      <a href="#"> ❮ Previous</a>
      <a href="#"> ❯ Next</a>
    </div>
  );
};

export default Pagination;