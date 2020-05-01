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
                    <Toolbar className='application-header'>
                        <ToolbarTitle text='Application'/>
                    </Toolbar>
                    <h1 className='page-header'>Experiences</h1>
                    <FormControl component='fieldset'>
                        <FormLabel component='legend' className='legends'>First Hackathon?</FormLabel>
                        <RadioGroup row required defaultValue={ this.props.isFirstTimer } onChange= { this.props.handleChange('isFirstTimer') }>
                            <FormControlLabel value={ true } control={<Radio />} label="Yes" labelPlacement='start'/>
                            <FormControlLabel value={ false } control={<Radio />} label="No" labelPlacement='start'/>
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <TextField 
                        floatingLabelShrinkStyle='WHy do you want to participate? (500 words)'
                        defaultValue={this.props.hackerStatement}
                        onChange={this.props.handleChange('hackerStatement')}
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

export default FormExperience