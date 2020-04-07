import React, {useState} from "react";
import { Form, Field } from 'react-final-form';
import {required, mustBeEmail, composeValidators, mustBeNumber, minValue} from "../../services/validation";
import {checkAuth} from "../../services/auth";
import {Link, useHistory} from "react-router-dom";
import FormInput from "../formInputs/formInput";

export default function Login(props) {

    const [isInvalidLogin, setIsInvalidLogin] = useState(false);
    const history  = useHistory();
    const onSubmit = async values => {

        if (checkAuth(props.users, values)) {
            props.checkUserAuth(true);
            history.push('/showcase')
        } else {
            setIsInvalidLogin(true);
        }

    };

    return (
        <div className="form-container p-2 border rounded-sm mt-5">
            <h4 className="text-center">Login</h4>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form className="form-center" onSubmit={handleSubmit}>
                        <div className="row">
                            <FormInput name='email' fieldType='email' validate={composeValidators(required, mustBeEmail)}/>
                            <FormInput name='password' fieldType='password' validate={required}/>
                            {
                                isInvalidLogin &&
                                <div className="col-12 field-container">
                                    <div className="text-danger text-center">
                                        <small>Invalid Login Info</small>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="buttons text-center">
                            <button type="submit" className="btn btn-primary" disabled={submitting}>
                                Submit
                            </button>
                            <div className="mt-1">
                                <small>Need an account? <Link to="/register">click here</Link></small>
                            </div>
                        </div>
                    </form>
                )}
            />
        </div>
    );
}