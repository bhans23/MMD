import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { MoodContext } from "../../../providers/MoodContext";





const MoodSlider = () => {
  const [{moodSliderValue = 0 }, setMoodsState] = useContext(MoodContext);
  const handleChange = (_, moodSliderValue) =>
    setMoodsState({ moodSliderValue });

  return (
    <>
      
      
      <Slider
        value={moodSliderValue}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-label="pretto slider"
        min={0}
        max={10}
      />
      
      
    </>
  );
};

export default MoodSlider;
