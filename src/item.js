/* import React from 'react';
import './movie.css';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

const Myitem = ({props}) => {
  return (
    <div className="mdbcard">
      <Card>
        <CardImg top width="60%" src={props.image}/>
        <CardBody>
            
            <div className="display">
          <CardTitle >{props.titre}</CardTitle>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Myitem; */

import React, { Component } from 'react';
import './movie.css';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';


 class Item extends Component {
constructor(props) {
 super(props);
 this.state = {  }
 }
        render() { 
        const {item}=this.props
        return ( <div className="mdbcard">
         <Card>
        <CardImg top width="90%" height="200px" src={item.image}/>
        <CardBody>
        <div className="title">
        <CardTitle >{item.titre}<br/><span>{item.year}</span></CardTitle>
        </div>
        </CardBody>
        
        {/* <span>&times;</span> */}
        </Card>
        </div>
          );
         }
              }  
        export default Item
