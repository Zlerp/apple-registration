import React from "react";
import { Form, Field } from 'react-final-form';
import {Link, useHistory} from "react-router-dom";
import {required, mustBeNumber, mustBeEmail, minValue, composeValidators} from "../../services/validation";
import FormInput from "../formInputs/formInput";

export default function Registration(props) {
    const history  = useHistory();
    const onSubmit = async values => {
        let newUserInfo = {
            email: values.email,
            name: values.name,
            age: values.age,
            password: values.password
        };
        props.updateUsers(newUserInfo);
        props.checkUserAuth(true);
        history.push('/showcase')
    };

    return (
        <div className="form-container p-2 border rounded-sm mt-5">
            <h4 className="text-center">Registration</h4>
            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {};
                    if (!values.confirm) {
                        errors.confirm = 'Field Required'
                    } else if (values.confirm !== values.password) {
                        errors.confirm = 'Passwords must match'
                    }
                    return errors
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form className="form-center" onSubmit={handleSubmit}>
                        <div className="row">
                            <FormInput name='name' fieldType='text' validate={required}/>
                            <FormInput name='email' fieldType='email' validate={composeValidators(required, mustBeEmail)}/>
                            <FormInput name='password' fieldType='password' validate={required}/>
                            <FormInput name='confirm' fieldType='password'/>
                            <FormInput name='age' fieldType='number' validate={composeValidators(required, mustBeNumber, minValue(18))}/>
                        </div>
                        <div className="buttons text-center">
                            <button type="submit" className="btn btn-primary" disabled={submitting}>
                                Submit
                            </button>
                            <div className="mt-1">
                                <small>Already have an account? <Link to="/">click here</Link></small>
                            </div>
                        </div>
                    </form>
                )}
            />
        </div>
    );
}