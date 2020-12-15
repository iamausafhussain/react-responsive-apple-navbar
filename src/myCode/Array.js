import React from "react";

export default class Array extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         arr: [
            {
               name: "Ausaf Hussain",
               branch: "CSE"
            },
            {
               name: "Mohammad Harish",
               branch: "CSE"
            }
         ]
      }
   }

   handlePush = () => {
      var temp = this.state.arr
      temp.push( {
         name: "Senior Software dev",
         branch: "Bhubneshwar"
      })

      this.setState( {
         arr: temp
      })
   }

   handlePop = () => {
      var temp = this.state.arr
      temp.pop();

      this.setState( {
         arr: temp
      })
   }

   handleSplice = () => {
      var temp = this.state.arr
      temp.splice(1, 2);

      this.setState( {
         arr: temp
      })

   }

   render() {
      return(
         <div>
            {this.state.arr.map( (single, index)=> {
               return(
                  <div>
                     <br/>
                     {single.name}-{single.branch}
                  </div>
               )
            })}

            <button
               onClick={this.handlePush}
            >
               Push
            </button>

            <button
               onClick={this.handlePop}
            >
               Pop
            </button>

            <button
               onClick={this.handleSplice}
            >
               Splice
            </button>
         </div>
      )
   }
}