export class GridBuilder {
  readonly words: string[]
  readonly matrix: string[][];

  constructor(words: string[], rows: number, columns: number) {
    this.words = words;
    this.matrix = new Array(0).fill(undefined).map()
  }

  
}