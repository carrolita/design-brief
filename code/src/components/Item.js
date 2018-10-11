import React, { Component } from 'react';


class Item extends Component {

  render() {
    return(
      <div className="grid-item">
        <div className="grid-item-image">
          <img className="motorway" src={ this.props.imageUrl } alt={ this.props.imageAlt }/>
        </div>
        <div className="grid-item-content">
          <span className="grid-item-content-title">
            {this.props.title}
          </span>
          <span>
            {this.props.description}
          </span>
          <span className="flex" />
          <div className="mix-container">
            <div className="writerImage">
              <img src={this.props.writerImage}/>
            </div>
            <span className="flex" />
            <div className="bookmark">
              <img src={'images/bookmark.png'}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
