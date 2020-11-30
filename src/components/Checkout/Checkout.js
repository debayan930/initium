import classes from './Checkout.module.css';
import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../UI/TextInput/TextInput';
import axios from '../../axios';

const Checkout = (props) => (
    <div className={classes.Checkout}>
        <Formik
            initialValues={{
                name: '',
                email: '',
                address: '',
                gift: false,
                delivery: '',
                tnc: false
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(30, 'Must be 30 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                address: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                axios.post('/orders', values)
                    .then(response => console.log(response))
                    .catch(error => console.log(error));
                setSubmitting(false);
            }}
        >
            <Form>
                <TextInput
                    label='Name'
                    name='name'
                    type='text'
                    placeholder='John Doe'
                />
                <TextInput
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='johndoe@email.com'
                />
                <TextInput
                    label='Address'
                    name='address'
                    type='text'
                    placeholder='House,Locality, City, Pin'
                />
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    </div>
);

export default Checkout;