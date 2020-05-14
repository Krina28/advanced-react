import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )

const validate = values => {
    const errors = {}
    const requiredFields = [
        'firstName',
        'lastName',
        'email',
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    return errors
}

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    _callContact = (values) => {
        console.log('values', values)
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this._callContact)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component={renderTextField} type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component={renderTextField} type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component={renderTextField} type="email" />
                </div>
                <Button variant="outlined" color="primary" type="submit">Submit</Button>
                <Button variant="outlined" color="primary" type="button">Reset</Button>
            </form>
        )
    }
}

const createReduxForm = reduxForm({ form: 'contact', validate })

ContactUs = createReduxForm(ContactUs)

export default ContactUs;
