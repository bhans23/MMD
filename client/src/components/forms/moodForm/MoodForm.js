import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { MoodContext } from "../../../providers/MoodContext";
import MoodSlider from "./MoodSlider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormGroup from "@material-ui/core/FormGroup";
import Container from "@material-ui/core/Container";
import InputValues from "./InputValues";
import AttributeModal from "./AttributeModal";

const MoodForm = () => {
  const moods = useContext(MoodContext);
  const {
    moodStates: {
      sleep,
      setSleep,
      medication,
      setMedication,
      medicationDosage,
      setMedicationDosage,
      exercise,
      setExercise,
      exerciseTime,
      setExerciseTime,
      yoga,
      setYoga,
      yogaTime,
      setYogaTime,
      meditation,
      setMeditation,
      meditationTime,
      setMeditationTime
    }
  } = moods;

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
      <div className={classes.root}>
        <form>
          <FormGroup>
            <Typography gutterBottom>Mood</Typography>
            <MoodSlider />
            <AttributeModal />
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
