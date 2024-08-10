import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Signup.css';

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:5000/signup', values);
      console.log('Signup Successful:', response.data);
      resetForm(); // Reset the form after successful signup
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      console.error('Signup Error:', error.response ? error.response.data : error.message);
      alert('Signup failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-title">SignUp</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="form-input"
                  id="name"
                  placeholder="Enter your name"
                />
                <ErrorMessage name="name" component="div" className="form-error" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="form-input"
                  id="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="form-error" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="form-input"
                  id="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="form-error" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="form-input"
                  id="confirmPassword"
                  placeholder="Enter your password again"
                />
                <ErrorMessage name="confirmPassword" component="div" className="form-error" />
              </div>
              <div className="form-button-container">
                <button
                  type="submit"
                  className="form-button"
                  disabled={isSubmitting}
                >
                  SignUp
                </button>
              </div>
              <p className="form-footer">
                Already have an account? <Link to="/login" className="form-link">Login here</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
