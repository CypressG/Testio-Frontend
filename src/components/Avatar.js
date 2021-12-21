import profile from "../images/profile.jpeg";
import Button from "./Button";
const Avatar = () => {
  return (
    <div className="avatar-container">
      <img src={profile} alt="avatar"></img>
      <Button />
    </div>
  );
};

export default Avatar;
