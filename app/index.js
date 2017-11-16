class Timer extends React.Component {

    constructor(){
        super();
        this.state = { timeElasped: 0 }
    }

    componentDidMount(){
        this.interval = setInterval(this.elaspeTime.bind(this), 1000);
        this.setState({
            start: new Date()
        });
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    elaspeTime(timeStart){
        // how much time elasped
        var timeElasped = Math.round((new Date() - this.state.start) / 1000);
        console.log(timeElasped);
        this.setState({
            timeElasped: timeElasped
        })
        if(this.state.timeElasped >= this.props.workingTime * 60){
            clearInterval(this.interval);
            alert('Time for a break!');
        }
    }

    totalTime(work, rest) {
        return work + rest;
    }


    render(){
        return(
            <div>
                timer runs for {this.props.workingTime} min,
                rests for {this.props.restingTime} min,
                total of {this.totalTime(this.props.workingTime, this.props.restingTime)} min,
                there has been {this.state.timeElasped} sec elapsed
            </div>
        );
    }
}

ReactDOM.render(
    <Timer workingTime={1} restingTime={1} />,
    document.getElementById('app')
);
