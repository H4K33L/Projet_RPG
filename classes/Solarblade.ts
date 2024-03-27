import Character from "../Character.ts"
import Special from "../Special.ts"

export default class Solarblade extends Character implements Special{
    protected _AOESpecialAction : boolean
    public get AOESpecialAction() {
        return this._AOESpecialAction
    }

    constructor(){
        super('Solarblade',20,0,30,0,80,100,'  ║ \n☺ ║ \n♦=╞┐\n|\\  \n')
        this._AOESpecialAction = true
    }

    specialAction(targets : Character[]): void {
        targets.forEach(target => {
            target.arm(this.kineticStrike*0.4,'K')
        })
    }
}