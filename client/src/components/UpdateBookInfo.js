import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: '',
      isbn: '',
      auteur: '',
      description: '',
      date_publication: '',
      editeur: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8080/api/books/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          titre: res.data.titre,
          isbn: res.data.isbn,
          auteur: res.data.auteur,
          description: res.data.description,
          date_publication: res.data.date_publication,
          editeur: res.data.editeur
        })
      })
      .catch(err => {
        console.log("Error from mise à jour info livre");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      titre: this.state.titre,
      isbn: this.state.isbn,
      auteur: this.state.auteur,
      description: this.state.description,
      date_publication: this.state.date_publication,
      editeur: this.state.editeur
    };

    axios
      .put('http://localhost:8080/api/books/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-book/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error mise à jour info livre!");
      })
  };


  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  voir liste des livres
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Editer livre</h1>
              <p className="lead text-center">
                  mise à jour info livre
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="titre">titre</label>
              <input
                type='text'
                placeholder='titre du livre'
                name='titre'
                className='form-control'
                value={this.state.titre}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">ISBN</label>
              <input
                type='text'
                placeholder='ISBN'
                name='isbn'
                className='form-control'
                value={this.state.isbn}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="auteur">auteur</label>
              <input
                type='text'
                placeholder='auteur'
                name='auteur'
                className='form-control'
                value={this.state.auteur}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='decription du livre'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="date_publication"> Date publication</label>
              <input
                type='date'
                placeholder='date_publication'
                name='date_publication'
                className='form-control'
                value={this.state.date_publication}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="editeur">editeur</label>
              <input
                type='text'
                placeholder='editeur du livre'
                name='editeur'
                className='form-control'
                value={this.state.editeur}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">mise à jour livre</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateBookInfo;