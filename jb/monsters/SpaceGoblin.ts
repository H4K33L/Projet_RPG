import Character from "../character/Character.ts";

export default class SpaceGoblin extends Character{
    constructor(){
        super('Space-Goblin',15,0,0,0,90,50,[" \\_/"," (☺)","=*#*"," /| "])
    }

    public deepCopy(): Character {
      return new SpaceGoblin()
    }
}