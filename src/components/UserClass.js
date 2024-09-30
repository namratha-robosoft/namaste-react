import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/namrathakulal");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = userInfo;
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
