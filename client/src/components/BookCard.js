import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div className="card-container">
            <img src="https://lisez8.cdnstatics.com/usuaris/libros/fotos/9782264078/m_libros/9782264077059ORI.jpg" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.titre }
                    </Link>
                </h2>
                <h3>{book.auteur}</h3>
                <p>{book.description}</p>
            </div>
        </div>
    )
};

export default BookCard;
