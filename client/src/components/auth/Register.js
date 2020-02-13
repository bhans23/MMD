import React, { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const Register = () => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);
  const [first_name, setFirst_name] = useState(null);
  const [last_name, setLast_name] = useState(null);
  const {actions:{handleRegister} } = auth;

  const handleSubmit = e => {
    e.preventDefault();
    if (password === passwordConfirmation)
      handleRegister(
         {email, password, first_name, last_name}
        
      );
    else alert("Passwords Do Not Match!");
  };

  const handleEmailChange = e => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePasswordChange = e => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleFirstNameChange = e => {
    const { value } = e.target;
    setFirst_name(value);
  };

  const handleLastNameChange = e => {
    const { value } = e.target;
    setLast_name(value);
  };

  const handlePasswordConfirmChange = e => {
    const { value } = e.target;
    setPasswordConfirmation(value);
  };

  return (
    <Container>
      <Typography variant="h2">Register</Typography>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="firstInput">First Name</InputLabel>
            <OutlinedInput
              id="firstInput"
              name="first_name"
              value={first_name}
              onChange={handleFirstNameChange}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="lastInput">Last Name</InputLabel>
            <OutlinedInput
              id="lastInput"
              name="last_name"
              value={last_name}
              onChange={handleLastNameChange}
            />
          </FormControl>
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

          <FormControl>
            <InputLabel htmlFor="confInput">Password Confirmation</InputLabel>
            <OutlinedInput
              id="confInput"
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              onChange={handlePasswordConfirmChange}
            />
            <FormHelperText>Passwords must match</FormHelperText>
          </FormControl>

          <Button color="primary" type="submit">
            Submit
          </Button>
        </FormGroup>
      </form>
    </Container>
  );
};
export default Register;
