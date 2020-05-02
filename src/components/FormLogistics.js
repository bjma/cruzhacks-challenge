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
                    <Toolbar className='application-header'>
                        <ToolbarTitle text='Application'/>
                    </Toolbar>
                    <h1 className='page-header'>Logistics</h1>
                    <FormControl component='fieldset'>
                        <FormLabel component='legend' className='legends'>Can you help with transportation?</FormLabel>
                        <RadioGroup row required defaultValue={ this.props.isFirstTimer } onChange= { this.props.handleChange('canDrive') }>
                            <FormControlLabel value={ true } control={<Radio />} label="Yes" labelPlacement='start'/>
                            <FormControlLabel value={ false } control={<Radio />} label="No" labelPlacement='start'/>
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <TextField 
                        floatingLabelText='Do you require any accomodations?'
                        defaultValue={this.props.accomodations}
                        onChange={this.props.handleChange('accomodations')}
                        className='input-fields'
                        variant='filled' 
                        id='filled-size-normal filled-full-width' 
                    />
                    
                    <br/>
                    <RaisedButton 
                        label='Previous'
                        primary={ true }
                        style={ styles.button }
                        onClick={ this.return }
                    />
                    <RaisedButton 
                        label='Submit'
                        primary={ true }
                        style={ styles.button }
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

export default FormLogistics