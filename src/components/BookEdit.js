import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editBookById, setBooks } from '../actions';
import '../styles/App.css';
import moment from 'moment';
import axios from "axios";

class AddBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: {
                id: this.props.book.id,
                authorName: '',
                publishDate: moment(),
                bookTitle: '',
                dis: '',
            }

        }
    }


    onSubmit(e) {

        e.preventDefault();

         this.props.books.map(book => book.id === this.state.id ? this.state.books : book);
        axios.post('https://my-json-server.typicode.com/Mariaost253/FakeApiDbBooks/books')
            // .then(({data}) => setBooks(data))
            // .then(response => {this.props.editBookById(response.data)})
            .then(response => console.log(response.data))
    }


    render() {
        return (
            <form className="form-signin form-edit" onSubmit={(e) => this.onSubmit(e)}>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Edit Book</h1>
                    <p>Here you edit your book</p>
                </div>
                <div className="form-label-group">
                    <label >Book Name</label>
                    <input type="text" id="inputBookName" className="form-control"
                        placeholder={this.props.book.bookTitle}
                        onChange={event => this.setState({ bookTitle: event.target.value })} />
                </div>

                <div className="form-label-group">
                    <label >Author </label>
                    <input type="text" id="inputAuthor" className="form-control"
                        placeholder={this.props.book.authorName}
                        onChange={event => this.setState({ authorName: event.target.value })} />
                </div>

                <div className="form-label-group">
                    <label >Discription <span className="text-muted">(Optional)</span></label>
                    <textarea type="text" id="dis" className="form-control"
                        placeholder={this.props.book.dis}
                        rows='5'
                        onChange={event => this.setState({ dis: event.target.value })}
                    />
                </div>
                <div className='edit-dialog-form edit-dialog-form__date-picker'>
                    <label >Date </label>
                    <input type="date" className="form-control"
                        id="inputDate" placeholder={this.props.book.publishDate}
                        selected={this.props.book.publishDate}
                        onChange={event => this.setState({ publishDate: event.target.value })}
                        max={moment().format("YYYY-MM-DD")} />
                </div>
                <br />
                {this.state.hasErrors}
                <button className="btn btn-lg btn-primary btn-block" type="submit"
               
                >
                    Confirm</button>
                <p className="mt-5 mb-3 text-muted text-center">© Herolo Library</p>
            </form>
        );
    }
}


function mapStateToProps(state) {

    return {
        books: state.books
    };
}




export default connect(mapStateToProps, { editBookById, setBooks })(AddBook);