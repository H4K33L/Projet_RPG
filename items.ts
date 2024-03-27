export default class item {
    heal: number; // pourcentage de heal = 20
    quantity: number;
    type: number;
    healType: number;
    target: boolean;
    useVerification: boolean;
    name: string

    constructor(heal: number, quantity: number, type: number, healType: number, target: boolean, useVerification: boolean, name: string) {
        this.heal = heal;
        this.quantity = quantity
        this.type = type
        this.healType = healType
        this.target = target
        this.useVerification = useVerification
        this.name = name

    }

    useHeal(heal: number, character: Caracter) {
        if (character.alive) {
            character.heal


        } 
        else (character.alive)
            character.rez
        }
    }

