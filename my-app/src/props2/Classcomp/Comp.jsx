import React, { Component } from 'react';
import Funct from "./Funct"
 class Comp extends Component {
     student="M.Suga"
     id="28"
     course="computer science engineering"
     college="Loyal Engineering college"
  render() {
    return <>
         <Funct stu_name={this.student} stu_id={this.id} stu_Course={this.course} stu_College={this.college}/>
    </>;
  }
}

export default Comp;
