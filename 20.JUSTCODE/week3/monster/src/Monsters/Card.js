const Card = ({ id, name, email }) => {
  console.log(id);
  return (
    <div className="card-container">
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`} // JSX안에서 리터럴 템플릿을 사용할 수 있다
          alt="monster"
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
