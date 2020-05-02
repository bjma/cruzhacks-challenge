import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, RaisedButton } from 'material-ui'
import { RadioGroup, Radio } from '@material-ui/core';
import { FormControl, FormControlLabel, FormLabel } from '@material-ui/core'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class FormExperience extends React.Component {
    constructor(props) {
        super(props);
    }

    continue = e => {
        e.preventDefault();
        this.props.nextPage();
    }

    return = e => {
        e.preventDefault();
        this.props.prevPage();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h1 className='form-header'>Experiences</h1>
                    <br/>
                    <div className='row'>
                        <div className='driver-wrapper'>
                            <FormControl component='fieldset' required>
                                <FormLabel component='legend' className='legends'>First Hackathon?</FormLabel>
                                <RadioGroup row required className='group-wrapper' defaultValue={ this.props.isStudent } onChange= { this.handleCheck }>
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement='start'/>
                                    <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement='start'/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <TextField 
                            floatingLabelText="Why do you want to participate? (500 words)"
                            className='input-fields' 
                            onChange={ this.props.handleChange('hackerStatement') }
                            defaultValue={ this.props.hackerStatement }
                            multiline
                            rows={4}
                        />
                    </div>
                    <br/>
                    <RaisedButton 
                        label='Prev'
                        style={ styles.button }
                        onClick={this.return}
                    />
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

export default FormExperience