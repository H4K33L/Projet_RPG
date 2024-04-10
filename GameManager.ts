import Item from "./item/item.ts"
import rez from "./item/rez.ts"
import healer from "./item/healer.ts"
import mana from "./item/quantum.ts"

import Character from "./character/Character.ts";

import SelectCharcter from "./displays/SelectCharacter.ts";
/*
import TechnoMage from "./classes/Technomage.ts"
import Secretagent from "./classes/SecretAgent.ts"
import BioIngener from "./classes/BioIngener.ts"
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

    public async startGame() {
        const characterSelection = new SelectCharcter()
        await characterSelection.choseCharacters()

        /*
        if(this.characters[0] instanceof TechnoMage){
            this.characters[0].specialAction([this.characters[1]])
        }
        console.log(this.characters[1].currentHitPoint)
        if(this.characters[1] instanceof BioIngener){
            this.characters[1].specialAction([this.characters[1]])
        }
        if(this.characters[2] instanceof Secretagent){
            this.characters[2].specialAction()
            console.log(this.inventory)
        }
        console.log(this.characters[1].currentHitPoint)
        this.inventory[0].use([this.characters[1]])
        console.log(this.characters[1].currentHitPoint)
        console.log(this.inventory)
        console.log('suceed !')
        */
    }

    public addItem(name : string) {
        this.inventory.forEach(item => {
            if (item.name === name) {
                item.quantity = item.quantity + 1
            }
        });
    }
}
