const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  }
  return (
    <div className="content--card--wrapper">
      {badgeText && <div className="card--badge sould--out">{badgeText}</div>}
      <div className="time--img-wrapper">
        <img src={props.item.image.cover}></img>
        <h3>{props.item.title}</h3>
      </div>
      <div className="stats--wrapper">
        <h4>{props.item.country}</h4>
        <p>
          <b>${props.item.price}</b>{" "}
        </p>
        <div className="rating--wrapper">
          <p> {props.item.stats.rating}</p>
          <span>stars from {props.item.stats.ratingCount} reviews</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
