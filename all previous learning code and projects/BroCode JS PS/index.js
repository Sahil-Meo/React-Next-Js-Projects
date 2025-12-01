class GameForm {
  constructor(name){
    this.name = GameForm.cpitalize(name)
  }

  walk(){
    console.log(this.name + " is walking!")

  }

  static cpitalize(name){
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

F = new GameForm("lion");
F.walk();