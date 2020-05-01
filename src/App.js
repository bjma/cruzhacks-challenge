import React from 'react';
import Form from './components/Form'
import Announcements from './components/Announcements'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Announcements />
                <Form />
            </div>
        )
    }
}

export default App;
