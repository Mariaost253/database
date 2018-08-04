import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from "axios";
import {setBooks} from '../actions';
import BookItem from './BookItem';
import PropTypes from 'prop-types';

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
   console.log(this.props.books);
    }
    


render() {
    return (
        <div>
          {
    this.props.books.map(book=>{
        return (
            <div className='users-list-item' key={book.id}>
                <div className='users-list-item--field'>
                    {book.bookTitle}
                </div>
                <div className='users-list-item--field'>
                    {book.authorName}
                </div>

            </div>
        );
    })
}
    </div>
    );
  }
}


function mapStateToProps(state){
    console.log(state)
    return {
        books:state.books

    };
}

/*
*/


export default connect(mapStateToProps, {setBooks})(BookSearch);
