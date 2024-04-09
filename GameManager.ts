import TechnoMage from "./classes/Technomage.ts"
import SpaceSoldier from "./classes/SpaceSoldier.ts"
import Solarblade from "./classes/Solarblade.ts"
import Secretagent from "./classes/SecretAgent.ts"
import Primitivewarior from "./classes/Primitivewarior.ts"
import BioIngener from "./classes/BioIngener.ts"

import Item from "./item/item.ts"
import rez from "./item/rez.ts"
import healer from "./item/healer.ts"
import mana from "./item/quantum.ts"

import Character from "./character/Character.ts";

export default class GameManager{
    protected characters : Character[] = []
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
        this.characters = temp
        if(this.characters[0] instanceof TechnoMage){
            this.characters[0].specialAction([this.characters[1]])
        }
        console.log(this.characters[1]._currentHitPoint)
        if(this.characters[1] instanceof BioIngener){
            this.characters[1].specialAction([this.characters[1]])
        }
        if(this.characters[2] instanceof Secretagent){
            this.characters[2].specialAction()
            console.log(this.inventory)
        }
        console.log(this.characters[1]._currentHitPoint)
        this.inventory[1].use([this.characters[1]])
        console.log(this.characters[1]._currentHitPoint)
        console.log(this.inventory)
        console.log('suceed !')
    }

    public addItem(name : string) {
        this.inventory.forEach(item => {
            if (item.name === name) {
                item.quantity = item.quantity + 1
            }
        });
    }
}
