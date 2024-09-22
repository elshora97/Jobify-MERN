import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          name="name"
          defaultValue="test"
        />
        <FormRow
          type="text"
          name="lastName"
          defaultValue="test"
          labelText="last name"
        />
        <FormRow
          type="text"
          name="location"
          defaultValue="earth"
        />
        <FormRow
          type="email"
          name="email"
          defaultValue="test@test.com"
          labelText="email"
        />
        <FormRow
          type="password"
          name="password"
          defaultValue="secret"
        />
        <button
          type="submit"
          className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login">Login</Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
