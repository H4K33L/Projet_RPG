import Character from "../character/Character.ts";

export default class Lost extends Character{
    constructor(){
        super('Lost',20,0,10,0,30,75,[" __ ","(oo)","|O \\","\\__/"])
    }

    public deepCopy(): Character {
      return new Lost()
    }
}