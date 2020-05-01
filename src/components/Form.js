import React from 'react'
import FormDemographics from './FormDemographics'
import FormExperience from './FormExperience'
import FormLogistics from './FormLogistics'

class Form extends React.Component {
    state = {
        currentPage: 1,
        firstName: '',
        lastName: '',
        age: 0,
        gender: '',
        gradYear: 0,
        isStudent: false,
        collegeAffiliation: '',
        isFirstTimer: false,
        hackerStatement: '',
        canDrive: false,
        accomodations: '',
    }

    // Go to next page
    nextPage = () => {
        const { currentPage } = this.state;
        this.setState({
            currentPage: currentPage + 1,
        });
    }

    // Go to previous page
    prevPage = () => {
        const { currentPage } = this.state;
        this.setState({
            currentPage: currentPage - 1,
        });
    }

    // Handle field change
    handleChange = input => e => {
        // Set current input state of field to event 
        this.setState({[input]: e.target.value});
    }

    render() {
        const { currentPage } = this.state;
        const { firstName, lastName, age, gender, gradYear, isStudent, collegeAffiliation } = this.state;
        const { isFirstTimer,  hackerStatement } = this.state;
        const { canDrive, accomodations } = this.state;

        const demoValues = { firstName, lastName, age, gender, gradYear, isStudent, collegeAffiliation };
        const expValues = { isFirstTimer,  hackerStatement };
        const logValues = { canDrive, accomodations };

        switch (currentPage) {
            case 1:
                return (
                    <FormDemographics 
                        nextPage={ this.nextPage }
                        handleChange={ this.handleChange }
                        values={ this.demoValues } 
                    />)
            case 2:
                return (
                    /*<FormExperience 
                        prevStep = { this.prevStep }
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { this.expValues }
                    />)*/
                    <FormExperience 
                        nextPage={ this.nextPage }
                        prevPage={ this.prevPage }
                        handleChange={ this.handleChange }
                        values={ this.expValues }
                    />
                )
            case 3:
                return (
                    <FormLogistics
                        nextPage={ this.nextPage }
                        prevPage={ this.prevPage }
                        handleChange={ this.handleChange }
                        values={ this.logValues }
                    />
                )
        }

    }
}

export default Form