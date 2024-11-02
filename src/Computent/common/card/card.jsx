import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <h1 className="H">Payment Done</h1>
      <img src="./assets/images/card1.svg" alt="imgs" />
      <p>Pay with a Visa or PayPal card and without much ado.</p>
      <a href="#">Learn more</a>
    </div>
  );
};

export default Card;
