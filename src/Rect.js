import React, { Component } from 'react';
import { select } from 'd3-selection'
import PropTypes from 'prop-types';
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
    // // const {data}=this.props;
    // console.log((this.props.data));
    // console.log(data);
      const node = this.node
     const canvas = select(node)
            .data(data)
            .append("svg")
            .attr("width",150)
            .attr("height",150)


            canvas
            .append("rect")
            .style("fill",(d)=>d[1])
            .attr("x",15)
            .attr("y",10)
            .attr("width",150)
            .attr("height",150)
      
          canvas.selectAll("text")
          .data(data)
          .enter()
          .append("text")
          .attr("x",15+50)
          .attr("y",20+45)
          .attr("font-size","20px")
          .text((d)=>d[0]+"%")
      
          canvas
            .append("rect")
            .style("fill","yellow")
            .attr("x",15)
            .attr("y",110)
            .attr("width",150)
            .attr("height",50)
      
          canvas
          .append("text")
          .attr("x",15+50)
          .attr("y",120+15)
          .text((d)=>d[2])
          .attr("font-size","15px")

   }
render() {
      return <div ref={node => this.node = node}>
      </div>
   }
}
Rect.defaultProps ={
  data:[]
}
Rect.propTypes ={
  data:PropTypes.array
}
export default Rect;