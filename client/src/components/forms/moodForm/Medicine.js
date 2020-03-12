import React from 'react';

const MedicineForm = () => {
  const
  const medicationDosageInput = () => {
    if (medication !== null) {
      return (
        <FormControl className={classes.formControl}>
          <InputLabel id="medication-dosage-attribute">
            Medication Dosage
          </InputLabel>
          <Select
            name="setMedicationDosage"
            labelId="medication-dosage-attribute"
            id="medication-dosage-attribute"
            value={medicationDosage}
            onChange={handleMedicationDosageChange}
          >
            {Array(21)
              .fill(null)
              .map((_, x) => (
                <MenuItem value={(x + 1) * 10}>{(x + 1) * 10} mg </MenuItem>
              ))}
          </Select>
        </FormControl>
      );
    } 
  };

  if (activity === "medicationSelect") {
    return (
      <>
        <FormControl className={classes.formControl}>
          <InputLabel id="med-attribute">Medication</InputLabel>
          <Select
            name="setMedication"
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

        {medicationDosageInput(medication)}
      </>
    );
  }
}