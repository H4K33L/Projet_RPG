import Item from "./item/item.ts"
import rez from "./item/rez.ts"
import healer from "./item/healer.ts"
import mana from "./item/quantum.ts"

import Character from "./character/Character.ts"

import SelectCharcter from "./displays/SelectCharacter.ts"
import DisplayGameTitle from "./displays/DisplayGameTitle.ts"
/*
import Primitivewarior from "./classes/Primitivewarior.ts"
*/
export default class GameManager{
    private _characters : Character[] = []
    public get characters() {
        return this._characters
    }
    public set characters(newCharacter : Character[]){
        this._characters = newCharacter
    }
    public inventory : Item[] = [new healer(50,2,"health","Potion 🧪"),new rez(50,1,20,"rez or heal","Morceau d'étoile ✨"),new rez(100,0,100,"rez or heal","Demi-étoile 🌟"),new mana(1,"mana",30,"Ether 💊")]
    
    private static _instace : GameManager | null = null;

    public static get instance() {
        if(this._instace === null){
            this._instace = new GameManager()
        }
        return this._instace
    }

    private constructor() {}

    public startGame() {
        new DisplayGameTitle
        const selection = async () => {
            await new SelectCharcter().choseCharacters()
            /*
            if (this.characters[2] instanceof Primitivewarior){
                this.characters[2].specialAction([this.characters[2]])
            }
            console.log(this.characters[2].currentHitPoint)
            */
        }
        setTimeout(selection, 5000)
    }

    public addItem(name : string) {
        this.inventory.forEach(item => {
            if (item.name === name) {
                item.quantity = item.quantity + 1
            }
        });
    }
}
