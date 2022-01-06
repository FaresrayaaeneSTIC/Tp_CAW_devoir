import './App.css';
import React,{ useState , Component} from 'react';
import De from './De.js'; 
import './LancerDe.css' ;



class LancerDe extends React.Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  
  constructor(props) {
    super(props); 
    this.state= {De1:"one" , De2:"one" , ind1:"", ind2:"",res:"",score:0 ,counter:0 , isToggle : true };
    this.lancer = this.lancer.bind(this);
    this.rest = this.rest.bind(this); 
    this.toggle = this.toggle.bind(this); 
  }

  toggle (){
    let c = this.state.isToggle ; 
    this.setState({isToggle:!c}); 
  }


  render () {
    return (
    
    <div className='LancerDe'>
    <div className='LancerDe-container'>
      <De id="de" face={this.state.De1} />
      <De face={this.state.De2} />
    
    </div>
    
     <button id="bt1" onClick={this.lancer} disabled = {this.state.counter>=10 ? true : false} >Lancer les Dés</button> 
     <button  onClick={this.rest } disabled= {this.state.counter>=10 ? false : true }>Rest</button> 
       
      <h1>{this.state.res}</h1>
      <h3>the score is : {this.state.score}</h3>
  </div>);
    
    

   
  }

  lancer(){
    const newDe1=this.props.sides
    [Math.floor(Math.random() * this.props.sides.length)];
   //find index of newDe1
   const indexde1 = this.props.sides.findIndex(e => e === newDe1) + 1;
   
    const newDe2=this.props.sides
   [Math.floor(Math.random() * this.props.sides.length)] ;
    
   //find index of newDe2
   const indexde2 = this.props.sides.findIndex(e => e === newDe2 ) + 1;
   
    this.setState({ind1:indexde1,ind2:indexde2})
    
    this.setState({De1: newDe1, De2: newDe2})
    //comp is a method of comparison 
    this.comp(indexde1,indexde2) 

    this.setState({counter: this.state.counter + 1 }); 
    
  }

comp (fs,sec){
  if(fs === sec) {
    this.setState({res:"you win !!!"});
    //increment of score
    this.setState({score:this.state.score + 1 });
  }else {
    this.setState({res:"Try again"});
     //decrement of score 
    this.setState({score:this.state.score - 1 });
  }
}

rest(){
  this.setState({score:0}) ; 
}

}

export default LancerDe ; 








