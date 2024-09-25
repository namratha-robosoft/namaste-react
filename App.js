import React from "react";
import ReactDOM from "react-dom/client";

// React element

const name = "React!";

const TitleComponent = () => (
  <h1 id="heading1" tabIndex={3}>
    Hello world {name}
  </h1>
);

// React Functional component
const HeadingComponent = () => {
  return (
    <div>
      <TitleComponent />
      <h1 id="heading">Hello world from Functions!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
