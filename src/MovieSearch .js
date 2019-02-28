import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import './movie.css'


class MovieSearch  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyword:''
         }
    }
handelchange=(event)=>{
    this.setState({keyword:event.target.value})
    this.props.searchname(event.target.value)
    
}
    render() { 
        return ( <div className='search'>
<input type='text' placeholder="type movie name to search" onChange={this.handelchange} />
  {/* <input type="button" value="search" onClick={()=>this.handelchange}/>  */}
        </div>
     
        )
    }
}
export default MovieSearch 


