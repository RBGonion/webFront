import ItemList from "./ItemList";

function Card({ id, url, state, title, content, item, type }) {
  return (
    <>
      <article className="card">
        <div className="cardImg">
          <img alt="cardImg" src={url} />
        </div>
        <div className="cardMain">
          <div className="status">
            <span className={state}>{state}</span>
          </div>
          <h3>{title}</h3>
          <div>
            <p>{content}</p>
          </div>
        </div>

        {item &&
          item.map((elem, idx) => (
            <ItemList
              key={idx}
              id={elem.id}
              title={elem.title}
              url={elem.url}
              price={elem.price}
              type={type}
            />
          ))}
      </article>
    </>
  );
}

export default Card;
