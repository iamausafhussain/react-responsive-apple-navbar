import React from 'react';

export default class ToDoList extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         listArr: [],
         listVar: ""
      }
   }

   handleList = (e) => {
      this.setState({
         listVar: e.target.value
      })
   }

   handlePush = () => {
      if(this.state.listVar != ""){
         var temp = this.state.listArr;
         temp.push(this.state.listVar);
   
         this.setState({
            listArr: temp,
            listVar: ""
         })
      }
      
   }

   handleDone = (index) => {
      var temp = this.state.listArr;
      temp.splice(index, 1);

      this.setState({
         listArr: temp
      })
   }

   render() {
      return (
         <div>
            <h3>
               To-Do-List
            </h3>
            <br />

            <input
               placeholder="Enter a Task here"
               value={this.state.listVar}
               onChange={this.handleList}
            >
            </input>
            <button
               onClick={this.handlePush}
            >Add task</button>

            <h2>Tasks to do</h2>
            <div>
               <ol>
                  {this.state.listArr.map((double, index) => {
                     return (
                        <li>
                           {double}
                           <button
                              onClick={(e) => {
                                 { this.handleDone(index) }
                              }}
                           >
                              Done
                           </button>
                        </li>
                     )
                  })}
               </ol>
            </div>
         </div>
      )
   }
}