import Character from "../character/Character.ts";
import Special from "../character/Special.ts";

export default class YoungStarDragon extends Character implements Special{
    constructor(){
        super('Young Star Dragon',25,0,25,0,50,200,["|  ___  |","|>{o o}<|","| \\ | / |","  (o-o) ","   V V   "])
    }

    specialAction(targets: Character[]): void {
        targets.forEach(target => {
            target.arm(this.kineticStrike*0.5,'K')
        })
    }

    public deepCopy(): Character {
      return new YoungStarDragon()
    }
}