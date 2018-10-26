import React, { Component } from 'react';
//Relative imports
import Rect from './Rect';

const data = [
                [30,"red","c001",30,10],
                [45,"green","c002",1050,10],
                [60,"green","c003",650,470],
                [14,"green","c004",160,470]
            ]

const svgcontainerpostion = {
                                position: "relative"
                            }

class App extends Component {

   render() {
            return (
               <div className='App'>
                    <div style={svgcontainerpostion}>
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