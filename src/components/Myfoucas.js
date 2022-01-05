import React, { Component } from 'react'

export default class Myfoucas extends Component {
    constructor(props){
        super()
    }
    render() {
        return (
            <>
            <div>
                {this.props.text}
            </div>
            </>
        )
    }
}
