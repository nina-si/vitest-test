export const multiply = (...numbers: number[]) => {
    return numbers.reduce((total, current) => total* current);
}