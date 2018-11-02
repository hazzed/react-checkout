import React, {Component } from 'react';

import { Row, Col ,Button, Collaspe, Well, Media} from 'react-bootstrap';

export default class ItemDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      open:false,
    };
  }
  render() {
    return (
      <div>
        <Button
          className = "item-details-button"
          bsStyle="link"
          onClick={() => this.setState({open: !this.state.open})}>
          {this.state.open === false ? `See` : `Hide `} item details
          {this.state.open === false ? `+` : `-`}
        </Button>
      </div>
    )
  }
}