/** @jsxImportSource @emotion/react */
import { paginationStyle } from "./PaginationStyle";

const Pagination = props => {
  return (
    <div css={paginationStyle}>
      <button onClick={props.onPrevPage} disabled={props.page == 1 ? "disabled" : ""}>❮ Previous</button>
      <button onClick={props.onNextPage} disabled={props.nextPage ? "" : "disabled"}>Next ❯</button>
    </div>
  );
};

export default Pagination;