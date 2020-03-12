import React, { createContext, useState } from "react";

export const useMood = () => {
  const [moodState, _setMoodState] = useState({ coolValue: 'blah' });

  const setMoodState = (partialMoodState) =>
    _setMoodState(currentMoodState => ({ ...currentMoodState, ...partialMoodState }));

  // const x = {
  //   a: 'b',
  //   c: 'd'
  // };

  // const y = {
  //   a: 'x',
  // };

  // let z = { ...x, ...y };

  // What is z?

  // {
  //   a: 'x', c: 'd'
  // }

  return [moodState, setMoodState];
};

export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const moodValue = useMood();

  return (
    <MoodContext.Provider value={moodValue}>{children}</MoodContext.Provider>
  );
};
