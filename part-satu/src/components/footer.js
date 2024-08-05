import React from "react";

class footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>My Footer</h1>
        {this.props.isi()}
      </div>
    );
  }
}

export default footer;
