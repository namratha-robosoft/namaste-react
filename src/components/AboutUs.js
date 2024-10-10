import { Component } from "react";
import UserClass from "../components/UserClass";
import UserContext from "./utils/UserContext";
class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="about-us-container">
        About Us
        <hr />
        <UserContext.Consumer>
          {(data) => (
            <h2 className="font-bold">Logged UserName: {data.loggedInUser}</h2>
          )}
        </UserContext.Consumer>
        <UserClass name={"Namratha"}></UserClass>
      </div>
    );
  }
}

export default AboutUs;
