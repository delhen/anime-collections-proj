/** @jsxImportSource @emotion/react */

const cardStyle = {
  display: 'flex',
}

const Card = (props) => {
  return (
    <div css={{
      borderRadius: '8px',
      backgroundColor: 'white',
      color: 'black',
      overflow: 'hidden',
      '& .image-holder': {
        width: '100%',
        position: 'relative',
      }
    }} onClick={e => e.stopPropagation()}>
      <div className="image-holder">
        <img src={props.img_url}
              css={{
                maxWidth: '100%',
        }} />
      </div>
      <div className="information">
        {props.children}
      </div>
    </div>
  );
};

export default Card;