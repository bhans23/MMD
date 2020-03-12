import React, { useContext, useState } from "react";
import { MoodContext } from "../../../providers/MoodContext";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const InputValues = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: 300 + theme.spacing(3) * 2
    },
    margin: {
      height: theme.spacing(3)
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));
  const classes = useStyles();
  const moods = useContext(MoodContext);

  const {
    moodStates: {
      activity,
      setActivity,
      sleep,
      setSleep,
      sleepTime,
      setSleepTime,
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
   const handleChange = (event) => {
     const valueChange = event.target.name;
     valueChange(event.target.value);
   }

  const handleSleepTimeChange = event => {
    setSleepTime(event.target.value);
  };

  const handleMedicationChange = event => {
    setMedication(event.target.value);
  };

  const handleMedicationDosageChange = event => {
    setMedicationDosage(event.target.value);
  };

  const handleExerciseTimeChange = event => {
    setExerciseTime(event.target.value);
  };

  const handleYogaTimeChange = event => {
    setYogaTime(event.target.value);
  };

  const handleMeditationTimeChange = event => {
    setMeditationTime(event.target.value);
  };

  const handleActivityChange = event => {
    setActivity(event.target.value);
  };

  const timeArray = Array(6)
    .fill(null)
    .map((_, x) => (
      <MenuItem value={(x + 1) * 10}>{(x + 1) * 10} min</MenuItem>
    ));

  const sleepAttributeForm = activity => {
    if (activity === "sleepSelect") {
      setSleep(true);
      return (
        <FormControl className={classes.formControl}>
          <InputLabel id="sleep-time-attribute">Sleep Time</InputLabel>
          <Select
            name="setSleepTime"
            labelId="sleep-time-attribute"
            id="sleep-time-attribute"
            value={sleepTime}
            onChange={e => setSleepTime(e.target.value)}
          >
            {Array(24)
              .fill(null)
              .map((_, x) => (
                <MenuItem value={x + 1}>{x + 1} hrs </MenuItem>
              ))}
          </Select>
        </FormControl>
      );
    }
  };


  const exceriseAttributeForm = () => {
    setExercise(true);
    if (activity === "exerciseSelect") {
      return (
        <FormControl className={classes.formControl}>
          <InputLabel id="exercise-time-attribute">Time Exercised</InputLabel>
          <Select
            labelId="exercise-time-attribute"
            id="exercise-time-attribute"
            value={exerciseTime}
            onChange={handleExerciseTimeChange}
          >
            {timeArray}
          </Select>
        </FormControl>
      );
    }
  };

  const yogaAttributeForm = activity => {
    setYoga(true);
    if (activity === "yogaSelect") {
      return (
        <FormControl className={classes.formControl}>
          <InputLabel id="yoga-time-attribute">Yoga Time</InputLabel>
          <Select
            name="setYogaTime"
            labelId="yoga-time-attribute"
            id="yoga-time-attribute"
            value={yogaTime}
            onChange={handleYogaTimeChange}
          >
            {timeArray}
          </Select>
        </FormControl>
      );
    }
  };

  const meditationAttributeForm = activity => {
    setMeditation(true);
    if (activity === "meditationSelect") {
      return (
        <FormControl className={classes.formControl}>
          <InputLabel id="meditation-time-attribute">
            Meditation Time
          </InputLabel>
          <Select
            name="SetMeditationTime"
            labelId="meditation-time-attribute"
            id="meditation-time-attribute"
            value={meditationTime}
            onChange={handleMeditationTimeChange}
          >
            {timeArray}
          </Select>
        </FormControl>
      );
    }
  };

  const activitySelect = activity => {
    const sleepSelector = "sleepSelect";
    const meditationSelector = "meditationSelect";
    const exerciseSelector = "exerciseSelect";
    const medicationSelector = "medicationSelect";
    const yogaSelector = "yogaSelect";

    return (
      <FormGroup>
        <FormControl className={classes.formControl}>
          <InputLabel id="activity-select-label">Choose Activity</InputLabel>
          <Select
            name="setActivity"
            labelId="activity-select-label"
            id="activity-select"
            value={activity}
            onChange={handleActivityChange}
          >
            <MenuItem value={sleepSelector}>Sleep</MenuItem>
            <MenuItem value={meditationSelector}>Meditation</MenuItem>
            <MenuItem value={exerciseSelector}>Excerise</MenuItem>
            <MenuItem value={medicationSelector}>Medication</MenuItem>
            <MenuItem value={yogaSelector}>Yoga</MenuItem>
          </Select>
          <>
            {sleepAttributeForm(activity)}
            {medicationAttributeForm(activity)}
            {exceriseAttributeForm()}
            {yogaAttributeForm(activity)}
            {meditationAttributeForm(activity)}
          </>
        </FormControl>
      </FormGroup>
    );
  };

  return <>{activitySelect(activity)}</>;
};

export default InputValues;
