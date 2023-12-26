export class GridBuilder {
  private matrix: string[][] = [[]];
  private words: string[]

  constructor(words: string[]) {
    this.words = words;
  }

  public initialize(rows: number, columns: number): void {
    this.matrix = this.buildMatrix(rows, columns);
    this.fillMatrix();
  }

  /**
   * Gets the matrix.
   *
   * @returns The matrix.
   */
  public getMatrix(): string[][] {
    return this.matrix;
  }

  /**
   * Sorts the word collection from the longest to the shortest.
   *
   * @param words The collection of words.
   *
   * @returns The sorted word collection.
   */
  public sort(): string[] {
    this.words = [...this.words].sort((first, second) => second.length - first.length);

    return this.words;
  }

  /**
   * Fills the matrix with the words.
   */
  private fillMatrix(): void {
    this.placeFirstWord();
  }

  /**
   * Build the matrix from a given column and row counts.
   *
   * @param rows    The row counts.
   * @param columns The columns counts.
   *
   * @returns The matrix.
   */
  private buildMatrix(rows: number, columns: number): string[][] {
    // TODO: add condition related to the minimum allow for rows and columns.
    // TODO: add conditions related to the given rows and columns should be capable of contain the given words.
    return new Array(rows).fill(undefined).map(() => {
      return new Array(columns).fill(undefined);
    });
  }

  /**
   * Places the first word into the matrix.
   */
  private placeFirstWord(): void {
    const firstWord = this.words[0].split('');
    const columns = this.matrix[0].length;
    const rows = this.matrix.length;
    const isHorizontally = columns >= firstWord.length;
    const isVertically = rows >= firstWord.length;

    if (isHorizontally) {
      this.placeFirstWordHorizontally(firstWord);
    } else if (isVertically) {
      this.placeFirstWordVertically(firstWord);
    }
  }

  /**
   * Places the first world vertically.
   *
   * @param word The word to be put.
   */
  private placeFirstWordVertically(word: string[]) {
    const middleColumnIndex = Math.round(this.matrix[0].length / 2);

    for (let rowIndex = 0; rowIndex < this.matrix.length; rowIndex++) {
      const isLocationOverflow = rowIndex > word.length - 1;

      if (isLocationOverflow) {
        break;
      }

      this.matrix[rowIndex][middleColumnIndex] = word[rowIndex];
    }
  }

  /**
   * Places the first world horizontally.
   *
   * @param word The word to be put.
   */
  private placeFirstWordHorizontally(firstWord: string[]) {
    const middleRowIndex = Math.round(this.matrix.length / 2);

    for (let columnIndex = 0; columnIndex < this.matrix[middleRowIndex].length; columnIndex++) {
      const isLocationOverflow = columnIndex > firstWord.length - 1;

      if (isLocationOverflow) {
        break;
      }

      this.matrix[middleRowIndex][columnIndex] = firstWord[columnIndex];
    }
  }
}