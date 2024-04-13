import Character from "../character/Character.ts";
import Special from "../character/Special.ts";

export default class YoungStarDragon extends Character implements Special{
    constructor(){
        super('Young Star Dragon',30,0,20,0,50,200,["|  ___  |","|>{o o}<|","| \\ | / |","  (o-o) ","   V V   "])
    }

    specialAction(targets: Character[]): void {
        targets.forEach(target => {
            target.arm(this.kineticStrike*0.5,'E')
        })
    }

    public deepCopy(): Character {
      return new YoungStarDragon()
    }
}