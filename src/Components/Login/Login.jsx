import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import './Login.css';

const Login = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Enter the correct e-mail'),
    password: Yup.string().required('Enter the password')
  });

  const handleSubmit = (values) => {
    console.log('Submitted Values:', values);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
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
                <ErrorMessage name="email" component="div" className="error-message" />
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
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <div className="button-container">
                <button
                  type="submit"
                  className="login-button"
                >
                  Login
                </button>
              </div>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
              <p className="register-link">
                Don't have an account? <Link to="/signup" className="register-link">Register here</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;