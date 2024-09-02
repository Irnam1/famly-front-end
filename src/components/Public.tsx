import { Link } from "react-router-dom";

const Public = () => {
  return (
    <div>
      <Link to="login">
        <h2>Login</h2>
      </Link>
      <Link to="register">
        <h2>Register</h2>
      </Link>
    </div>
  );
};

export default Public;
