export const calculateTotal = (numbers: number[]) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};
