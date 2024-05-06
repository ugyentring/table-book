import PropTypes from "prop-types";

const LoginForm = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3 ">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Password</label>
        <input
          type="Password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button disabled={!email || !password} className="btn btn-primary ">
        Submit
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default LoginForm;
