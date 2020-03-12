import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { MoodContext } from "../../../providers/MoodContext";
import MoodSlider from "./MoodSlider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

import axios from "axios";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
import FormGroup from "@material-ui/core/FormGroup";
import Container from "@material-ui/core/Container";
// import InputValues from "./InputValues";
// import AttributeModal from "./AttributeModal";

const MoodForm = () => {
  const history = useHistory();
  const moods = useContext(MoodContext);
  const { setMoodsState } = moods;
  const handleMoodSubmit = e => {
    const {
      MoodSlider: { moodSliderValue }
    } = e.target;
    const over_all = moodSliderValue;
    handleSubmit(over_all);
  };
  const handleSubmit = over_all => {
    axios
      .post("/api/days/:day_id/moods", over_all)
      .then(res => {
        setMoodsState(res.data.data);
        history.push("/");
      })
      .catch(err => console.log(err));
  };

  const fullDate = new Date();
  const currentDate = fullDate.toLocaleDateString();

  const useStyles = makeStyles(theme => ({
    root: {
      width: 300 + theme.spacing(3) * 2
    },
    margin: {
      height: theme.spacing(3)
    }
  }));
  const classes = useStyles();

  return (
    <Container>
      <h1>What is your Mood Today?</h1>
      <h3>{currentDate}</h3>

      <div className={classes.root}>
        <form onSubmit={handleMoodSubmit}>
          <FormGroup>
            <Typography gutterBottom>Mood</Typography>
            <MoodSlider />
            {/* <AttributeModal /> */}
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </FormGroup>
        </form>
      </div>
    </Container>
  );
};

export default MoodForm;
