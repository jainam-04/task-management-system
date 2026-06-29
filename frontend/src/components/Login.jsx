import React, {useState} from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleUpdate = (e) => {
    setForm({...form, [e.target.value]: e.target.value});
  };

  const handleSubmit = (e) => {};
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          name="email"
          type="email"
          placeholder="Enter your email..."
          required
          onClick={() => handleUpdate}
        /> <br />
        <input
          name="password"
          type="password"
          placeholder="Enter your password..."
          required
          onClick={() => handleUpdate}
        /> <br />
        <button onClick={() => handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
