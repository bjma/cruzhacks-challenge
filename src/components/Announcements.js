import React from 'react'
import moduleName from 'material-ui/styles/MuiThemeProvider' 

class Announcements extends React.Component {
    state = {
        events: [],
    }

    async componentDidMount() {
        const url = 'https://us-central1-cruzhacks-test-challenge-65ccc.cloudfunctions.net/getDB'
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    render() {
        return <h1>HI!</h1>
    }
}

export default Announcements