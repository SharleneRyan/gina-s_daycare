import React from 'react'


// This might need to be turned into a stateful (class-based) component
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
     <div className='app'>
    Welcome! to Gina's DayCare App
  </div>
  )

  }
}
 

export default App