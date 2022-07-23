export const paginationStyle = {
  display: "flex",
  justifyContent: "space-between",
  margin: '32px 0 24px 0',
  width: '300px',
  "& button": {
    color: 'black',
    padding: '8px 16px',
    textDecoration: 'none',
    borderRadius: '4px',
    border: "none",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#FF0063",
      color: "white",
    },
    "&:disabled": {
      backgroundColor: '#cccccc',
      color: '#666666',
    }
  }
}