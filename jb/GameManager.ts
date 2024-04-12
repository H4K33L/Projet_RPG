import TechnoMage from "./classes/TechnoMage.ts"
import SpaceSoldier from "./classes/SpaceSoldier.ts"
import Secretagent from "./classes/SecretAgent.ts"
import Primitivewarior from "./classes/PrimitiveWarrior.ts"
import BioIngener from "./classes/BioIngener.ts"
import Solarblade from "./classes/SolarBlade.ts"
import Special from "./character/Special.ts"


import CyberZomby from "./monsters/CyberZomby.ts"
import Lost from "./monsters/Lost.ts"
import SpaceGoblin from "./monsters/SpaceGoblin.ts"
import YoungStarDragon from "./monsters/YoungStarDragon.ts"

import Item from "./item/item.ts"
import rez from "./item/rez.ts"
import healer from "./item/healer.ts"
import mana from "./item/quantum.ts"

import Character from "./character/Character.ts";
import Fight from "./display.ts";
export default class GameManager{
    protected _characters : Character[] = []
    public inventory : Item[] = [new healer(50,2,"health","Potion 🧪"),new rez(50,1,20,"rez or heal","Morceau d'étoile ✨"),new rez(100,0,100,"rez or heal","Demi-étoile 🌟"),new mana(1,"mana",30,"Ether 💊")]
    
    private static _instace : GameManager | null = null;

    public static get instance() {
        if(this._instace === null){
            this._instace = new GameManager()
        }
        return this._instace
    }

    public get characters() {
        return this._characters
    }
    private constructor() {}

    public async startGame() {
        // need to be improved
        let count = 0
        const temp : Character[] = []
        while(count < 3) {
            const userResponse = prompt("1=TechnoMage\n2=SpaceSoldier\n3=Solarblade\n4=Secretagent\n5=Primitivewarior\n6=BioIngener\nchoice caracter : ")
            if(userResponse === '1'){
                temp.push(new TechnoMage())
                console.log(temp[count].emoji)
                count++
            } else if(userResponse === '2'){
                temp.push(new SpaceSoldier())
                console.log(temp[count].emoji)
                count++
            } else if(userResponse === '3'){
                temp.push(new Solarblade())
                console.log(temp[count].emoji)
                count++
            } else if(userResponse === '4'){
                temp.push(new Secretagent())
                console.log(temp[count].emoji)
                count++
            } else if(userResponse === '5'){
                temp.push(new Primitivewarior())
                console.log(temp[count].emoji)
                count++
            } else if(userResponse === '6'){
                temp.push(new BioIngener())
                console.log(temp[count].emoji)
                count++
            }
        }
        this._characters = temp
        const enemy = [new YoungStarDragon()]
        const menu = new Fight("",["Items","Special","Attaque"],"Choix de l'item","Special Attaque","Description de l'attaque",this.characters,enemy)
        while (true) {
            await menu.Action()
        }
    }

    public addItem(name : string) {
        this.inventory.forEach(item => {
            if (item.name === name) {
                item.quantity = item.quantity + 1
            }
        });
    }
}
