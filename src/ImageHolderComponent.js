import React, { Component } from 'react';

class ImageHolderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: 0 }
    this.imageReference = React.createRef();
  }

  componentDidMount() {
    this.imageReference.current.addEventListener('load', this.setRows);
  }

  setRows = () => {
    const height = this.imageReference.current.clientHeight;
    const rows = Math.ceil(height/10);
    this.setState({ rows: rows });
    console.log(this.imageReference.current.clientHeight);
  }

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.rows}`}}>
          <img ref={this.imageReference}
            src={this.props.image.urls.regular}
            alt={this.props.image.alt_description} />
      </div>
    )
  }
}

export default ImageHolderComponent;
