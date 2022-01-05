import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Underlinebar from './Underlinebar';
export default class Card extends Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <>
            <div  className="col-4">
               <div className="p-3 border " style={{height:'200px',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:this.props.bac_color,color:'white'}}>{this.props.text}</div>
           <Underlinebar />
            </div>
            </>
        )
    }
}
