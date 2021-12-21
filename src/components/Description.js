const Description = (props) => {
  return (
    <div className="description-container">
      <h1>{props.name_surname}</h1>
      <h3>{props.user_status}</h3>
      <hr className="hr-page-divider" />
      <div className="description-labels-container">
        <div className="description-labels-container-username">
          <p>Vartotojo vardas</p>
          <p>{props.username}</p>
        </div>
        <div className="description-labels-container-email">
          <p>El. pašto adresas</p>
          <p>{props.email}</p>
        </div>
        <div className="description-labels-container-birthday">
          <p>Gimimo data</p>
          <p>{props.birthday}</p>
        </div>
      </div>
      <hr className="hr-page-divider" />
    </div>
  );
};
export default Description;
