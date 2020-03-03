import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { MoodContext } from "../../../providers/MoodContext";

const MoodSlider = () => {
  const moods = useContext(MoodContext);
  const {
    moodStates: { moodSliderValue, setMoodSliderValue }
  } = moods;
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

  return (
    <>
      <MoodSlider
        value={moodSliderValue}
        onChange={e => setMoodSliderValue(e.target.value)}
        valueLabelDisplay="on"
        aria-label="pretto slider"
        defaultValue={5}
        min={0}
        max={10}
      />

      {console.log(moodSliderValue)}
    </>
  );
};

export default MoodSlider;
