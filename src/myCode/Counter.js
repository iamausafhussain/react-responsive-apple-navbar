import React from 'react'

class Counter extends React.Component {

   constructor(props) {
      super(props)
   
      this.state = {
          count: 0
      }
   }
   
   handleClick = () => {
      var temp = this.state.count
      temp = temp + 1

      this.setState( {
         count: temp
      })
   }
   
   render() {
      return (
         <div>
            <h3>Count {this.state.count} </h3>
            <button
               onClick={this.handleClick}
            >Increment</button>
         </div>
      )
   }
}

export default Counter
