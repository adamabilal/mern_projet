import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      titre: '',
      isbn:'',
      auteur:'',
      description:'',
      date_publication:'',
      editeur:''
    };
  }

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
      .post('http://localhost:8080/api/books', data)
      .then(res => {
        this.setState({
          titre: '',
          isbn:'',
          auteur:'',
          description:'',
          date_publication:'',
          editeur:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("erreur de création du livre !");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Voir la liste des livres
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Veuillez ajouter un livre s'il vous plait</h1>
              <p className="lead text-center">
                  Création nouveau livre
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Auteur'
                    name='auteur'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Description du livre'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='date de publication'
                    name='date_publication'
                    className='form-control'
                    value={this.state.date_publication}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='editeur du livre'
                    name='editeur'
                    className='form-control'
                    value={this.state.editeur}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;