const Button = (props) => {
  if (props.fill == true) {
    return <button className="main-button">{props.text}</button>;
  }
  return <button className="extra-button">{props.text}</button>;
};

export default Button;
