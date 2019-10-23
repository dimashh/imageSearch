import React, { Component } from 'react';

class ImageHolderComponent extends Component {
  render() {
    return (
      <div>
          <img src={this.props.image.urls.regular}
               alt={this.props.image.alt_description} />
      </div>
    )
  }
}

export default ImageHolderComponent;
