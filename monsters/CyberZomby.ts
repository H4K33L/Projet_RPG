import Character from "../character/Character.ts";

export default class CyberZomby extends Character{

    constructor(){        
        super('Cyber-Zomby',20,0,0,0,20,100,["    ","  ☺ ","  #*"," // "])
    }

    public deepCopy(): Character {
        return new CyberZomby()
      }
}