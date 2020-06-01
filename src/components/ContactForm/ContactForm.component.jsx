import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

// Styles
import './ContactForm.styles.scss';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Please include your name'),
    email: Yup.string()
        .email('Email address is not recognised')
        .required('Required'),
    copy: Yup.string()
        .required('Please include as much information as possible'),
    date: Yup.string()
        .required('Please choose your preferred start date.'),
});  

const ContactForm = () => (
    <Formik
        initialValues={{
            name: '',
            email: '',
            copy: '',
            date: '',
            budget: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
            fetch('https://api.formik.com/submit/efstudio/contact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
                
            });
            // console.log(values);
        }}
        
        render={({ errors, touched }) => (
            <Form>
                <div className='form-row'>
                    <div className='form-row-item'>
                        <label for="name">Name: </label>
                        <Field name="name" />
                        {errors.name && touched.name ? (
                            <h4 className='required'>{errors.name}</h4>
                        ) : null}
                    </div>
                    
                    <div className='form-row-item'>
                        <label for="email">Email Address: </label>
                        <Field name="email" />
                        {errors.email && touched.email ? (
                            <h4 className='required'>{errors.email}</h4>
                        ) : null}
                    </div>
                </div>
                
                <div className='form-row'>
                    <div className='form-row-item full'>
                        <label for="copy">Tell us more about your project.</label>
                        <Field name="copy" as="textarea" />
                        {errors.copy && touched.copy ? (
                            <h4 className='required'>{errors.copy}</h4>
                        ) : null}
                    </div>
                </div>
                
                <div className='form-row'>
                    <div className='form-row-item'>
                        <label for="date">When are you looking to start? </label>
                        <Field name="date" type="date" />
                        {errors.date && touched.date ? (
                            <h4 className='required'>{errors.date}</h4>
                        ) : null}
                    </div>
                    
                    <div className='form-row-item'>
                        <label for="budget">Budget <span className='optional'>(optional)</span> </label>
                        <Field name="budget" />
                    </div>
                </div>
                
                <div className='form-row'>
                    <button type="submit" className='cta hollow'>Send</button>
                </div>
                
            </Form>
        )}
    />
);

export default ContactForm;