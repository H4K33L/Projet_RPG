import items from "./items.ts";
import Character from "./Character.ts";
export default class mana extends items {

    constructor(heal: number, quantity: number, rez: number, healType: string,healMana:number, name: string){
        super(heal,quantity,rez,healType,healMana,name);
    }

    useHealMana(healMana: number, technoMage: Character) {
        technoMage.healMana(healMana)
    }
}


/**
 * fonction heal mana si alive et heal mana d'un pourcentage
 */