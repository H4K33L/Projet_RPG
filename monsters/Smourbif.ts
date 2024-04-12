import Character from "../character/Character.ts";

export default class Smourbif extends Character{
    constructor(){
        super('Smourbif',10,0,5,0,35,75,["{~~}","(YY)","~**~",")--("])
    }

    public deepCopy(): Character {
      return new Smourbif()
    }
}