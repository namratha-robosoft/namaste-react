const User = (props) => {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <h3>Location: {props.location}</h3>
    </div>
  );
};

export default User;
