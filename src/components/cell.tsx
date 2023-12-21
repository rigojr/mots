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
   * The cell upper left-hand count.
   */
  count?: number;
}

export default function Cell({
  payload,
  isEmpty = false,
  count = false
}: Props) {

  function getBorderedStyle(): string {
    if (isEmpty) {
      return '';
    }

    return 'border border-purple-400 rounded';
  }

  return (
    <div className={`relative flex items-center justify-center m-1 xs:h-6 xs:w-6 sm:h-8 sm:w-8 lg:w-10 lg:h-10 xl:h-12 xl:w-12 ${getBorderedStyle()}`}>
      <span className="uppercase">
        { isEmpty ? '' : payload }
      </span>
      {
        count ? <span className="absolute top-0 left-0 p-1 text-xs">{count}</span> : ''
      }
    </div>
  );
}