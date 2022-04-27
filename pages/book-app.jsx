import { bookService } from "../services/book.services.js"

import { BookList } from '../cmps/book-list.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'
import { BookDetails } from "./book-details.jsx"




export class BookApp extends React.Component {


    state = {
        books: [],
        filterBy: null,
        selectedbook: null,
    }

    componentDidMount() {
        // console.log('mounted')
        this.loadBooks()
    }


    loadBooks = () => {
        bookService.query(this.state.filterBy)
            .then(books => this.setState({ books }))
    }

    onSelectBook = (book) => {
        this.setState({ selectedbook: book })
    }

    onSetFilter = (filterBy) => {
        this.setState({filterBy}, () => {
            // console.log('filterby from book app', this.state.filterBy)
            this.loadBooks()
        })
    }


    render() {
        const { books, selectedbook } = this.state
        return <section className="book-app">
            <h3>The Bookshop</h3>
            {!selectedbook && < React.Fragment >
                <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}/>
                <BookList onSelectBook={this.onSelectBook} books={books} />
            </React.Fragment>}

            {selectedbook && <BookDetails book={selectedbook} onGoBack={() => { this.onSelectBook(null) }} />}
        </section>


    }
}
