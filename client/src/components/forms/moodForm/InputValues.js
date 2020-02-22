import React, { useContext, useRef } from "react";
import { MoodContext } from "../../../providers/MoodContext";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const InputValues = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: 300 + theme.spacing(3) * 2
    },
    margin: {
      height: theme.spacing(3)
    }
  }));
  const classes = useStyles();
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

  const handleSleepChange = event => {
    setSleep(event.target.value);
  };

  const handleMedicationChange = event => {
    setMedication(event.target.value);
  };

  const handleMedicationDosageChange = event => {
    setMedicationDosage(event.target.value);
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

  const inputLabel = useRef(null);

  const timeArray =  Array(6).fill(null).map((_, x) => (<MenuItem value={(x + 1) * 10}>{(x + 1) * 10} min</MenuItem>));

  const medicationAttributeForm = () => {
    const medicationDosageInput = medication => {
      if (medication !== null) {
        return (
          <FormControl className={classes.formControl}>
            <InputLabel id="medication-dosage-attribute">
              Medication Dosage
            </InputLabel>
            <Select
              labelId="medication-dosage-attribute"
              id="medication-dosage-attribute"
              value={medicationDosage}
              onChange={handleMedicationDosageChange}
            >
              <>
                {Array(21)
                  .fill(null)
                  .map((_, x) => (
                    <MenuItem value={(x + 1) * 10}>{(x + 1) * 10} mg </MenuItem>
                  ))}
              </>
            </Select>
          </FormControl>
        );
      } else {
      }
    };
    return (
      <>
        <FormControl className={classes.formControl}>
          <InputLabel id="med-attribute">Medication</InputLabel>
          <Select
            labelId="med-attribute"
            id="med-attribute"
            value={medication}
            onChange={handleMedicationChange}
          >
            <MenuItem value={"zoloft"}>Zoloft (sertraline) </MenuItem>
            <MenuItem value={"celexa"}>Celexa (citalopram)</MenuItem>
            <MenuItem value={"prozac"}>Prozac (fluoxetine)</MenuItem>
            <MenuItem value={"desyrel"}>Desyrel (trazodone)</MenuItem>
            <MenuItem value={"lexapro"}>Lexapro (escitalopram) </MenuItem>
            <MenuItem value={"cymbalta"}>Cymbalta (duloxetine)</MenuItem>
          </Select>
        </FormControl>
      </>
    );
    {
      medicationDosageInput(medication);
    }
  };

  const exceriseAttributeForm = () => {
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
              <>{timeArray()}</>
            </Select>
          </FormControl>
        );
      } else {
      }
    };
    return (
      <>
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
      </>
    );
  };

  const yogaAttributeForm = () => {
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
              <>{timeArray()}</>
            </Select>
          </FormControl>
        );
      } else {
      }
    };
    return (
      <>
        <FormControl>
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
      </>
    );
  };

  const meditationAttributeForm = (meditation) => {
    const meditationTimeInput = (meditation) => {
      if (meditation === true) {
        return (
          <FormControl className={classes.formControl}>
            <InputLabel id="meditation-time-attribute">
              Meditation Time
            </InputLabel>
            <Select
              labelId="meditation-time-attribute"
              id="meditation-time-attribute"
              value={meditationTime}
              onChange={handleMeditationTimeChange}
            >
              <>{timeArray}</>
            </Select>
          </FormControl>
        );
      } else {
      }
    };

    return (
      <>
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
      </>
    );
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Choose Activity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //   value={age}
          //   onChange={handleChange}
        >
          <>{meditationAttributeForm(meditation)}</>
        </Select>
      </FormControl>
    </>
  );
};

export default InputValues;
