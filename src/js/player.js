class Player {
  constructor(id, mark) {
    this.id = id + 1;
    this.mark = mark;
    this.name = `Player ${this.id}`;
  }
}

export default Player;
