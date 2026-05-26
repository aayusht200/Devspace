import { bookData } from '../data/data';
import Card from './Card/Card';
import StatusBar from './StatusBar/StatusBar';

const ReadingList = () => {
    const bookEntries = Object.entries(bookData);
    return (
        <Card className="reading-list" header="Reading List">
            {bookEntries.slice(0, 3).map(([uuid, currBook]) => (
                <BookStatus book={currBook} key={uuid} />
            ))}
        </Card>
    );
};
function BookStatus({ book }) {
    return (
        <div className="book-status">
            <div className="book-title">{book.title}</div>
            <div className="book-author">{book.author}</div>
            <StatusBar current={book.currentPage} total={book.totalPage} />
        </div>
    );
}
export { ReadingList };
