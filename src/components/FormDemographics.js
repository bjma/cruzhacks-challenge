import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class FormDemographics extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextPage();
    }
    /*
    <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Application"></AppBar>
                    <h1>Demographics</h1>
                    <TextField></TextField>
                </React.Fragment>
            </MuiThemeProvider>
            */

    render() {
        return (
            <div className="form">
                <h1>Demographics</h1>
                <form>
                    <label>First Name</label>
                    <input 
                        type="text"
                        value={ this.props.firstName }
                        onChange={ this.props.handleChange('firstName') }
                    />
                    <label>Last Name</label>
                    <input 
                        type="text"
                        value={ this.props.lastName }
                        onChange={ this.props.handleChange('lastName') }
                    />
                    <br/>
                    <label>Age</label>
                    <input 
                        type="number"
                        value={ this.props.age }
                        onChange={ this.props.handleChange('age') }
                    />
                    
                </form>
            </div>
        )
    }
}

export default FormDemographics