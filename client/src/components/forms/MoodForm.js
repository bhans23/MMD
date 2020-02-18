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
  const [exerciseTime, setExerciseTime] = useState(null);
  const [yoga, setYoga] = useState(null);
  const [yogaTime, setYogaTime] = useState(null);
  const [meditation, setMeditation] = useState(null);
  const [meditationTime, setMeditationTime] = useState(null);


  const excercizeTimeInput = exercise => {
    if (exercise === true) {
      return (
        <FormControl className={classes.formControl}>
          <InputLabel id="exercise-time-attribute">Time Exercised</InputLabel>
          <Select
            labelId="exercise-time-attribute"
            id="exercise-time-attribute"
            value={exerciseTime}
            onChange={handleExerciseTimeChange}
          >
            <MenuItem value={10}>10 min</MenuItem>
            <MenuItem value={20}>20 min</MenuItem>
            <MenuItem value={30}>30 min</MenuItem>
            <MenuItem value={40}>40 min</MenuItem>
            <MenuItem value={50}>50 min</MenuItem>
            <MenuItem value={60}>60 min</MenuItem>
          </Select>
        </FormControl>
      );
    } else {
    }
  };

  const yogaTimeInput = yoga => {
    if (yoga === true) {
      return (
        <FormControl className={classes.formControl}>
          <InputLabel id="yoga-time-attribute">Yoga Time</InputLabel>
          <Select
            labelId="yoga-time-attribute"
            id="yoga-time-attribute"
            value={yogaTime}
            onChange={handleYogaTimeChange}
          >
            <MenuItem value={10}>10 min</MenuItem>
            <MenuItem value={20}>20 min</MenuItem>
            <MenuItem value={30}>30 min</MenuItem>
            <MenuItem value={40}>40 min</MenuItem>
            <MenuItem value={50}>50 min</MenuItem>
            <MenuItem value={60}>60 min</MenuItem>
          </Select>
        </FormControl>
      );
    } else {
    }
  };

  const meditationTimeInput = meditation => {
    if (meditation === true) {
      return (
        <FormControl className={classes.formControl}>
          <InputLabel id="meditation-time-attribute">Meditation Time</InputLabel>
          <Select
            labelId="meditation-time-attribute"
            id="meditation-time-attribute"
            value={meditationTime}
            onChange={handleMeditationTimeChange}
          >
            <MenuItem value={10}>10 min</MenuItem>
            <MenuItem value={20}>20 min</MenuItem>
            <MenuItem value={30}>30 min</MenuItem>
            <MenuItem value={40}>40 min</MenuItem>
            <MenuItem value={50}>50 min</MenuItem>
            <MenuItem value={60}>60 min</MenuItem>
          </Select>
        </FormControl>
      );
    } else {
    }
  };

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

  const handleExerciseTimeChange = event => {
    setExerciseTime(event.target.value);
  };

   const handleYogaChange = event => {
    setYoga(event.target.value);
  };

  const handleYogaTimeChange = event => {
    setYogaTime(event.target.value);
  };

  const handleMeditationChange = event => {
    setMeditation(event.target.value);
  };

  const handleMeditationTimeChange = event => {
    setMeditationTime(event.target.value);
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
          {excercizeTimeInput(exercise)}
          <FormControl className={classes.formControl}>
            <InputLabel id="yoga-attribute">Yoga</InputLabel>
            <Select
              labelId="yoga-attribute"
              id="yoga-attribute"
              value={yoga}
              onChange={handleYogaChange}
            >
              <MenuItem value={false}>No</MenuItem>
              <MenuItem value={true}>Yes</MenuItem>
            </Select>
          </FormControl>
          {yogaTimeInput(yoga)}
          <FormControl className={classes.formControl}>
            <InputLabel id="mediation-attribute">Meditation</InputLabel>
            <Select
              labelId="meditation-attribute"
              id="meditation-attribute"
              value={meditation}
              onChange={handleMeditationChange}
            >
              <MenuItem value={false}>No</MenuItem>
              <MenuItem value={true}>Yes</MenuItem>
            </Select>
          </FormControl>
          {meditationTimeInput(meditation)}
        </FormGroup>
      </div>
    </Container>
  );
};

export default MoodForm;
