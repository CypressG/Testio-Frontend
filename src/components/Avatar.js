import profile from "../images/profile.jpeg";
import Button from "./Button";
const Avatar = () => {
  return (
    <div className="avatar-container">
      <div className="avatar-image-container">
        <img src={profile} alt="profile"></img>
      </div>
      <Button />
    </div>
  );
};

export default Avatar;
