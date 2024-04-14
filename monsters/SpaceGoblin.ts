import Character from "../character/Character.ts";

export default class SpaceGoblin extends Character{
    constructor(){
      super('Space-Goblin',25,0,10,0,90,50,[" \\_/"," (☺)","=*#*"," /| "])
    }

    public deepCopy(): Character {
      return new SpaceGoblin()
    }
}