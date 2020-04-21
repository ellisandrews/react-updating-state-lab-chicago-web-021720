import React, { Component } from 'react'

export class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = event => {
        this.setState(prevState => {
            return {
                ...prevState,
                timesClicked: prevState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker
