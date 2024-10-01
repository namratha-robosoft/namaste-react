import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "",
        html_url: "",
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
    const { login, html_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>{login}</h2>
        <h3>Location: {html_url}</h3>
      </div>
    );
  }
}

export default UserClass;
