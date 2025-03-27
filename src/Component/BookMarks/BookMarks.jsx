import BookMark from "../BookMark/BookMark";

const BookMarks = ({markBooks}) => {
    return (
        <div className="bg-slate-100 p-5">
            <h1 className="text-3xl text-red-500">Book Marks : {markBooks.length}</h1>
            {
                markBooks.map(msp => <BookMark lol={msp}></BookMark>)
            }
        </div>
    );
};

export default BookMarks;