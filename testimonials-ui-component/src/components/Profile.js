const Profile = ({ profile }) => {
  const { name, jobTitle, companyName, avatar } = profile;
  const position = `${jobTitle} at ${companyName}`;
  return (
    <div className="profile">
      <img src={avatar} alt="avatar" className="profile-avatar" />
      <div className="profile-info">
        <b className="profile-name">{name}</b>
        <p className="profile-position">
          {position.length > 20 ? `${position.slice(0, 20)}...` : position}
        </p>
      </div>
    </div>
  );
};

export default Profile;
