import {shuffle, range} from "lodash";

export type Prime = 2 | 3 | 5 | 7 | 11;

/**
 * Generate supported plains (dimensions) according to the Ray-Chaudhuri–Wilson theorem
 * n - prime number
 * @see https://math.stackexchange.com/questions/36798/what-is-the-math-behind-the-game-spot-it
 */
export const plains = ([2, 3, 5, 7, 11] as Prime[]).map((n: Prime) => ({
  n,
  symbols: n ** 2 + n + 1,
  symbolsPerCard: n + 1,
}));

/**
 * Generate unique cards for available plains
 * @see https://math.stackexchange.com/questions/1303497/what-is-the-algorithm-to-generate-the-cards-in-the-game-dobble-known-as-spo
 */
export const generateCards = (n: Prime) => {
  const d = range(n);

  return shuffle([
    shuffle([...d, n]),
    ...d.flatMap((a) => [
      shuffle([0, ...d.map((b) => n + 1 + n * a + b)]),
      ...d.map((b) =>
        shuffle([a + 1, ...d.map((c) => n + 1 + n * c + ((a * c + b) % n))])
      ),
    ]),
  ]);
};
