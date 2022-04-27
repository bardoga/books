const { Link } = ReactRouterDOM

export function BookDetails({ book, onGoBack }) {

    function isOnSale(boolean) {
        if (boolean) return 'On Sale'

    }

    function onPageCount(page) {
        if (page > 500) return 'Long reading'
        else if (page > 200 && page < 500) return 'Decent reading'
        else if (page < 100) return 'Light reading'
    }

    function onPublish(date) {
        if (currYear - date > 10) return 'Veteran Book'
        else if (currYear - date < 1) return 'New!'
    }

    let currYear = new Date().getFullYear()
    const onSale = book.listPrice.isOnSale
    const pages = book.pageCount
    const date = book.publishedDate
    console.log(onSale)
    return <section className="book-details">
        <h2>{book.title}</h2>
        <div className="img-containerD">
            <img src={book.thumbnail} />
        </div>
        <p>{book.description}</p>
        <h5>{onPageCount(pages)}</h5>
        <h6>{onPublish(date)}</h6>
        <h4>{isOnSale(onSale)}</h4>
        <button className="goBack" onClick={(onGoBack)}>Back</button>
    </section>
}