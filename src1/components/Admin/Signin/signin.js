import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"; (You can uncomment this line if you want to include Bootstrap CSS)
import "./signin.css"; // Import a local CSS file for additional styling
import { login } from "../Auth/auth";

function Signin() {
  const navigate = useNavigate();

  // Function to handle the login when the form is submitted
  let sign = async (inputs) => {
    await login(inputs); // Call the login function from "../Auth/auth" to attempt user login
    navigate("/"); // Navigate to the root route (home) after successful login
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
    sign(inputs); // Call the sign function with the form input values to attempt login
  };

  return (
    <div className="container1">
      <div className="container5 mt-5">
        <div className="row">
          <div className="col-md-6 mb-3">
            <img src="assets/images/sufa.png" alt="" />
          </div>
          <div className="col-md-6">
            <h3 className="signin-text mb-3 mt-5"></h3> {/* Heading */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
              <label htmlFor="email"><span style={{ fontSize: "20px" }}>Email</span></label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange} // Call handleChange when the input changes
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-bold">
                <span style={{ fontSize: "20px" }}>Password</span>
                </label>
                <input
                  type="password"
                  name="password"
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
                <label htmlfor="checkbox">
                  <span className="remembermargin" style={{ fontSize: "20px" }}> Remember Me </span>
                </label>
              </div>
              <button type="submit" className="btn btn-warning">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;


