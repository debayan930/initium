import { Form, Formik, useField } from 'formik';
import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return(
        <Aux>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className='text-input' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </Aux>
    );
};

const submitForm = (values) => {
    console.log(values);
}

const SignUpForm = () => (
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: ''
        }}
        validationSchema={Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(10, 'Must be 10 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
        })}
        onSubmit={(values, { setSubmitting }) => {
            submitForm(values);
            setSubmitting(false);
        }}
    >
        <Form>
            <MyTextInput
                label='First Name'
                name='firstName'
                type='text'
                placeholder='John'
            />
            <MyTextInput
                label='Last Name'
                name='lastName'
                type='text'
                placeholder='Doe'
            />
            <MyTextInput
                label='Email'
                name='email'
                type='email'
                placeholder='johndoe@email.com'
            />
            <button type='submit'>Submit</button>
        </Form>
    </Formik>
);

export default SignUpForm;