import items from "./item.ts"
import Character from "../character/Character.ts"

export default class rez extends items {
    protected heal: number // pourcentage de heal = 20
    protected rez: number

    public constructor(heal: number, quantity: number, rez: number, useType: string, name: string){
        super(quantity,useType,name)
        this.heal = heal
        this.rez = rez
    }

    use(targets: Character[]): void{
        targets.forEach(character => {
            if (character.alive) {
                character.heal(this.heal)
            } else {
                character.rez(this.rez)
            }
        })
        this._quantity = Math.max(0, this._quantity-1)
    }
}