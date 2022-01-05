
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Layout5 extends React.Component {
	constructor(props){
		super()
	}
render(){
		return(
			<>
			 <div className="d-flex justify-content-around align-items-center container-fluid " style={{minHeight:"40vh",backgroundColor:"black"}}>
<div className="div1 text-white">
    <div>Git in touch</div>
    <div>email : am304844@gmail.com</div>
    <div>phone : 01284824533</div>
</div>
<div className="div2 text-white">
<button type="button" className="btn btn-dark   mt-5">contact me</button>
</div>
<div className="div3 text-white">
    <div>facebook</div>
    <div>linked in </div>
</div>




			 </div>
			 </>
			)
	}



}

export default Layout5;