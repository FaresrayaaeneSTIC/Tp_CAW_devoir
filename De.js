import React from "react"; 
import LancerDe from "./LancerDe";


class De extends React.Component {
     
    render() 
    {
        
    return (  
         
         <img src={require(`./Images/${this.props.face}.png`)} alt='hada'></img>

        
        );
        
     
    }

}

export default De ; 