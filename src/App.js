import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
    constructor(){
        super();
        this.state={
            books:[]
        }
    }
    
    componentDidMount(){
        axios.get(' http://localhost:3000/books')
        .then(response =>{
          console.log(response);
        })
    }



  render() {
    return (
    <div>
      
      </div>
    );
  }
}

export default App;

