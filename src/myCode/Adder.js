import React from 'react';

export default class Adder extends React.Component{
   
   constructor(props){
      super(props);

      this.state = {
         num1: "",
         num2: "",
         sum: 0
      }
   }

   handleNumOne = (event) => {
      this.setState ( {
         num1: event.target.value
      })
   }

   handleNumTwo = (event) => {
      this.setState ( {
         num2: event.target.value
      })
   }

   handleSum = () => {
      this.setState ( {
         sum: parseInt(this.state.num1) + parseInt(this.state.num2)
      })
   }

   render() {
      return(
         <div>
            <input
               placeholder="Enter a number here"
               value={this.state.num1} 
               onChange={this.handleNumOne}
            />
            <br/>

            <input
               placeholder="Enter a number here"
               value={this.state.num2}
               onChange={this.handleNumTwo}
            />
            <br/>

            <button onClick={this.handleSum}>
               Add
            </button>
            <br/>

            <p>Sum is: {this.state.sum} </p>
         </div>
      )
   }
}