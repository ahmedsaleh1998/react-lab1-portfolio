
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Layout2 extends React.Component {
	constructor(props){
		super()
	}
render(){
		return(
			<>
			 <div className="d-flex row justify-content-around container-fluid " style={{minHeight:"50vh",backgroundColor:""}}>
            <div className="col-6 mt-3" style={{fontSize:'2rem'}}> About Me </div>
            <div className="col-6 align-content-start">
                <div className="text-start mt-3"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <button type="button" className="btn btn-dark   mt-5">download resume</button>
            </div>
             </div>
			 </>
			)
	}



}

export default Layout2;