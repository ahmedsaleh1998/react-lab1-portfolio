
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Layout1 extends React.Component {
	constructor(props){
		super()
	}
render(){
		return(
			<>
			 <div className="d-flex justify-content-around align-items-center container-fluid " style={{minHeight:"85vh",backgroundImage:"url(https://64.media.tumblr.com/e179ebadfb7f930d9ef8906a91d97119/tumblr_ohulf5qkBT1vz685mo1_500.gifv)"}}>
<div className="ml-3"><div className="text-white" style={{fontSize:'2rem'}}> Ahmed Mahmoud Saleh</div>
<div className="text-white"  style={{fontSize:'1rem'}}> Full-Stack Developer</div>
<button type="button" className="btn btn-dark mt-4">download cv</button></div>
<div>
{/* <img src={require('./Programming.gif')} className="img-fluid" alt="..." /> */}
</div>
			 </div>
			 </>
			)
	}



}

export default Layout1;