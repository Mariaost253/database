import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from "axios";
import {setBooks} from '../actions';
import BookItem from './BookItem';
//import PropTypes from 'prop-types';

class BookSearch extends Component {
    constructor(){
        super();
        this.state={
            isReady: false,
            isErrorDialogOpen: false,
             books: []
            
        }
    }

   // static defaultProps = {
    //    books: {}
   // };

   // static propTypes = {
   //     books: PropTypes.arrayOf(PropTypes.object).isRequired
   // };

    


    componentDidMount(){
      axios.get('./db.json')
      .then(response => {this.props.setBooks(response.data)})
      //.then(response =>{
      //  console.log(response);
     // })
    }
    
    check(){
        
        this.props.books.map((book,index)=>{
            console.log('this',book);
        return (
            
           <BookItem book={book} key={index}/>
               );
    })

    }
    


render() {
    return (
        <div>
        {this.check()}
        </div>
    );
  }
}

/*
function mapStateToProps(state){
    console.log(state)
    return {
        books:state.books

    };
}*/

function mapStateToProps(state){
    return state;
}

/*
*/


export default connect(mapStateToProps, {setBooks})(BookSearch);
