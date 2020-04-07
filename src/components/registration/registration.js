import React from "react";
import { Form, Field } from 'react-final-form';
import {Link, useHistory} from "react-router-dom";
import {required, mustBeNumber, mustBeEmail, minValue, composeValidators} from "../../services/validation";

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
        history.push('/iphone')
    };

    return (
        <div className="form-container p-2 border rounded-sm">
            <h4>Registration</h4>
            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {};
                    if (!values.confirm) {
                        errors.confirm = 'Required'
                    } else if (values.confirm !== values.password) {
                        errors.confirm = 'Passwords must match'
                    }
                    return errors
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form className="form-center" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 field-container">
                                <Field name="name" validate={required}>
                                    {({ input, meta }) => (
                                        <div className={(meta.error && meta.touched) ? 'invalid': ''}>
                                            <label htmlFor="name">Name</label>
                                            <input {...input} className="form-control" id="name" type="text" placeholder="Name" />
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
                            <div className="col-12 field-container">
                                <Field name="confirm">
                                    {({ input, meta }) => (
                                        <div className={(meta.error && meta.touched) ? 'invalid': ''}>
                                            <label htmlFor="confirm">Confirm</label>
                                            <input {...input} className="form-control" id="confirm" type="password" placeholder="Confirm" />
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
                                <Field
                                    name="age"
                                    validate={composeValidators(required, mustBeNumber, minValue(18))}
                                >
                                    {({ input, meta }) => (
                                        <div className={(meta.error && meta.touched) ? 'invalid': ''}>
                                            <label htmlFor="age">Age</label>
                                            <input {...input} className="form-control" id="age" type="age" placeholder="Age" />
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
                                <small>Already have an account? <Link to="/login">click here</Link></small>
                            </div>
                        </div>
                    </form>
                )}
            />
        </div>
    );
}