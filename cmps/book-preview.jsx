

export function BookPreview({ book, onSelectBook }) {

    // const currency = book.listPrice.currencyCode
    function getSymbol(currency) {
        switch (currency) {
            case 'ILS':
                return '₪';
                break;
            case 'EUR':
                return '€';
                break;
            case 'USD':
                return '$'
                break;
        }
    }


    // console.log(book)
    return <article className="book-preview" onClick={() =>  onSelectBook(book)}>
        <h2>{book.title}</h2>
        <div className="img-container">
            <img src={book.thumbnail} />
        </div>
        <h3>{book.listPrice.amount} {getSymbol(book.listPrice.currencyCode)}</h3>

    </article>
}