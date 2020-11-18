import React from 'react'

function Book(props) {
    return (
        <div className="col-4">
            <h5>{props.title}</h5>
            <p>By {props.author}</p>
            <p>Pages: {props.pages}</p>
            <img src={props.imageSrc} />
        </div>
    )
}

export default Book
