import React from 'react'
import Book from './Book'

function BookStore(props) {
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-12 text-center">
                    <p>{props.callToAction}</p>
                </div>
            </div>
            <div className="row">
                <Book
                    title="To Kill a Mockingbird"
                    imageSrc="to-kill-a-mockingbird.jpg"
                    author="Harper Lee"
                    pages="281"
                />
                <Book
                    title="The Great Gatsby"
                    imageSrc="the-great-gatsby.jpg"
                    author="F. Scott Fitzgerald"
                    pages="218"
                />
                <Book
                    title="The Catcher in the Rye"
                    imageSrc="the-catcher-in-the-rye.jpg"
                    author="J. D. Salinger"
                    pages="234"
                />
            </div>
        </div>
    )
}

export default BookStore
