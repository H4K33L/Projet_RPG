import Items from "./item.ts"
import Character from "../character/Character.ts"

export default class healer extends Items {
    protected heal: number // pourcentage de heal = 20

    public constructor(heal: number, quantity: number, useType: string, name: string){
        super(quantity,useType,name)
        this.heal = heal
    }

    use(targets: Character[]): void{    
        targets.forEach(character => {
            character.heal(this.heal)
        })
        this._quantity = Math.max(0, this._quantity-1)
    }
}

// fonction de heal pour les item tel que la potion ou les étoile si le character est pas mort 