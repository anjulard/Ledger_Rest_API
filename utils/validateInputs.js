
export const validateInputs = (input) => {
    const validInputs = ["start_date", "end_date", "frequency", "weekly_rent"];
    console.log(input);
    let errors = [];
    for (const element of validInputs) {
        if(! Object.keys(input).includes(element)) {
            errors.push(`${element} is required field`);
        }
    }
      return errors;
    
  }