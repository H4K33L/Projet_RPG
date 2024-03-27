import items from "./items.ts";
import Character from "./Character.ts";
export default class mana extends items {

    constructor(heal: number, quantity: number, rez: number, healType: string, name: string){
        super(heal,quantity,rez,healType,name);
    }





    
}


/**
 * fonction heal si alive et heal mana d'un pourcentage
 */