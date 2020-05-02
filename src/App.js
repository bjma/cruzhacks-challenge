import React from 'react';
import Form from './components/Form'
import Announcements from './components/Announcements'
import AppHeader from './components/AppHeader'
import './App.css';

class App extends React.Component {
    componentWillMound() {
        document.title = 'CruzHacks 2021 Application'
    }

    render() {
        return (
            <div className='App'>
                <Announcements />
                <AppHeader />
                <Form />
            </div>
        )
    }
}

export default App;
