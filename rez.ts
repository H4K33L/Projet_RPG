import items from "./items.ts";
import Character from "./Character.ts";
export default class rez extends items {

    constructor(heal: number, quantity: number, rez: number, healType: string,healMana:number, name: string){
        super(heal,quantity,rez,healType,healMana,name);
    }



    useRez(rez: number, character: Character) {
        character.rez(rez)
    }

    useHeal(heal: number, character: Character) {
        character.heal(heal)
    } 
}



/**
 * fonction heal si alive et heal d'un pourcentage
 * fonction rez si mort et heal d'un pourcentage
 */