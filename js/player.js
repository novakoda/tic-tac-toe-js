class Player {
  constructor(id, mark, name = null) {
    this.id = id + 1;
    this.mark = mark;
    if (name === null || name === "") {
      this.name = `Player ${this.id}`;
    } else {
      this.name = name;
    };
  };

  changeName(name) {
    this.name = name;
  }
};

export default Player;
