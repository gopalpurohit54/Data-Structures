  
let ROW_MOVES = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
let COL_MOVES = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

export function knightTour(
  boardSize: number
): Array<Array<number | undefined>> {
  const board = new Array<Array<number | undefined>>(boardSize);
  for (let i = 0; i < boardSize; i++) {
    board[i] = new Array(boardSize);
  }

  jumpKnight(board, 0, 0, 0);
  return board;
}

function jumpKnight(
  board: Array<Array<number | undefined>>,
  x: number,
  y: number,
  move: number
): boolean {
  board[x][y] = move;
  if (move + 1 === board.length ** 2) return true;
  for (let i = 0; i < ROW_MOVES.length; i++) {
    let newRow = x + ROW_MOVES[i];
    let newCol = y + COL_MOVES[i];
    if (isValidJump(board, newRow, newCol)) {
      if (jumpKnight(board, newRow, newCol, move + 1)) return true;
    }
  }

  board[x][y] = undefined;
  return false;
}

function isValidJump(
  board: Array<Array<number | undefined>>,
  x: number,
  y: number
) {
  return (
    x >= 0 &&
    x < board.length &&
    y >= 0 &&
    y < board.length &&
    board[x][y] === undefined
  );
}
