import Character from "../character/Character.ts"

export default abstract class Item {
    protected useType: string
    protected _name: string
    public get name () {
        return this._name
    }

    protected _quantity: number
    public get quantity () {
        return this._quantity
    }
    public set quantity (input){
            this._quantity = input
    }

    protected constructor(quantity: number, useType: string, name: string) {
        this._quantity = quantity
        this.useType = useType
        this._name = name
    }

    abstract use(targets: Character[]): void 
}