import React, { createContext, useState } from "react";

export const useMood = () => {
  const [sleep, setSleep] = useState(0);
  const [medication, setMedication] = useState(null);
  const [medicationDosage, setMedicationDosage] = useState(null);
  const [exercise, setExercise] = useState(null);
  const [exerciseTime, setExerciseTime] = useState(null);
  const [yoga, setYoga] = useState(null);
  const [yogaTime, setYogaTime] = useState(null);
  const [meditation, setMeditation] = useState(null);
  const [meditationTime, setMeditationTime] = useState(null);

  return {
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
  };
};

export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const moodValue = useMood();

  return (
    <MoodContext.Provider value={moodValue}>{children}</MoodContext.Provider>
  );
};
