import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormGroup from "@material-ui/core/FormGroup";
import Container from "@material-ui/core/Container";

const MoodForm = () => {
  const [sleep, setSleep] = useState(0);
  const [med, setMed] = useState("");
  const [exercise, setExercise] = useState(null);
  const useStylesField = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

  const useStyles = makeStyles(theme => ({
    root: {
      width: 300 + theme.spacing(3) * 2
    },
    margin: {
      height: theme.spacing(3)
    }
  }));

  const MoodSlider = withStyles({
    root: {
      color: "#52af77",
      height: 8
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus,&:hover,&$active": {
        boxShadow: "inherit"
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      height: 8,
      borderRadius: 4
    }
  })(Slider);
  const handleSleepChange = event => {
    setSleep(event.target.value);
  };

  const handleMedChange = event => {
    setMed(event.target.value);
  };

  const handleExerciseChange = event => {
    setExercise(event.target.value);
  };

  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <Typography gutterBottom>Mood</Typography>
        <MoodSlider
          valueLabelDisplay="on"
          aria-label="pretto slider"
          defaultValue={5}
          min={0}
          max={10}
        />
        <FormGroup>
          <FormControl className={classes.formControl}>
            <InputLabel id="sleep-attribute">Sleep</InputLabel>
            <Select
              labelId="sleep-attribute"
              id="sleep-attribute"
              value={sleep}
              onChange={handleSleepChange}
            >
              <MenuItem value={1}>1 hr</MenuItem>
              <MenuItem value={2}>2 hrs</MenuItem>
              <MenuItem value={3}>3 hrs</MenuItem>
              <MenuItem value={4}>4 hrs</MenuItem>
              <MenuItem value={5}>5 hrs</MenuItem>
              <MenuItem value={6}>6 hrs</MenuItem>
              <MenuItem value={7}>7 hrs</MenuItem>
              <MenuItem value={8}>8 hrs</MenuItem>
              <MenuItem value={9}>9 hrs</MenuItem>
              <MenuItem value={10}>10 hrs</MenuItem>
              <MenuItem value={11}>11 hrs</MenuItem>
              <MenuItem value={12}>12 hrs</MenuItem>
              <MenuItem value={13}>13 hrs</MenuItem>
              <MenuItem value={14}>14 hrs</MenuItem>
              <MenuItem value={15}>15 hrs</MenuItem>
              <MenuItem value={16}>16 hrs</MenuItem>
              <MenuItem value={17}>17 hrs</MenuItem>
              <MenuItem value={18}>18 hrs</MenuItem>
              <MenuItem value={19}>19 hrs</MenuItem>
              <MenuItem value={20}>20 hrs</MenuItem>
              <MenuItem value={21}>21 hrs</MenuItem>
              <MenuItem value={22}>22 hrs</MenuItem>
              <MenuItem value={23}>23 hrs</MenuItem>
              <MenuItem value={24}> 24 hrs</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="med-attribute">Medication</InputLabel>
            <Select
              labelId="med-attribute"
              id="med-attribute"
              value={med}
              onChange={handleMedChange}
            >
              <MenuItem value={"zoloft"}>Zoloft (sertraline) </MenuItem>
              <MenuItem value={"celexa"}>Celexa (citalopram)</MenuItem>
              <MenuItem value={"prozac"}>Prozac (fluoxetine)</MenuItem>
              <MenuItem value={"desyrel"}>Desyrel (trazodone)</MenuItem>
              <MenuItem value={"lexapro"}>Lexapro (escitalopram) </MenuItem>
              <MenuItem value={"cymbalta"}>Cymbalta (duloxetine)</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="exercise-attribute">Excerise</InputLabel>
            <Select
              labelId="exercise-attribute"
              id="exercise-attribute"
              value={exercise}
              onChange={handleExerciseChange}
            >
              <MenuItem value={false}>No</MenuItem>
              <MenuItem value={true}>Yes</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
      </div>
    </Container>
  );
};

export default MoodForm;
