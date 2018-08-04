import React, { Component } from 'react';
import Card, {CardHeader, CardContent} from 'material-ui/Card';
import PropTypes from 'prop-types';
import moment from 'moment';

class BookItem extends Component {
    static deafultProps = {
        authorName: 'ddf',
        bookTitle: 'dfgdfg',
        publishDate: 'dfgdfg',
    }

    static propTypes = {
        authorName: PropTypes.string,
        bookTitle: PropTypes.string,
        publishDate: PropTypes.string

    }
    
   

  render() {
    const {bookData: {authorName, bookTitle, publishDate}} = this.props;
    return (
    <div>
        <h4>dfgdfg</h4>
          <Card className='book'>
                <CardHeader className='book book__header' bookTitle={bookTitle}
                            subheader={`\u2022 ${authorName} \u2022 ${moment(publishDate).format('YYYY')} \u2022`}/>
                <CardContent>
                    <p>blop</p>
                </CardContent>
                
            </Card>
    </div>
    );
  }
}





export default BookItem;