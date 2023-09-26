import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../Auth/auth";

function Register() {
  const navigate = useNavigate();

  // Function to handle signup when the form is submitted
  let signup = async (inputs) => {
    await register(inputs); // Call the register function from "../Auth/auth"
    navigate("/signin"); // Navigate to the "/signin" route after successful registration
  };

  // State to store form input values
  const [inputs, setInputs] = useState({});

  // Function to handle input changes and update the state
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    signup(inputs); // Call the signup function with the form input values
  };

  return (
    <div className="container1">
      <div className="container5 mt-5">
        <div className="row">
          <div className="col-md-6 mt-5" style={{marginTop: "40px"}}>
            <img src="assets/images/sufa.png" alt="" />
          </div>
          <div className="col-md-6">
            <h3 className="signin-text mb-3 mt-5"></h3> {/* Heading */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  name="name"
                  className="form-control"
                  onChange={handleChange} // Call handleChange when the input changes
                />
              </div>

              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange} // Call handleChange when the input changes
                  required
                />
              </div>
              <div className="form-group">
                <label for="password" className="text-bold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange} // Call handleChange when the input changes
                  className="form-control"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="form-check-input"
                  id="checkbox"
                  onChange={handleChange} // Call handleChange when the input changes
                  required
                />
                <label for="checkbox">
                  <span className="remembermargin"> Remember Me </span>
                </label>
              </div>
              <button type="submit" className="btn btn-warning">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
