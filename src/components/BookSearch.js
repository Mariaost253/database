import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { setBooks, removeBookById } from '../actions';
import BookEdit from './BookEdit';
import AddBook from './AddBook';
import Modal from 'react-responsive-modal';
import '../styles/App.css';



class BookSearch extends Component {
    constructor() {
        super();
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            isReady: false,
            isErrorDialogOpen: false,
            open: false,
            openAddBook: false,
            openEditBook: false,
            currentBook: null,
            openDeleteBook: false,
            show: false
        }
    }
   
    onOpenModalAddBook = () => {
        this.setState({ openAddBook: true });
    };

    onCloseModalAddBook = () => {
        this.setState({ openAddBook: false });
    };

    onOpenModalEditBook = (book) => {
        this.setState({ openEditBook: true, currentBook: book });
    };

    onCloseModalEditBook = () => {
        this.setState({ openEditBook: false });
    };

   
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/Mariaost253/FakeApiDbBooks/books')
            .then(response => { this.props.setBooks(response.data) })

    }

    render() {
        return (
            <div>
                <div className='container '>
                    <button
                        className='btn btn-primary my-2'
                        onClick={() => this.onOpenModalAddBook()}>
                        Add new
            </button>

                </div>
                <div className='album py-5 bg-light'>
                    <div className='container'>
                        <div className='row'>
                            {
                                this.props.books.map(book => {
                                    return (

                                        <div className='col-md-4' key={book.id}>
                                            <div className='card mb-4 box-shadow'>
                                                <div className='card-body'>
                                                    <div className='card-img-top'>
                                                        <h3>{book.bookTitle}</h3>
                                                        <h4>{book.authorName}</h4>
                                                        <p>-{book.publishDate}-</p>
                                                    </div>
                                                    <p className='card-text'> {book.dis} </p>
                                                    <div className='d-flex justify-content-between align-items-center'>
                                                        <div className='btn-group'>

                                                            <button type='button' className='btn btn-sm btn-outline-secondary '
                                                                onClick={() => { if (window.confirm('Are you sure you wish to delete this book?')) this.props.removeBookById(book.id) }}>

                                                                Delete
                        </button>

                                                            <button type='button' className='btn btn-sm btn-outline-secondary b-group'
                                                                onClick={() => this.onOpenModalEditBook(book)}>
                                                                Edit
                        </button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    );
                                })
                            }

                        </div>
                    </div>
                    <Modal open={this.state.openAddBook} onClose={this.onCloseModalAddBook.bind(this)} center>
                        <AddBook />
                    </Modal>

                    <Modal open={this.state.openEditBook} onClose={this.onCloseModalEditBook.bind(this)} center>
                        <BookEdit book={this.state.currentBook} />
                    </Modal>

                </div>
            </div>
        )
    }
}



function mapStateToProps(state) {
    console.log(state)
    return state;
}



export default connect(mapStateToProps, { setBooks, removeBookById })(BookSearch);
