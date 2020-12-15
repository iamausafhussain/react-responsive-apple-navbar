import React, {Component} from 'react';

export default class Class1 extends Component {
   constructor(props) {
      super(props)

      this.state = {
         name: "Ausaf Hussain"
      }
   }

   render() {
      return (
         <div>
            <span>Hello: {this.state.name} </span>
         </div>
      )
   }
}
