const Description = (props) => {
  return (
    <div className="description-container">
      <h1>{props.username}</h1>
      <p>{props.user_status}</p>
      <hr></hr>
    </div>
  );
};
export default Description;
