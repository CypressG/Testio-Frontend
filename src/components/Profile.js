// import Avatar from "./Avatar";
import Description from "./Description";
const Profile = () => {
  return (
    <div className="profile-container">
      {/* <Avatar /> */}
      <Description
        username="Petras Petrauskas"
        user_status="Vartotojas"
      />
    </div>
  );
};
export default Profile;
