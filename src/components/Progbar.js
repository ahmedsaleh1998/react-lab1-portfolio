
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Progbar extends React.Component {
	constructor(props){
		super()
	}
render(){
		return(
			<> 
<div className="progress margintop">
  <div style={{width:'50px' ,height:'30px',fontSize:'18px'}} className="bg-Secondary text-dark d-flex justify-content-center"> {this.props.title}</div>
  <div className="progress-bar bg-secondary" role="progressbar" style={{width: this.props.prog_value}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
			 </>
			)
	}
}

export default Progbar;