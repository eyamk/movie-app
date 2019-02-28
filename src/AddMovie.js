import React, { Component } from 'react'


class AddMovie extends Component{
    state={
        id:'',
      image:'' ,
      titre:'' ,
      year:''
    }


handleChangeMovie=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
       
    })
}

handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state)
    this.props.addmovie(this.state)
}

render (){
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="url" id="image" onChange={this.handleChangeMovie}/>
            <input type="text" placeholder="titre "  id="titre" onChange={this.handleChangeMovie}/> 
            <input type="text" placeholder="year"  id="year" onChange={this.handleChangeMovie}/> 
            <input type="submit" value="Add new movie"/>
        </form>
        </div>
    )
}

} 
export default AddMovie