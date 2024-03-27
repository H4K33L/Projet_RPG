import Character from "./Character.ts";
export default class item {
    heal: number; // pourcentage de heal = 20
    quantity: number;
    rez: number;
    healType: string;
    // useVerification: boolean; faire fonction de use
    name: string

    constructor(heal: number, quantity: number, rez : number, healType: string, name: string) {
        this.heal = heal;
        this.quantity = quantity
        this.rez = rez
        this.healType = healType
        this.name = name

    }
}
