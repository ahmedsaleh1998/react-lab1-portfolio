
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";

class Layout4 extends React.Component {
	constructor(props){
		super()
	}
render(){
		return(
			<>
			 <div className="d-flex justify-content-around align-items-center container-fluid " style={{minHeight:"85vh",backgroundColor:""}}>
             <div class="container overflow-hidden">
  <div className="row gy-5">
   <Card  text="Web Design" bac_color="black"/>
   <Card  text="Mobile Design" bac_color="gray"/>
   <Card  text="Logo Design" bac_color="black"/>
   <Card  text="Web Application Development" bac_color="gray"/>
   <Card  text="Mobile Apllication Development" bac_color="black"/>
   <Card  text="Pwa Develpment" bac_color="gray"/>
  </div>
</div>
			 </div>
			 </>
			)
	}



}

export default Layout4;