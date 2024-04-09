import Character from "../Character";
import Special from "../Special";

export default class YoungStarDragon extends Character implements Special{
    constructor(){
        super('Young Star Dragon',25,0,25,0,50,200,'|  ___  |\n|>{o o}<|\n| \\ | / |\n  (o-o)   \n   V V    \n')
    }

    specialAction(targets: Character[]): void {
        targets.forEach(target => {
            target.arm(this.kineticStrike*0.5,'K')
        })
    }
}