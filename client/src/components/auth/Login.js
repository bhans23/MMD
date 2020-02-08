import React, { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const auth = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    auth.handleLogin(email, password);
  };

  const handleEmailChange = e => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePasswordChange = e => {
    const { value } = e.target;
    setPassword(value );
  };

  return (
    <Container>
      <Typography variant="h2">Login</Typography>
      <form onSubmit={handleSubmit}>
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

          <Button color="primary" type="submit">
            Submit
          </Button>
        </FormGroup>
      </form>
    </Container>
  );
};

export default Login;
