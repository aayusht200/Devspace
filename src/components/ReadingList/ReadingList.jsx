import { useEffect, useState } from 'react';
import { bookData } from '../../data/data';
import Card from '../Card/Card';
import StatusBar from '../StatusBar/StatusBar';
import useLocalStorage from '../../hooks/useLocalStorage';
import './ReadingList.css';
const ReadingList = ({ className }) => {
    const [books, setBooks] = useLocalStorage('books', bookData);

    return (
        <Card className={`reading-list ${className}`} header="Reading List">
            {Object.entries(books)
                .slice(0, 3)
                .map(([uuid, currBook]) => (
                    <BookInfo book={currBook} key={uuid} />
                ))}
        </Card>
    );
};
function BookInfo({ book }) {
    return (
        <div className="book-info">
            <div className="book-title">{book.title}</div>
            <div className="book-author">{book.author}</div>
            <StatusBar current={book.currentPage} total={book.totalPage} />
        </div>
    );
}
export default ReadingList;
