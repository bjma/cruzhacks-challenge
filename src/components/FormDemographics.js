import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, RaisedButton } from 'material-ui'
import { RadioGroup } from '@material-ui/core';
import App from '../App';

class FormDemographics extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextPage();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Application' />
                    <h1 className='page-header'>Demographics</h1>
                    <TextField 
                        className='input-fields'
                        floatingLabelText='First Name'
                        onChange={ this.props.handleChange('firstName') }
                        defaultValue={this.props.firstName}
                    />
                    <TextField 
                        className='input-fields'
                        floatingLabelText='Last Name'
                        onChange={ this.props.handleChange('lastName') }
                        defaultValue={this.props.lastName}
                    />
                    <br/>
                    <TextField 
                        className='input-fields'
                        type='number'
                        floatingLabelText='Age'
                        onChange={ this.props.handleChange('age') }
                        defaultValue={this.props.age}
                    />
                    <RadioGroup floatingLabelText='Gender' onChange={this.props.handleChange('gender')}>
                        
                    </RadioGroup>
                    <br/>
                    <RaisedButton 
                        label='Next'
                        primary={ true }
                        style={ styles.button }
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormDemographics