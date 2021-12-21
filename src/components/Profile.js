import Avatar from "./Avatar";
import Description from "./Description";
import Button from "./Button";
import Navigation from "./Navigation";

import logo from "../images/logo.png";

const Profile = () => {
  return (
    <div>
      <Navigation name="Testio" img={logo} user="Petras" />
      <div className="profile-container">
        <Avatar />
        <Description
          name_surname="Petras Petrauskas"
          user_status="Vartotojas"
          username="petriukas"
          email="petriukas.petraitis@gmail.com"
          birthday="2000-00-00"
        />
        <div className="profile-button-container">
          <Button text="Info" fill={false} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
