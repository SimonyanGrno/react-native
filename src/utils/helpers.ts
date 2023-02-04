const { random, ceil } = Math;

const randomNumber = (max: number) => ceil(random() * max);

const randomNumberInRange = (min: number, max: number) =>
  ceil(random() * (max - min) + min);

export const generateNumbers = () => {
  const output: number[] = [];

  Array(6)
    .fill(0)
    .forEach(() => {
      const number = randomNumber(30);

      output.push(number);
    });

  return output;
};

export const generateTaskNumber = (numbers: number[]) => {
  const indexes: number[] = [];
  const numbersCount = randomNumberInRange(2, 5);

  while (indexes.length !== numbersCount) {
    const index = randomNumber(5);

    if (indexes.length === 0 || !indexes.includes(index)) {
      indexes.push(index);
    }
  }

  return indexes.reduce((acc, item) => acc + numbers[item], 0);
};
