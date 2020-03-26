import React from 'react';  
import Header from './Header';
import Footer from './Footer';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []

    };
  }


  componentDidMount() {
    fetch("https://picsum.photos/v2/list?page=1&limit=10")
      .then(res => res.json())
      .then((result) => {
        this.setState({ items: result });
        console.log(result)
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="main">
          {
            this.state.items.map(item => (
              <a href={item.url} target="blank" className="card" key={item.id}>
                <div className="img">
                  <img src={item.download_url} />
                </div>
                <a href={item.url} target="blank" >{item.author}</a>
              </a>
            ))
          }
          <div className="floatClear" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
