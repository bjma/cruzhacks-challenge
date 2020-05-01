import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, RaisedButton } from 'material-ui'
import { RadioGroup, Radio } from '@material-ui/core';
import { FormControl, FormControlLabel, FormLabel } from '@material-ui/core'
import App from '../App';

class FormDemographics extends React.Component {
    constructor(props) {
        super(props);
    }

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
                        required
                        type='text'
                        className='input-fields'
                        floatingLabelText='First Name'
                        onChange={ this.props.handleChange('firstName') }
                        defaultValue={this.props.firstName}
                    />
                    <TextField 
                        required
                        type='text'
                        className='input-fields'
                        floatingLabelText='Last Name'
                        onChange={ this.props.handleChange('lastName') }
                        defaultValue={this.props.lastName}
                        style={{marginBottom:20}}
                    />
                    <br/>
                    <TextField 
                        required
                        type='text'
                        className='input-fields'
                        type='number'
                        floatingLabelText='Age'
                        onChange={ this.props.handleChange('age') }
                        defaultValue={ this.props.age }
                    />
                    <FormControl component='fieldset'>
                        <FormLabel component='legend' className='legends'>Gender</FormLabel>
                        <RadioGroup row required defaultValue={ this.props.gender } onChange= { this.props.handleChange('gender') }>
                            <FormControlLabel value="female" control={<Radio />} label="Female" labelPlacement='start'/>
                            <FormControlLabel value="male" control={<Radio />} label="Male" labelPlacement='start'/>
                            <FormControlLabel value="trans" control={<Radio />} label="Trans" labelPlacement='start'/>
                            <FormControlLabel value="nonbinary" control={<Radio />} label="Non-binary" labelPlacement='start'/>
                            <FormControlLabel value="other" control={<Radio />} label="Other" labelPlacement='start'/>
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <TextField 
                        className='input-fields'
                        type='number'
                        floatingLabelText='Year of Graduation'
                        onChange={ this.props.handleChange('gradYear') }
                        defaultValue={ this.props.gradYear }
                    />
                    <FormControl component='fieldset'>
                        <FormLabel component='legend' className='legends'>UCSC Student?</FormLabel>
                        <RadioGroup row required defaultValue={ this.props.isStudent } onChange= { this.props.handleChange('isStudent') }>
                            <FormControlLabel value={ true } control={<Radio />} label="Yes" labelPlacement='start'/>
                            <FormControlLabel value={ false } control={<Radio />} label="No" labelPlacement='start'/>
                        </RadioGroup>
                    </FormControl>
                    <TextField 
                        disabled={this.props.isStudent}
                        className='input-fields'
                        type='text'
                        floatingLabelText='College Affiliation'
                        onChange={ this.props.handleChange('collegeAffiliation') }
                        defaultValue={ this.props.collegeAffiliation }
                    />
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