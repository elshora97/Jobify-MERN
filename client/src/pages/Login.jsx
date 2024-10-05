import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  return (
    <Wrapper>
      <Form
        method="post"
        className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow
          type="email"
          name="email"
          defaultValue="elshora@gmail.com"
        />
        <FormRow
          type="password"
          name="password"
          defaultValue="Sa0123456"
        />
        <SubmitBtn />

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
      </Form>
    </Wrapper>
  );
};

export default Login;
