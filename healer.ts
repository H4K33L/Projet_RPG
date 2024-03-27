import items from "./items.ts";
import Character from "./Character.ts";
export default class healer extends items {

    constructor(heal: number, quantity: number, rez: number, healType: string, name: string){
        super(heal,quantity,rez,healType,name);
    }


    useHeal(heal: number, character: Character) {
        character.heal(heal)
    }







}





/**
 * fonction heal si alive et heal d'un pourcentage 
 * fonction general dut au potion de heal 
 */