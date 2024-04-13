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
        super('Techno-Mage',20,30,10,30,50,60,[" ☼  ","_☺_ ","|:=¤","/:\\ "])
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
        this.currentQuantum = Math.min(this.maximumQantum, this.currentQuantum + (this.maximumQantum*(percent/100)))
    }

    public deepCopy(): Character {
      return new TechnoMage()
    }
}