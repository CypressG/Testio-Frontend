import profile from "../images/profile.jpeg";
const Avatar = () => {
  return (
    <div className="avatar-container">
      <div className="avatar-image-container">
        <img src={profile} alt="profile"></img>
        <div className="avatar-image-overlay"></div>
      </div>
    </div>
  );
};

export default Avatar;
