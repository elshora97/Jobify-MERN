import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow
          type="email"
          name="email"
          defaultValue="test@test.com"
        />
        <FormRow
          type="password"
          name="password"
          defaultValue="secret"
        />
        <button
          type="submit"
          className="btn btn-block">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-block">
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link
            to="/register"
            className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
