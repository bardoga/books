export class About extends React.Component {

    componentDidMount(){
        console.log('component mounted from about...')
        let time = setInterval(() => {
            
        }, 1000);
    }


    componentWillUnmount(){
        console.log('component destroyed from about')
        // clearInterval(time)

    }



    render() {

        return <section className="about">
            <h2>We are about books</h2>
            <div className="img-container">
                <img src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip" />
            </div>
        </section >
    }
}