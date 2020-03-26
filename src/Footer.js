import React from 'react';  

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }



  render() {

    return (
      <div className="footer">
        Design by Yunus Güneş
      </div>
    );
  }
}

export default Footer;
