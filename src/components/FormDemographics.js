import React from 'react';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { TextField, RaisedButton } from 'material-ui'
import { RadioGroup, Radio } from '@material-ui/core';
import { FormControl, FormControlLabel, FormLabel } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class FormDemographics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false
        }
    }

    continue = e => {
        e.preventDefault();
        this.props.nextPage();
    }

    handleCheck = e => {
        if (e.target.value === "yes") {
            this.setState({ showComponent: true});
        } else {
            this.setState({ showComponent: false});
        }
    }

    // TODO: form validation, CSS touchups, and conditional rendering of college affiliation input field
    // TODO: instead of TextField, use Input instead?
    render() {
        // any free response text box is multilined
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h1 className='form-header'>Demographics</h1>
                    <br/>
                    <div className='row'>
                        <TextField 
                            floatingLabelText="First Name"
                            className='input-fields' 
                            onChange={ this.props.handleChange('firstName') }
                            defaultValue={ this.props.firstName }
                        />
                        <TextField 
                            floatingLabelText="Last Name"
                            className='input-fields' 
                            onChange={ this.props.handleChange('lastName') }
                            defaultValue={ this.props.lastName }
                        />
                    </div>
                    <br/>
                    <div className='row'>
                        <TextField 
                            className='input-fields'
                            type='number'
                            floatingLabelText='Age'
                            onChange={ this.props.handleChange('age') }
                            defaultValue={ this.props.age }
                            style={{width: 80}}
                        />
                        <div className='radio-wrapper'>
                            <FormControl component='fieldset'>
                                <FormLabel component='legend'>Gender</FormLabel>
                                <RadioGroup row required className='group-wrapper' defaultValue={ this.props.gender } onChange= { this.props.handleChange('gender') }>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" labelPlacement='start'/>
                                    <FormControlLabel value="male" control={<Radio />} label="Male" labelPlacement='start'/>
                                    <FormControlLabel value="trans" control={<Radio />} label="Trans" labelPlacement='start'/>
                                    <FormControlLabel value="nonbinary" control={<Radio />} label="Non-binary" labelPlacement='start'/>
                                    <FormControlLabel value="other" control={<Radio />} label="Other" labelPlacement='start'/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <TextField 
                            className='input-fields'
                            type='number'
                            floatingLabelText='Year of Graduation'
                            onChange={ this.props.handleChange('gradYear') }
                            defaultValue={ this.props.gradYear }
                            style={{width: 160}}
                        />
                        <div className='student-wrapper'>
                            <FormControl component='fieldset'>
                                <FormLabel component='legend' className='legends'>UCSC Student?</FormLabel>
                                <RadioGroup row required className='group-wrapper' defaultValue={ this.props.isStudent } onChange= { this.handleCheck }>
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement='start'/>
                                    <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement='start'/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        { this.state.showComponent && (
                             <div className='ca-wrapper'>
                                 <FormControl >
                                    <InputLabel>College Affiliation</InputLabel>
                                    <Select
                                        onChange={ this.props.handleChange('collegeAffiliation ')}
                                        defaultValue={ this.props.collegeAffiliation }
                                        style={{width:"230px"}}
                                    >
                                    <MenuItem value={'c10'}>College Ten</MenuItem>
                                    <MenuItem value={'c9'}>College Nine</MenuItem>
                                    <MenuItem value={'crown'}>Crown</MenuItem>
                                    <MenuItem value={'merrill'}>Merrill</MenuItem>
                                    <MenuItem value={'kresge'}>Kresge</MenuItem>
                                    <MenuItem value={'porter'}>Porter</MenuItem>
                                    <MenuItem value={'rcc'}>Rachel Carson</MenuItem>
                                    <MenuItem value={'ooooakes'}>Oakes</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>  
                        )}
                    </div>
                    <br/>
                    <RaisedButton 
                        label='Next'
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
        marginTop: "15px",
        marginLeft: "80px",
    }
}

export default FormDemographics