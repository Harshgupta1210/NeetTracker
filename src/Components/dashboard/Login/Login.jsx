import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Updated to useNavigate
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();  // Updated to useNavigate

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Enter the correct e-mail'),
    password: Yup.string().required('Enter the password')
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/login', values);
      console.log('Login Successful:', response.data);
      // Redirect to a different page on successful login
      navigate('/');  // Updated to use navigate
    } catch (error) {
      console.error('Login Error:', error.response ? error.response.data : error.message);
      alert('Login failed. Please check your credentials.');
    }
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
