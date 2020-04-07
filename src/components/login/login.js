import React from "react";
import { Form, Field } from 'react-final-form';
import {required, mustBeEmail, composeValidators} from "../../services/validation";
import {checkAuth} from "../../services/auth";
import {Link} from "react-router-dom";

export default function Login(props) {

    const onSubmit = async values => {
        props.checkUserAuth(checkAuth(props.users, values));
    };

    return (
        <div className="form-container p-2 border rounded-sm">
            <h4>Login</h4>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form className="form-center" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 field-container">
                                <Field  name="email" validate={composeValidators(required, mustBeEmail)}>
                                    {({ input, meta }) => (
                                        <div className={(meta.error && meta.touched) ? 'invalid': ''}>
                                            <label htmlFor="email">Email</label>
                                            <input {...input} className="form-control" id="email" type="email" placeholder="Email" />
                                            {meta.error && meta.touched &&
                                            <div className="invalid-feedback">
                                                {meta.error}
                                            </div>
                                            }
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="col-12 field-container">
                                <Field name="password" validate={required}>
                                    {({ input, meta }) => (
                                        <div className={(meta.error && meta.touched) ? 'invalid': ''}>
                                            <label htmlFor="password">Password</label>
                                            <input {...input} className="form-control" id="password" type="password" placeholder="Password" />
                                            {meta.error && meta.touched &&
                                            <div className="invalid-feedback">
                                                {meta.error}
                                            </div>
                                            }
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className="buttons">
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