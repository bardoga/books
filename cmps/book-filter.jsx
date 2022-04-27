

export class BookFilter extends React.Component {

    state = {
        filterBy: {
            price: '',
            name: ''
        }
    }


componentDidMount(){
    // console.log('filter mounted')
}


handlechange = ({target}) => {
    const value = (target.type === 'number')? +target.value:target.value
    const field = target.name
    this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
        this.props.onSetFilter(this.state.filterBy)
    })
}

onFilter = (ev) => {
    ev.preventDefault()
    this.props.onSetFilter(this.state.filterBy)
}


    render() {
        const {price,name} = this.state.filterBy
        return <section className="book-filter">
            <form onSubmit={this.onFilter}>
                {/* <div className="box1">
                <label htmlFor="by-name">Name</label>
                <input type="text" id="by-name" placeholder="by name" name="name" autoComplete="off"
                value={name} onChange={this.handlechange} />
                </div> */}
                <label htmlFor="by-name">Name</label>
                <input type="text" id="by-name" placeholder="by name" name="name" autoComplete="off"
                value={name} onChange={this.handlechange} />

                <label htmlFor="by-price">Price</label>
                <input type="range" id="by-price" placeholder="by-price" name="price" min={0} max={200}
                value={price} onChange={this.handlechange} />

            </form>
        </section>
    }
}