import Character from "./Character.ts";
import TechnoMage from "./Technomage.ts";
import items from "./items.ts";
export default class quantum extends items {

    public constructor(heal: number, quantity: number, rez: number, healType: string,healMana:number, name: string){
        super(heal,quantity,rez,healType,healMana,name);
    }

    public recoverQuantum(healQuantum: number, technoMage: TechnoMage) {
        technoMage.recoverQuantum(healQuantum);
    }
}


/**
 * fonction heal mana si alive et heal mana d'un pourcentage (fonction deja coder dans technomage)
 */