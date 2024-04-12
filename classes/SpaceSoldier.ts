import Character from "../character/Character.ts"

export default class SpaceSoldier extends Character{
    constructor(){
        super('Space-Soldier',35,0,25,0,100,100,["\\_\\ ","(°°)","╧╤═▬","\\/\\/"])
    }

    public deepCopy(): Character {
      return new SpaceSoldier()
    }
}