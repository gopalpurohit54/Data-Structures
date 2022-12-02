export function ratMaze(
  maze: Array<Array<0 | 1>>,
  x: number,
  y: number
): boolean {
  if (x === maze.length - 1 && y === maze.length - 1) return true;

  if (maze[x][y + 1] === 1) {
    if (ratMaze(maze, x, y + 1)) return true;
  }
  if (maze[x + 1][y] === 1) {
    if (ratMaze(maze, x + 1, y)) return true;
  }

  return false;
}
