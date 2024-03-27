import Character from "../Character.ts"
import Special from "./Special.ts"

export default class BioIngener extends Character implements Special{
    protected _AOESpecialAction : boolean
    public get AOESpecialAction() {
        return this._AOESpecialAction
    }

    constructor(){
        super('BioIngener',15,0,10,0,50,60,' ☺ ~\n/|\\ \n=== \n    \n')
        this._AOESpecialAction = false
    }

    specialAction(targets : Character[]): void {
        targets.forEach(target => {
            target.heal(25)
        })
    }
}