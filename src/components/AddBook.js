import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBookById, setBooks } from '../actions';
import '../styles/App.css';
import { Form } from 'react-bootstrap';
import moment from 'moment';
import axios from "axios";

class AddBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: {
                id: this.props.books.length + 1,
                authorName: '',
                publishDate: moment(),
                bookTitle: '',
                dis: '',
            },
            hasErrors: ''

        }
    }

    //  normalizeTitle = ( title) => (
    //     title.replace(/[^a-zA-Z\d\s:]/g, '')
    //  );

    onSubmit(e) {
        e.preventDefault();

        if (this.state.bookTitle === '' || this.state.authorName === '') {
            this.setState({ hasErrors: 'title' });
        }
        else {
            let title = this.state.bookTitle
            title = title.replace(/[^a-zA-Z\d\s:]/g, '')
            this.setState({ bookTitle: title })
            this.setState({ hasErrors: '' })
            axios.post('https://my-json-server.typicode.com/Mariaost253/FakeApiDbBooks/books', this.state)
                .then(response => { this.props.addBookById(response.data) })
        }

    }

    //const {bookTitle, dis, authorName, publishDate} = this.state;
    render() {
        return (
            <Form className="form-signin" onSubmit={(e) => this.onSubmit(e)}>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Add A New Book</h1>
                    <p>Here you can add a new book</p>
                </div>

                <div className="form-label-group">
                    <label >Book Name</label>
                    <input type="text" id="inputBookName" className="form-control" placeholder="Book Name" required=""
                        onChange={event => this.setState({ bookTitle: event.target.value })} />
                </div>

                <div className="form-label-group">
                    <label >Author </label>
                    <input type="text" id="inputAuthor" className="form-control" placeholder="Author" required=""
                        onChange={event => this.setState({ authorName: event.target.value })} />
                </div>

                <div className="form-label-group">
                    <label >Discription <span className="text-muted">(Optional)</span></label>
                    <textarea row='5' type="text" id="dis" className="form-control" placeholder="Discription"
                        onChange={event => this.setState({ dis: event.target.value })} />
                </div>

                <label >Date </label>
                <input type="date" className="form-control" id="inputDate4"
                    onChange={event => this.setState({ publishDate: event.target.value })}
                    max={moment().format("YYYY-MM-DD")} />

                <br />
                {this.state.hasErrors}
                <button className="btn btn-lg btn-primary btn-block" type="submit"
                //  onClick = {()=>this.props.addBookById(this.state.books)}
                >
                    Add</button>
                <p className="mt-5 mb-3 text-muted text-center">© Herolo Library</p>
            </Form>
        );
    }
}


function mapStateToProps(state) {
    console.log(state)
    return {
        books: state.books
    };
}


// onChange={(e) => this.handleChange(e, 'dis')} />

export default connect(mapStateToProps, { addBookById, setBooks })(AddBook);