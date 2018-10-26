import React, { Component } from 'react';
import { select } from 'd3-selection';
class Rect extends Component {
   constructor(props){
      super(props)
      this.createRect = this.createRect.bind(this)
   }
   componentDidMount() {
      this.createRect()
   }
   componentDidUpdate() {
      this.createRect()
   }
   createRect() {
    var data= this.props.data;
    var width = 100;
    var height = 80;

    const node = this.node 

    const canvas = select(node) //Binding the DOM SVG Element with d3
                  .data(data)   //Binding the {data}
                  .append("g")  //To keep multiple parts in one group
                  .attr("width","auto")
                  .attr("height","auto")
    //Rectangle 1   
    canvas
      .append("rect")  //Adding Rectangle which displays the {color} and {build percentage(%)}
      .style("fill",(d)=>d[1])
      .attr("x",(d)=>d[3]) //Getting X coordinates from Json
      .attr("y",(d)=>d[4]) //Getting Y coordinates from Json
      .attr("width",width)
      .attr("height",height)
      

    canvas.selectAll("text") // Adding a text to display the build percentage in Rectangle 1
      .data(data)
      .enter()
      .append("text")
      .attr("x",(d)=>d[3]+(width/2)-15)
      .attr("y",(d)=>d[4]+(height/2)+10)
      .attr("font-size","20px")
      .text((d)=>d[0]+"%")

  //Rectangle 2
    canvas
      .append("rect") //Adding  Rectangle which displays the {Chamber number}
      .style("fill","yellow")
      .attr("x",(d)=>d[3])
      .attr("y",(d)=>d[4]+height)
      .attr("width",100)
      .attr("height",30)
      
    canvas
      .append("text") // Adding  text to display the {chamber Number}  in Rectangle 2
      .attr("x",(d)=>d[3]+25)
      .attr("y",(d)=>d[4]+height+20)
      .text((d)=>d[2])
      .attr("font-size","20px")

   }
  render() {
      //svg-position class is defined in index.html to set the svg position to absolute 
      return <svg className="svg-position" ref={node => this.node = node} width="100vw" height="100vh"> </svg> 
   }
}

export default Rect;