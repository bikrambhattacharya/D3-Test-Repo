import React, { Component } from 'react'

import Rect from './Rect';

const data = [
    [30,"red","c001"],
    [45,"green","c002"],
    [60,"green","c003"],
    [14,"green","c004"]
]
class App extends Component {
   render() {
   return (
      <div className='App'>
      <div className='App-header'>
      </div>
      <div>
          {
              data.map(data=>{

                  return <Rect key={data[0]} data={[data]}/>
              })
          }
      </div>
      </div>
   )
   }
}
export default App