import Character from "../character/Character.ts"
import Special from "../character/Special.ts"

export default class TechnoMage extends Character implements Special{
    protected currentQuantum : number
    protected maximumQantum : number
    protected _AOESpecialAction : boolean
    public get AOESpecialAction() {
        return this._AOESpecialAction
    }

    constructor(){
        super('Techno-Mage',10,30,10,30,50,60,' ☼  \n_☺_ \n|:=¤\n/:\\ \n')
        this.currentQuantum = 100
        this.maximumQantum = 100
        this._AOESpecialAction = false
    }

    specialAction(targets : Character[]): void {
        targets.forEach(target => {
            target.arm(this.energeticalStrike,'E')
            this.currentQuantum -= 5
        })
    }

    recoverQuantum(percent : number){
        this.currentHitPoint = Math.min(this.maximumQantum, this.currentQuantum + (this.maximumQantum*(percent/100)))
    }
}