function isQueenSafe(
  chessBoard: Array<Array<number>>,
  x: number,
  y: number
): boolean {
  // Check if the queen is being attacked from top
  for (let row = x; row >= 0; row--) {
    if (chessBoard[row][y] === 1) return false;
  }

  // Check if the queen is being attacked from top left diagonal
  for (let row = x, col = y; row >= 0 && col >= 0; row--, col--) {
    if (chessBoard[row][col] === 1) return false;
  }

  // Check if the queen is being attacked from top right diagonal
  for (
    let row = x, col = y;
    row >= 0 && col < chessBoard.length;
    row--, col++
  ) {
    if (chessBoard[row][col] === 1) return false;
  }

  return true;
}

export function placeQueen(
  chessBoard: Array<Array<number>>,
  row: number
): boolean {
  if (row > chessBoard.length - 1) return true;

  for (let col = 0; col < chessBoard.length; col++) {
    if (isQueenSafe(chessBoard, row, col)) {
      chessBoard[row][col] = 1;
      if (placeQueen(chessBoard, row + 1)) return true;
      chessBoard[row][col] = 0;

    }
  }
  return false;
}
