import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    if (fieldName === 'email') {
      setRegisterForm((prevForm) => ({
        ...prevForm,
        email: fieldValue,
      }));

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email:
          fieldValue.length === 0
            ? 'Email is required'
            : !emailRegex.test(fieldValue)
            ? 'Invalid email address'
            : null,
      }));
    } else if (fieldName === 'password') {
      setRegisterForm((prevForm) => ({
        ...prevForm,
        password: fieldValue,
      }));

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password:
          fieldValue.length === 0
            ? 'Password is required'
            : !passwordRegex.test(fieldValue)
            ? 'Password must be at least 8 characters long and contain at least one letter and one number'
            : null,
      }));
    } else if (fieldName === 'confirmPassword') {
      setRegisterForm((prevForm) => ({
        ...prevForm,
        confirmPassword: fieldValue,
      }));

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword:
          fieldValue !== registerForm.password ? 'Passwords do not match' : null,
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formErrors).every((error) => error === null)) {
      console.log('Form submitted:', registerForm);
    } else {
      console.log('Form has errors. Please fix them before submitting.');
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form className="container" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={handleInputChange}
            />
            {formErrors.email && (
            <span style={{ color: 'red' }}>{formErrors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="InputPassword1"
              placeholder="Password"
              onChange={handleInputChange}
            />
            {formErrors.password && (
           <span style={{ color: 'red' }}>{formErrors.password}</span>
            )}
          </div>

          <div className="form-group" style={{ marginTop: '10px' }}>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleInputChange}
            />
            {formErrors.confirmPassword && (
               <span style={{ color: 'red' }}>{formErrors.confirmPassword}</span>
            )}
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Send me email
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
