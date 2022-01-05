
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout3.css"
import Progbar from "../components/Progbar";
import Myfoucas from "../components/Myfoucas";


class Layout3 extends React.Component {
	constructor(props){
		super()
	}
render(){
		return(
			<>
			 <div className="d-flex flex-column justify-content-around container-fluid " style={{minHeight:"100vh",backgroundColor:"black"}}>
<div className="titlemy">Skills</div>
<div className="titleDescription"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
<div className="titleservics ">
<div className="part1">
    
    <Myfoucas text="Myfoucas"/>
    <div className="underline22"></div>
    <Myfoucas text="ui/ux"/>
    <Myfoucas text="responsive design"/>
    <Myfoucas text="web design"/>
    
</div>
<div className="part2">
<Progbar title="html" prog_value="90%"/>
<Progbar title="css" prog_value="20%"/>
<Progbar title="js" prog_value="70%"/>
<Progbar title="react" prog_value="50%"/>
</div>


         </div>

             </div>
			 </>
			)
	}



}

export default Layout3;