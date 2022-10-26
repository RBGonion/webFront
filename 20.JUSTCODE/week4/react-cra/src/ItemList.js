function App({ url, title, price, type }) {
  return (
    <>
      <li className={`item ${type}`}>
        <img alt="item" src={url} />
        <div className="content">
          <div>
            <p>{title}</p>
            <p className="price">{price}</p>
          </div>
          <button className="button" />
        </div>
      </li>
    </>
  );
}

export default App;
