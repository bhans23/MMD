import React, { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Register from "./Register";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useContext(AuthContext);
  const {
    actions: { handleLogin }
  } = auth;

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  const handleEmailChange = e => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePasswordChange = e => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <Container style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h2">Login</Typography>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="emailInput">Email</InputLabel>
            <OutlinedInput
              id="emailInput"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="passInput">Password</InputLabel>
            <OutlinedInput
              id="passInput"
              name="password"
              value={password}
              type="password"
              onChange={handlePasswordChange}
            />
          </FormControl>

          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </FormGroup>
      </form>

      <Button variant="contained" color="primary" href= "./Register">
        Register
      </Button>
    </Container>
  );
};

export default Login;
