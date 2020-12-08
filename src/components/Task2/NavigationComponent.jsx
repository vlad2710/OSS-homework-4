import React, { Component } from 'react'
import './NavigationComponent.css'

export default class NavigationComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = { expanded: false };
      }
    
      onToggleButtonClick() {
        this.setState(state => ({ expanded: !state.expanded }));
      }
    
      render() {
        return (
          <div>
            <button onClick={this.onToggleButtonClick.bind(this)}></button>
            {this.state.expanded && this.renderDrawer()}
          </div>
        );
      }
    
      renderDrawer() {
        return (
          <nav>
            <ul>
              <li><a href="#">Some link</a></li>
              <li><a href="#">Another link</a></li>
              <li><a href="#">Just one more link</a></li>
            </ul>
          </nav>
        );
      }
}
