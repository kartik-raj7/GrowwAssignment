export const formatCurrency = (number) => {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    let suffixIndex = 0;
  
    while (number >= 1000) {
      number /= 1000;
      suffixIndex++;
    }
  
    return number.toFixed(1) + suffixes[suffixIndex];
  };