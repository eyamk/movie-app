import React, { Component } from 'react';
import {Container,Row,Col} from 'react-grid-system'
import Item from './item';



    
const Liste=({news})=>{
    return(<div className="espace">
      <Container>
      <Row>
        {news.map((el,index)=>{return <Col md={4} sm={4}> <Item  key={index}  item={el} /></Col>})}
        </Row>
        </Container>
    </div>)
}


export default Liste;