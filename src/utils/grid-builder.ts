export class GridBuilder {
  private readonly words: string[]
  private readonly matrix: string[][];

  constructor(words: string[], rows: number, columns: number) {
    this.words = words;
    this.matrix = this.buildMatrix(rows, columns);
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
   * Build the matrix from a given column and row counts.
   *
   * @param rows    The row counts.
   * @param columns The columns counts.
   *
   * @returns The matrix.
   */
  private buildMatrix(rows: number, columns: number): string[][] {
    return new Array(columns).fill(undefined).map(() => {
      return new Array(rows).fill(undefined);
    });
  }
}