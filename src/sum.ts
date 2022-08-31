export const sum = (...numbers: number[]) => {
  return numbers.reduce((total, number) => total + number, 0);
}

export const anyFunc = (...numbers: number[]) => {
  return numbers.reduce((total, number) => total + number, 0);
}

anyFunc();