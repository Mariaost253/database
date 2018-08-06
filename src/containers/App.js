import React, { Component } from 'react';
import BookSearch from '../components/BookSearch';
import '../styles/App.css';

class App extends Component {

  render() {
    return (
      <div>
        <div className='navbar navbar-dark   bg-dark bow-shadow '>
          <div>
            <div className='contrainer d-flex justify-content-between'>
              <h1 className='navbar-brand d-flex align-items-center title-main'> Herolo Library </h1>
            </div>
          </div>
        </div>
        <section className='jumbotron text-center'>
          <div className='container'>
            <h1 className='jumbotron-heading'> My Library </h1>
            <p className='lead text-muted'>
              Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
        </p>
          </div>
        </section>
        <BookSearch />

      </div>
    );
  }
}

export default App;

