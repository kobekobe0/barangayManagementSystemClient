const validateDate = (dateOfBirth) => {
    const dateParts = dateOfBirth.split('-');
  
    if (dateParts.length !== 3 ||
        dateParts[0].length !== 4 ||
        dateParts[1].length !== 2 ||
        dateParts[2].length !== 2 ||
        parseInt(dateParts[1]) < 1 ||
        parseInt(dateParts[1]) > 12 ||
        parseInt(dateParts[2]) < 1 ||
        parseInt(dateParts[2]) > 31) {
      return false;
    }
  
    return true;
}

export default validateDate;