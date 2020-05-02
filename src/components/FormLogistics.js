import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, RaisedButton } from 'material-ui'
import { RadioGroup, Radio } from '@material-ui/core';
import { FormControl, FormControlLabel, FormLabel } from '@material-ui/core'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class FormLogistics extends React.Component {
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
                    <h1 className='form-header'>Logistics</h1>
                    <br/>
                    <div className='row'>
                        <div className='driver-wrapper'>
                            <FormControl component='fieldset' required>
                                <FormLabel component='legend' className='legends'>Could you use help with transporation?</FormLabel>
                                <RadioGroup row required className='group-wrapper' defaultValue={ this.props.canDrive } onChange= { this.props.handleChange('canDrive') }>
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement='start'/>
                                    <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement='start'/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <TextField 
                            floatingLabelText="Do you need any accomodations?"
                            className='input-fields' 
                            onChange={ this.props.handleChange('accomodations') }
                            defaultValue={ this.props.accomodations }
                        />
                    </div>
                    <br/>
                    <RaisedButton 
                        label='Prev'
                        style={ styles.button }
                        onClick={this.return}
                    />
                    <RaisedButton 
                        label='Submit'
                        style={ styles.button }
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

export default FormLogistics