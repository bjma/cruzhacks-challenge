import React from 'react'  
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 

class Announcements extends React.Component {
    state = {
        code: 0,
        count: 0,
        results: [],
        time: [],
        text: [],
        events: [],
    }

    // ref: https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors/43268098
    async componentDidMount() {
        // Use CORS proxy to retrive API
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const request = 'https://us-central1-cruzhacks-test-challenge-65ccc.cloudfunctions.net/getDB'
        const response = await fetch(proxy + request);
        const data = await response.json();
        // event info; contains text + time
        let info = Object.keys(data.results);
        this.setState({code: data.code, count: data.count, results: info});
        // retrive text and time
        let timeArr = [];
        let textArr = []
        for (let i = 0; i < this.state.count; i++) {
            let key = this.state.results[i];
            timeArr[i] = data.results[key].time;
            textArr[i] = data.results[key].text;
        }
        this.setState({time: timeArr, text: textArr});
        console.log(this.state);
    }

    render() {
        return (
            <MuiThemeProvider>
                <h1 className="announcement-title">Announcements</h1>
                <div className="events-wrapper card-row">
                    <div className="event-card card-column">
                        <div className='card-container'>
                            <p>{this.state.time[0]}</p>
                            <h6>{this.state.text[0]}</h6>
                        </div>
                    </div>
                    <div className="event-card card-column">
                        <div className='card-container'>
                            <p>{this.state.time[1]}</p>
                            <h6>{this.state.text[1]}</h6>
                        </div>
                    </div>
                    <div className="event-card card-column">
                        <div className='card-container'>
                            <p>{this.state.time[2]}</p>
                            <h6>{this.state.text[2]}</h6>
                        </div>
                    </div>
                    <div className="event-card card-column">
                        <div className='card-container'>
                            <p>{this.state.time[3]}</p>
                            <h6>{this.state.text[3]}</h6>
                        </div>
                    </div>
                </div>
                
            </MuiThemeProvider>
        )
    }
}

export default Announcements