import React from 'react';
import { Form, Row, Col } from 'react-bootstrap'

class FormDemographics extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextPage();
    }
    /*
    <h1>Demographics</h1>
                <form>
                    <label>First Name</label>
                                <input 
                                    type = "text"
                                    onChange = { this.props.handleChange('firstName') }
                                    defaultValue = { this.props.firstName }
                                />
                </form>
                */

    render() {
        return (
            <div className="form">
                <Form class='form-inline'>
                    <h1>Demographics</h1>
                    <Form.Group as={Row} controlId='nameInfo'>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                type="text"
                                onChange={this.props.handleChange('firstName')}
                                defaultValue={this.props.firstName}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type="text"
                                onChange={this.props.handleChange('lastName')}
                                defaultValue={this.props.lastName}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="bioInfo">
                        <Col>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="number"
                                onChange={this.props.handleChange('age')}
                                defaultValue={this.props.age}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Gender</Form.Label>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3" style={{display:inlineBlock}}>
                                    <Form.Check inline label="Female" type={type} id={`inline-${type}-1`} />
                                    <Form.Check inline label="Male" type={type} id={`inline-${type}-2`} />
                                    <Form.Check inline label="Trans" type={type} id={`inline-${type}-2`} />
                                    <Form.Check inline label="Non-binary" type={type} id={`inline-${type}-2`} />
                                    <Form.Label>Other</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={this.props.gender}
                                    />
                                </div>
                            ))}
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default FormDemographics