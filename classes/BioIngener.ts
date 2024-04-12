import Character from "../character/Character.ts"
import Special from "../character/Special.ts"

export default class BioIngener extends Character{
    protected _AOESpecialAction : boolean

    public get AOESpecialAction() {
        return this._AOESpecialAction
    }


    constructor(){
        super('BioIngener',15,0,0,0,50,60,[" ☺ ~","/|\\ ","=== ","    "])
        this._AOESpecialAction = false
    }

    specialAction(targets : Character[]): void {
        targets.forEach(target => {
            target.heal(25)
        })
    }

    public deepCopy(): Character {
      return new BioIngener()
    }
}