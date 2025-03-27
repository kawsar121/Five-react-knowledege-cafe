const BookMark = ({lol}) => {
    const {title} = lol;
    return (
        <div>
            <p className="mt-3">{title}</p>
            <hr />
        </div>
    );
};

export default BookMark;