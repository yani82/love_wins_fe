import React, { Component } from 'react'

export default class ControlledComp extends Component {
    constructor(props) {
        // call super() in any method to call the same function we're in but the way we did from whatever we're inheriting from  
        super()

        this.state = {
            name: "",
            number: 0,
            output: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.updateOutput()
    }

    updateOutput = () => {
        let name = this.state.name 
        let number = this.state.number 
        let multipliedName = name.repeat(number)

        this.setState({
            output: multipliedName
        })
    }

    handleNameChange = (event) => {
        event.preventDefault()
        this.setState({
            name: event.target.value
        })
    }

    handleNumberChange = (event) => {
        event.preventDefault()
        this.setState({
            number: parseInt(event.target.value)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Name: </h1><input type="text" value={this.state.name} onChange={this.handleNameChange} />

                    <h1>Number: </h1><input type="number" value={this.state.number} onChange={this.handleNumberChange} />

                    <input type="submit"></input>
                </form>
                <div>
                    {this.state.output}
                </div>
            </div>
        )
    }
}
