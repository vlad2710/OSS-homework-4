import React, { Component } from 'react'

export default class Task6 extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                {this.props.display && <p>You are in</p>}
            </div>
        )
    }
}
