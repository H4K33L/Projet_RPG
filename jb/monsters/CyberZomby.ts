import Character from "../character/Character.ts";

export default class CyberZomby extends Character{

    constructor(){
        super('Cyber-Zomby',30,0,0,0,20,150,["    ","  ☺ ","  #*"," // "])
    }

    public deepCopy(): Character {
        return new CyberZomby()
      }
}