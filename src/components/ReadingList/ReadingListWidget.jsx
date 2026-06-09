import CardWidget from '../Card/CardWidget';
import StatusBar from '../StatusBar/StatusBar';
import { DataContext } from '../../context/DataContext';
import './ReadingList.css';
import { useContext } from 'react';

const ReadingListWidget = ({ className }) => {
      const { data, setData } = useContext(DataContext);
      return (
            <CardWidget
                  className={`reading-list ${className} text-reading-text bg-reading-bg border-reading-border md:text-md/snug lg:text-md text-sm`}
                  header="Reading List"
                  accent="hover:text-reading-accent"
            >
                  {Object.entries(data.book)
                        .slice(0, 3)
                        .map(([uuid, currBook]) => (
                              <BookInfo book={currBook} key={uuid} />
                        ))}
            </CardWidget>
      );
};
function BookInfo({ book }) {
      return (
            <div className="book-info border-reading-border grid grid-rows-2 rounded-2xl border-2 p-2">
                  <div className="book-info-header grid grid-cols-2">
                        <div className="book-title font-bold">
                              Title : {book.title}
                        </div>
                        <div className="book-author font-medium">
                              Author : {book.author}
                        </div>
                  </div>
                  <div className="book-info-base">
                        Read : {book.currentPage} Total : {book.totalPage}
                        <StatusBar
                              current={book.currentPage}
                              total={book.totalPage}
                              className=""
                              textColor="text-reading-bg"
                              fillBg="bg-reading-accent"
                        />
                  </div>
            </div>
      );
}
export default ReadingListWidget;
