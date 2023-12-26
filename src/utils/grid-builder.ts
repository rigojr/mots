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
      const middleColumnIndex = Math.round(this.matrix[0].length / 2);

      this.matrix.forEach((_, rowIndex) => {
        const isLocationOverflow = rowIndex > firstWord.length - 1;

        if (isLocationOverflow) {
          return; // TODO: should break, use for loop instead.
        }

        this.matrix[rowIndex][middleColumnIndex] = firstWord[rowIndex];
      });
    }
  }

  /**
   * Places the first world horizontally.
   *
   * @param word The word to be put.
   */
  private placeFirstWordHorizontally(firstWord: string[]) {
    const middleRowIndex = Math.round(this.matrix.length / 2);
    const middleRow = this.matrix[middleRowIndex].map((_, index) => { // TODO: is not mandatory to use the matrix here, will be better a new array to avoid confusion.
      const isLocationOverflow = index > firstWord.length - 1;

      if (!isLocationOverflow) {
        return firstWord[index];
      }

      return '';
    });

    this.matrix[middleRowIndex] = middleRow;
  }
}