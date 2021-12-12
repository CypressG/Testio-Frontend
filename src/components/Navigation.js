import avatar from "../images/avatar.svg";

const Navigation = (props) => {
  return (
    <div id="navbar-container">
      <div id="navbar-logo-container">
        <h1>{props.name.toUpperCase()}</h1>
        <div id="navbar-logo-image-container">
          <img src={props.img} alt="logo" />
        </div>
      </div>
      <div id="navbar-menu-container">
        <ul id="navbar-menu-items-container">
          <li>Testai</li>
          <li>Pagalba</li>
        </ul>
        <div id="navbar-menu-avatar-container">
          <h5>Sveikas, {props.user} </h5>
          <img src={avatar} alt="profile"></img>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
