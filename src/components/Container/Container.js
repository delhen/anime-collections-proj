/** @jsxImportSource @emotion/react */

const Container = props => {
  return (
    <div css={{
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: '100%'
    }}>
      {props.children}
    </div>
  );
};

export default Container;