import items from "./items.ts";
import Character from "./Character.ts";
export default class healer extends items {

    public constructor(heal: number, quantity: number, rez: number, healType: string,healMana:number, name: string){
        super(heal,quantity,rez,healType,healMana,name);
    }

    public useHeal(heal: number, character: Character) {
        character.heal(heal)
    }
}





/**
 * fonction heal si alive et heal d'un pourcentage 
 * fonction general dut au potion de heal 
 */