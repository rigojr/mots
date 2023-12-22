import { GridBuilder } from '@/utils/grid-builder';

describe("grid-builder", () => {
  test('should build a matrix', () => {
    const words = ['cat', 'dog', 'fish'];
    const rows = 10;
    const columns = 5;

    const gridBuilder = new GridBuilder(words, rows, columns);

    expect(gridBuilder.getMatrix().length).toStrictEqual(columns);
    expect(gridBuilder.getMatrix()[0].length).toStrictEqual(rows);
  });

  test('should sort a collection of words', () => {
    const words = ['lemon', 'dog', 'fish'];
    const rows = 10;
    const columns = 5;

    const gridBuilder = new GridBuilder(words, rows, columns);
    const sortedWords = gridBuilder.sort();

    console.log(sortedWords);

    expect(sortedWords[0]).toStrictEqual(words[0]);
    expect(sortedWords[sortedWords.length - 1]).toStrictEqual(words[1]);
  });
});