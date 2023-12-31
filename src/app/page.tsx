'use client'

import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Cell from '@/components/cell';

/**
 * TODO: find better name.
 */
class BoxLetter {
  private payload: string | undefined;
  private visiblePayload: string | undefined;
  private uuid: string;

  constructor(payload: string) {
    this.payload = payload === '_' ? undefined : payload;
    this.visiblePayload = payload === '_' ? undefined : '';
    this.uuid = uuid();
  }

  public setVisiblePayload(value: string) {
    this.visiblePayload = value;
  }

  public getPayload(): string | undefined {
    return this.payload;
  }

  public getVisiblePayload(): string | undefined {
    return this.visiblePayload;
  }

  public getUuid(): string {
    return this.uuid;
  }
}

export default function Home() {
  const testDAta =
    [
      ['H', 'O', 'O', 'K', 'S', '_', '_', '_', '_', '_'],  // Row 1
      ['_', '_', '_', '_', 'T', '_', '_', '_', '_', '_'],  // Row 2
      ['_', '_', '_', '_', 'A', '_', '_', 'J', '_', '_'],  // Row 3
      ['_', '_', '_', '_', 'T', '_', '_', 'S', '_', '_'],  // Row 4
      ['_', '_', '_', 'R', 'E', 'D', 'U', 'X', '_', '_'],  // Row 5
      ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],  // Row 6
      ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],  // Row 7
      ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],  // Row 8
      ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],  // Row 9
      ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_']   // Row 10
    ];

  const [matrix, setMatrix] = useState(testDAta.map((row) => {
    return row.map((value) => {
      return new BoxLetter(value);
    });
  }))

  /**
   * TODO:
   */
  function updateMatrix(value: string, rowIndex: number, colIndex: number): void {
    const newMatrix = Array.from(matrix);

    newMatrix[rowIndex][colIndex].setVisiblePayload(value);

    setMatrix(newMatrix);
  }

  return (
    <main className="min-h-screen p-24">
      {
        matrix.map((row, rowIndex) => {
          return <div className='flex' key={uuid()}>
            {
              row.map((value, colIndex) => {
                return (
                  <Cell
                    key={value.getUuid()}
                    payload={value.getVisiblePayload() ?? ''}
                    isEmpty={value.getVisiblePayload() === undefined}
                    isVisible={value.getPayload() !== undefined}
                    onChange={(value) => updateMatrix(value, rowIndex, colIndex)}
                  />
                )
              })
            }
          </div>
        })
      }
    </main>
  )
}
