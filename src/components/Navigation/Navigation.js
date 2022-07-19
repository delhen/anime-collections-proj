/** @jsxImportSource @emotion/react */

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
          padding: '8px'
        }
      }}>
        <li>Home</li>
        <li>My Collections</li>
      </ul>
    </nav>
  );
};

export default Navigation;