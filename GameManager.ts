import Item from "./item/item.ts"
import rez from "./item/rez.ts"
import healer from "./item/healer.ts"
import mana from "./item/quantum.ts"

import Character from "./character/Character.ts"

import SelectCharcter from "./displays/SelectCharacter.ts"
import DisplayGameTitle from "./displays/DisplayGameTitle.ts"

import Chest from "./chest/chest.ts"
import CyberZomby from "./monsters/CyberZomby.ts";
import Fight from "./Fight.ts";

/**
 * This class handel the whole game.
 * 
 * It has :
 * - private  _ characters : array of Character, to represent the player team
 *   getter and setter for it propreties
 * - inventory : array of Item
 * - instance
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

    /**
     * This method is used to create a new instace or acces to a existing one.
     */
    public static get instance() {
        if(this._instace === null){
            this._instace = new GameManager()
        }
        return this._instace
    }

    /**
     * this method Start the game.
     * printing the game title and make the player chose is team.
     * after that it launch the game loop : 
     * - combat 1
     * - chest
     * - combat 2
     * - chest
     * - BOSS
     */
    public async startGame() {
        let a = true
        let enemies : Character[]
        let fight : Fight
        new DisplayGameTitle
        await this.timeout(2000)
        await new SelectCharcter().choseCharacters()
        await this.timeout(2000)
        enemies = [new CyberZomby(),new CyberZomby(),new CyberZomby()]
        fight = new Fight("",["Items 💰","Special 🪄","Attaque ⚔️"],"Choix de l'item","Special Attaque","Description de l'attaque",this.characters,enemies)
        while (a) {
            a = await fight.Action()
        }
        await this.timeout(2000)
        new Chest()
        await this.timeout(2000)

        await this.timeout(1000)
        new Chest()
        await this.timeout(2000)
    }

    /**
     * This method add an item in the inventory.
     * The item name must be given in param.
     * @param name the name of the item add to the inventory.
     */
    public addItem(name : string) {
        this.inventory.forEach(item => {
            if (item.name === name) {
                item.quantity = item.quantity + 1
            }
        });
    }

    /**
     * This method is use to whait somme mili-sec.
     * @param ms nomber of mili-sec to whait
     * @returns the whait
     */
    private timeout (ms : number) {
        return new Promise(res => setTimeout(res,ms));
    }
}