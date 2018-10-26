import React, { Component } from 'react';
//Relative imports
import Rect from './Rect';

const data = [
                [30,"red","c001",270,200],
                [45,"green","c002",345,400],
                [60,"green","c003",720,400],
                [14,"green","c004",850,110]
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