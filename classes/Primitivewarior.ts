import Character from "../Character.ts"
import Special from "../Special.ts"

export default class Primitivewarior extends Character implements Special{
    protected _AOESpecialAction : boolean
    public get AOESpecialAction() {
        return this._AOESpecialAction
    }

    constructor(){
        super('Primitive-Warior',30,0,15,0,75,100,'+-+𐃈\n|☺| \n ♥  \n/ \\ \n')
        this._AOESpecialAction = false
    }

    specialAction(targets : Character[]): void {
        targets.forEach(target => {
            target.arm(this.kineticStrike*1.3,'K')
            this.arm(this.maximumHitPoint*0.2,'E')
        })
    }
}