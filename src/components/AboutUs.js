import { Component } from "react";
import UserClass from "../components/UserClass";
import Cart from "../components/Cart";
// const AboutUs = () => {
//   return (
//     <div className="about-us-container">
//       About Us
//       <hr />
//       <UserClass name={"Namratha"} location={"Mangalore"}></UserClass>
//     </div>
//   );
// };

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
        <UserClass name={"Namratha"} location={"Mangalore"}></UserClass>
      </div>
    );
  }
}

export default AboutUs;
