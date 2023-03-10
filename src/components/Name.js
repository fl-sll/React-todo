import React from "react";

class Name extends React.Component {
  render() {
    const style = {
      color: "gray",
      textAlign: "center",
      fontSize: "2vw",
      margin: "10px",
    };
    return (
      <div>
        <h1 style={style}> Edward Alvin Koesmato </h1>
        <h2 style={style}> 2501963141 </h2>
      </div>
    );
  }
}

export default Name;
