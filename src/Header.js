import React from 'react';  

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }



  render() {

    return (
      <div className="header">
        <div className="logo">
          <img src="logo192.png" />
        </div>
        <div className="title">
          <h1>ByNoGame</h1>
        </div>
        <div className="floatClear" />
      </div>
    );
  }
}

export default Header;
