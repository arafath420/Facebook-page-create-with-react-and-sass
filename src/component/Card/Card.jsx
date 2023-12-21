import "./Card.scss";

const Card = ({ children }) => {
  return (
    <>
      <div className="card-content">{children}</div>
    </>
  );
};

export default Card;
