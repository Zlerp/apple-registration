export const required = value => (value ? undefined : 'Field Required');
export const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);
export const mustBeEmail = value => (validateEmail(value) ? 'Must be a email' : undefined);

export const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Must be at least ${min} years old`
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(String(email).toLowerCase());
}