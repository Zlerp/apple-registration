import React from "react";
import { Field } from 'react-final-form';

export default function FormInput(props) {

    return (
        <div className="col-12 field-container">
            <Field name={props.name}
                   validate={props.validate}
                    >
                {({ input, meta }) => (
                    <div className={(meta.error && meta.touched) ? 'invalid': ''}>
                        <label className="text-capitalize" htmlFor={props.name}>{props.name}<span className="text-danger">*</span></label>
                        <input {...input} className="form-control" id={props.name} type={props.fieldType} placeholder={props.name} />
                        {meta.error && meta.touched &&
                        <div className="invalid-feedback">
                            {meta.error}
                        </div>
                        }
                    </div>
                )}
            </Field>
        </div>
    );
}