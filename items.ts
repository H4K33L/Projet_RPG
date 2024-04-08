import Character from "./Character.ts";
export default class item {
    private heal: number; // pourcentage de heal = 20
    private quantity: number;
    private rez: number;
    private healType: string;
    private healMana : number;
    private name: string

    public get _quantity () {
        return this.quantity
    }
    public set _quantity (input){
            this.quantity = input
    }

    protected constructor(heal: number, quantity: number, rez : number, healType: string,healMana:number, name: string) {
        this.heal = heal;
        this.quantity = quantity
        this.rez = rez
        this.healType = healType
        this.name = name

    }
}
