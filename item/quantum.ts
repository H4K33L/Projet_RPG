import TechnoMage from "../classes/Technomage.ts"
import Character from "../character/Character.ts"

import items from "./item.ts"
export default class quantum extends items {
    private healMana : number

    public constructor(quantity: number, useType: string,healMana:number, name: string){
        super(quantity,useType,name)
        this.healMana = healMana
    }

    use(targets: Character[]): void{
        targets.forEach(character => {
            if (character instanceof TechnoMage) {
                character.recoverQuantum(this.healMana)
            }
        })
        this._quantity = Math.max(0, this._quantity-1)
    }
}