const convertToUpperCase = (inputString) => {
    if (typeof inputString !== 'string') {
      throw new Error('Input must be a string');
    }
  
    const stringWithoutUnderscores = inputString.replace(/_/g, ' ');
    return stringWithoutUnderscores.toUpperCase();
  };
  export default convertToUpperCase