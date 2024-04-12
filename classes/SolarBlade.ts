import Character from "../character/Character.ts"
import Special from "../character/Special.ts"

export default class Solarblade extends Character implements Special{
    protected _AOESpecialAction : boolean
    public get AOESpecialAction() {
        return this._AOESpecialAction
    }

    constructor(){
        super('Solarblade',30,0,30,0,80,100,["  ║ ","☺ ║ ","♦=╞┐","|\\  "])
        this._AOESpecialAction = true
    }

    specialAction(targets : Character[]): void {
        targets.forEach(target => {
            target.arm(this.kineticStrike*0.4,'K')
        })
    }

    public deepCopy(): Character {
      return new Solarblade()
    }
}