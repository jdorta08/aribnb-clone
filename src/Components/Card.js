import data from "./data";

const Card = () => {
  return (
    <div className="card--container">
      {data.map((dataCard) => (
        <div className="content--card--wrapper">
          {dataCard.openSpots === 0 && (
            <div className="card--badge sould--out">SOLD OUT</div>
          )}
          <div className="time--img-wrapper">
            <img src={`../Imgaes/${dataCard.image}`}></img>
            <h3>{dataCard.title}</h3>
          </div>
          <div className="stats--wrapper">
            <h4>{dataCard.country}</h4>
            <p> ${dataCard.price}</p>
            <div className="rating--wrapper">
              <p> {dataCard.stats.rating}</p>
              <span>starts from {dataCard.stats.ratingCount} reviews</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
