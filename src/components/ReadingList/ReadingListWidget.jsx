import { bookData } from '../../data/data';
import CardWidget from '../Card/CardWidget';
import StatusBar from '../StatusBar/StatusBar';
import useLocalStorage from '../../hooks/useLocalStorage';
import './ReadingList.css';
const ReadingListWidget = ({ className }) => {
    const [books] = useLocalStorage('books', bookData);
    return (
        <CardWidget
            className={`reading-list ${className} text-reading-text bg-reading-bg border-reading-border  text-center text-xxs/snug md:text-xs/snug lg:text-sm/snug`}
            header="Reading List"
            accent="text-reading-accent"
        >
            {Object.entries(books)
                .slice(0, 3)
                .map(([uuid, currBook]) => (
                    <BookInfo book={currBook} key={uuid} />
                ))}
        </CardWidget>
    );
};
function BookInfo({ book }) {
    return (
        <div className="book-info grid grid-rows-2 gap-1 items-center border-2 border-reading-border rounded-2xl shadow p-2">
            <div className="book-info-header grid grid-cols-2 self-end">
                <div className="book-title font-medium">Title : {book.title}</div>
                <div className="book-author font-light">Author : {book.author}</div>
            </div>
            <div className="book-info-base">
                Read : {book.currentPage} Total : {book.totalPage}
                <StatusBar
                    current={book.currentPage}
                    total={book.totalPage}
                    className="h-4 rounded-lg font-light text-black "
                />
            </div>
        </div>
    );
}
export default ReadingListWidget;
