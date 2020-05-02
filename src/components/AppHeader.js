import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppHeader extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                 <React.Fragment>
                    <AppBar 
                        className='application-header' 
                        title={<div className='appbar-title'>Application</div>}
                        //showMenuIconButton={ false }
                        iconElementLeft={ 
                            <img 
                                src='https://raw.githubusercontent.com/CruzHacks/cruzhacks-organizer-challenges/master/design-assets/gradient-logo.png'
                                height={"42 px"}
                                width={"50px"}
                                style={{marginTop: "5px"}}
                            />}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default AppHeader