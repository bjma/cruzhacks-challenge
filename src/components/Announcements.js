import React from 'react'  
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 

class Announcements extends React.Component {
    state = {
        code: 0,
        count: 0,
        results: [],
        events: [],
        html: '',
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
        let htmlToParse = "<div class=\"events-wrapper card-row\">"
        
        for (let i = 0; i < this.state.count; i++) {
            let key = this.state.results[i];
            htmlToParse += "<div class=\"event-card card-column\">";
            htmlToParse += "<div class=\"card-container\">";
            htmlToParse += "<p>" + data.results[key].time + "</p>";
            htmlToParse += "<h6>" + data.results[key].text + "</h6>"
            htmlToParse += "</div>";
            htmlToParse += "</div>";

        }
        htmlToParse += "</div>"
        this.setState({html: htmlToParse});
    }

    render() {
        return (
            <MuiThemeProvider>
                <h1 className="announcement-title">Announcements</h1>
                <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
            </MuiThemeProvider>
        )
    }
}

export default Announcements