import Character from "../character/Character.ts"
import Use from "./use.ts"

export default abstract class Item implements Use {
    protected useType: string
    protected _name: string
    public get name () {
        return this._name
    }
    public set name (input){
            this._name = input
    }
    // set name car plusieur objets peuvent heal donc c'est mieux de les differencier

    protected _quantity: number
    public get quantity () {
        return this._quantity
    }
    // quantity d'objets posseder 

    public set quantity (input){
            this._quantity = input
    }
    //setup nombre d'objets posseder

    protected constructor(quantity: number, useType: string, name: string) {
        this._quantity = quantity
        this.useType = useType
        this._name = name
    }

    use(targets: Character[]): void {targets}
}