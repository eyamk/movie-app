import React, { Component } from 'react';
import MovieSearch from './MovieSearch '
import './movie.css';
import Liste from './liste'
import Rating from './ratingstar'
import { Container, Row, Col } from 'react-grid-system'
import StarRatingComponent from 'react-star-rating-component';
import AddMovie from './AddMovie'

 const items=[
  {id:1,image:"http://caissedeson.com/wp-content/uploads/2017/02/Arrival.jpg" ,titre:"Arrival",year:"2014"},
  {id:2,image:"https://media4.picsearch.com/is?ecc611LHBB-3GHEs-3E0Eb1oWmsg9T9-LMI8-98Wvgk&height=341" ,titre:"The divergent", year:"2016"},
  {id:3,image:"http://fr.web.img3.acsta.net/c_215_290/pictures/17/09/15/12/42/0056825.jpg",titre:"Coco", year:"2017"},
  {id:4,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIylaq4D_67u67p2afAdk4aAZPFRY3zx5vExBBkbUu14Z_q-f",titre:"Secret wings" ,year:"2012"}
  ] 

class App extends Component {
  constructor(props){
    super(props)
      this.state={   
   news:items ,
   filtred:items
    
      }
    }

    /* deleteitem=(id)=>{
      let items=this.state.items
      let i=items.findIndex(item=>item.id===id)
      items.splice(i,1)
      this.setState({items})
    } */

  search(keyword){
    let filter1=this.state.news.filter((el,i)=>{return (el.titre.toLowerCase().indexOf(keyword)>-1)||(el.year.indexOf(keyword)>-1)})
    this.setState({filtred:filter1})
  }



addmovie=(item)=>{
let items=this.state.news;
items.push(item);
this.setState({items})
}



  render() {
    
    return (
      
      <div className="App">
      <Container>
       
       <MovieSearch  searchname={(keyword)=>this.search(keyword)}/>
       <Rating  />
       <Liste news={this.state.filtred}/>
       <AddMovie addmovie={this.addmovie}/>
       </Container>
      </div>
    );
  }
}
export default App;
