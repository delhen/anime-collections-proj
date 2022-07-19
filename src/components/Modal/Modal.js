/** @jsxImportSource @emotion/react */

const Modal = props => {

  if(!props.show){
    return null;
  }

  const modalStyle = {

  }

  const modalContentStyle = {
    width: "500px"
  }

  return (
    <div css={{
      position: "fixed",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "black",
    }} onClick={props.onClose}>
      <div css={{
        width: "80%",
        backgroundColor: "white",
        padding: "16px",
        borderRadius: "8px",
        "@media(min-width: 600px)":{
          width: "25%",
        }
      }} onClick={e => e.stopPropagation()}>
        <div css={{
          position: "relative"
        }}>
          <h4>Add to Collection</h4>
          <button css={{
            position: "absolute",
            top: '-5px', right: 0
          }} onClick={props.onClose}>x</button>
        </div>
        <div>
          <p>Cowboy Bebop</p>
        </div>
        <div>
          <ul css={{
            listStyleType: "none",
            padding: 0,
            margin: '16px 0',
            textAlign: "left"
          }}>
            <li><strong>Logo | Collection 1</strong></li><hr />
            <li><strong>Logo | Collection 2</strong> (<small><i>Already added</i></small>)</li><hr />
            <li><strong>Logo | Collection 3</strong></li><hr />
            <li><strong>Logo | Collection 4</strong></li><hr />
            <li><strong>Logo | Collection 5</strong></li><hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;