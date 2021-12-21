// import Avatar from "./Avatar";
import Description from "./Description";
const Profile = () => {
  return (
    <div className="profile-container">
      {/* <Avatar /> */}
      <Description
        name_surname="Petras Petrauskas"
        user_status="Vartotojas"
        username="petriukas"
        email="petriukas.petraitis@gmail.com"
        birthday="2000-00-00"
      />
    </div>
  );
};
export default Profile;
