import { bookData } from '../../data/data';
import Card from '../Card/Card';
import StatusBar from '../StatusBar/StatusBar';
import useLocalStorage from '../../hooks/useLocalStorage';
import './ReadingList.css';
const ReadingList = ({ className }) => {
    const [books] = useLocalStorage('books', bookData);
    return (
        <Card
            className={`reading-list ${className} text-reading-text bg-reading-bg border-reading-border text-xxs/snug md:text-xs/snug lg:text-sm/snug gap-1`}
            header="Reading List"
        >
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
        <div className="book-info grid grid-rows-2 gap-1">
            <div className="book-info-header grid grid-cols-2">
                <div className="book-title font-medium">Title : {book.title}</div>
                <div className="book-author font-light">Author : {book.author}</div>
            </div>
            <div className="book-info-base font-light">
                <StatusBar current={book.currentPage} total={book.totalPage} className="h-4 rounded-lg" />
            </div>
        </div>
    );
}
export default ReadingList;
