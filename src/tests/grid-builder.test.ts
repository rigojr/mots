import { GridBuilder } from '@/utils/grid-builder';

describe("grid-builder", () => {
  test('should build a matrix', () => {
    const words = ['cat', 'dog', 'fish'];
    const rows = 10;
    const columns = 5;

    const grid = new GridBuilder(words);
    grid.initialize(rows, columns);

    expect(grid.getMatrix().length).toStrictEqual(columns);
    expect(grid.getMatrix()[0].length).toStrictEqual(rows);
  });

  test('should sort a collection of words', () => {
    const words = ['lemon', 'dog', 'fish'];
    const rows = 10;
    const columns = 5;

    const grid = new GridBuilder(words);
    grid.initialize(rows, columns);
    const sortedWords = grid.sort();

    expect(sortedWords[0]).toStrictEqual(words[0]);
    expect(sortedWords[sortedWords.length - 1]).toStrictEqual(words[1]);
  });

  test('should place the first word horizontally in the middle of the matrix', () => {
    const words = ['lemn'];
    const rows = 10;
    const columns = 5;

    const grid = new GridBuilder(words);
    grid.initialize(rows, columns);

    const middleRowIndex = Math.round(columns / 2);
    const middleWord = grid.getMatrix()[middleRowIndex].join('').trim();

    expect(middleWord).toStrictEqual(words[0]);
  });

  // test('should place the fist word vertically in the middle of the matrix when)
});