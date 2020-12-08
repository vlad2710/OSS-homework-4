import React, { Component } from "react";
import './Authorization.css'

export default class Authorization extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isLogged: false
    };

    this.handleClick = () => {
        this.setState( ({isLogged}) =>{
            return{
                isLogged: !isLogged
            }
        } )
    };
  }

  render() {
      if(this.state.isLogged){
          return(
              <div className='authorization'>
                  <p>You are logged in</p>
                  <button className='btn_log' onClick={this.handleClick}>Logout <i className="fas fa-lock"></i></button>
              </div>
          )
      } else{
          return(
              <div className='authorization'>
                  <p>You are not logged in</p>
                  <button className='btn_log' onClick={this.handleClick}>Login <i className="fas fa-lock-open"></i></button>
              </div>
          )
      }
  }
}
