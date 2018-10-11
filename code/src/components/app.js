import React from "react"
import Item from './Item';
import items from './items.json';

class App extends React.Component {

  render() {
    return (<div className="App">
      <nav className="navbar">
        <div className="navbar-item">
          <a href="#Home">Home</a>
          <a href="#Technology">News</a>
          <a href="#Entrepreneurship">Contact</a>
          <a href="#Self">About</a>
          <a href="#Culture">Culture</a>
          <a href="#Digital design">Digital design</a>
          <a href="#Popular on medium">Popular on medium</a>
          <a href="#Politics">Politics</a>
          <a href="#More">More</a>
        </div>
        <button className="header-button">Get started</button>

      </nav>
      <div className="content">
        <div className="container">
          <div className="hero-container">
            <span className="title">Intresting ideas that set
              <br/>
              your mind in motion.</span>
            <div className="text-item">
              <span>Hear directly from the people who know it best. From tech to
                <br/>
                politics to creativity and more - Whatever your intrest, we've
                <br/>
                got you coverd.</span>
            </div>
            <div>
              <button className="buttons">Get started</button>
              <button className="buttons">Learn more</button>
            </div>
              <img className="hero" src="images/medium-image.png" alt="nature"/>
            </div>
          </div>
          <div className="grid">
            {items.map(item => <Item writerImage={item.writerImage} imageUrl={item.imageUrl} imageAlt={item.imageAlt} title={item.title} description={item.description}/>)}
          </div>
        </div>
      </div>
      );
  }

}

export default App
