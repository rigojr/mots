import { ChangeEvent } from "react";

export interface Props {
  /**
   * The cell payload.
   */
  payload: string;

  /**
   * Indicates whether the cell is empty or not.
   */
  isEmpty?: boolean;

  /**
   * TODO:
   */
  isVisible?: boolean;

  /**
   * The cell upper left-hand count.
   */
  count?: number;

  /**
   * Occurs when the input text has been changed.
   */
  onChange: (value: string) => void
}

export default function Cell({
  payload,
  isEmpty = false,
  isVisible = true,
  count,
  onChange
}: Props) {

  function getBorderedStyle(): string {
    if (!isVisible) {
      return '';
    }

    return 'border border-purple-400 rounded';
  }

  function doOnChange(e: ChangeEvent<HTMLInputElement>, payload: string): void {
    const value = e.target.value.replace(payload, '');

    onChange(value.toUpperCase());
  }

  return (
    <div className={`relative flex items-center justify-center m-1 xs:h-6 xs:w-6 sm:h-8 sm:w-8 lg:w-10 lg:h-10 xl:h-12 xl:w-12 ${getBorderedStyle()}`}>
      <span className="uppercase">
        { isEmpty ? '' : <input className="block w-full bg-transparent text-center" type="text" value={payload} onChange={(e) => doOnChange(e, payload)} />}
      </span>
      {
        count ? <span className="absolute top-0 left-0 p-1 text-xs">{count}</span> : ''
      }
    </div>
  );
}