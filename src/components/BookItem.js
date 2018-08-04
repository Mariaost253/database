import React, { Component } from 'react';
//import Card, {CardHeader, CardContent} from 'material-ui/Card';
//import PropTypes from 'prop-types';
//import moment from 'moment';

class BookItem extends Component {
    //constructor(){
    //    super();
       // this.state={
      //      authorName:'tyjgyu',
       //     bookTitle: 'tyutyu',
      //      publishDate: 'tyutyu'
      //  }
   // }
    static deafultProps = {
        authorName: 'ddf',
        bookTitle: 'dfgdfg',
        publishDate: 'dfgdfg',
    }

    /*static propTypes = {
        authorName: PropTypes.string,
        bookTitle: PropTypes.string,
        publishDate: PropTypes.string

    }*/
    
   
    //const {book: {authorName, bookTitle, publishDate}} = this.props;

  render() {
      const {book}=this.props
    return (
    <ul>
        <h4>dfgdfg</h4>
              <li>  {book.authorName} </li>
              <li>  {book.bookTitle}  </li>
              <li> {book.publishDate} </li>
    </ul>
    );
}
}

//subheader={`\u2022 ${authorName} \u2022 ${moment(publishDate).format('YYYY')} \u2022`}/>




export default BookItem;