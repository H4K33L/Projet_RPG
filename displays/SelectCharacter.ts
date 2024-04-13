import TechnoMage from "../classes/TechnoMage.ts"
import SpaceSoldier from "../classes/SpaceSoldier.ts"
import Solarblade from "../classes/SolarBlade.ts"
import Secretagent from "../classes/SecretAgent.ts"
import Primitivewarior from "../classes/PrimitiveWarrior.ts"
import BioIngener from "../classes/BioIngener.ts"

import Character from "../character/Character.ts"

import GameManager from "../GameManager.ts"

import { readKeypress } from "https://deno.land/x/keypress@0.0.11/mod.ts"

/**
 * This class is used to chose the character who be part of the team
 * during the game.
 */
export default class SelectCharcter {
    private userResponse : number = 1

/**
 * This method is used to interact whith the payer to chose te characters.
 */
    public choseCharacters = async() => {
        console.clear()
        let count = 0
        const temp : Character[] = []
        while(count < 3) {
            console.clear()
            this.display(temp)
            const key = await this.input()
            if (key === "return") {
                if(this.userResponse === 3){
                    temp.push(new TechnoMage())
                    count++
                } else if(this.userResponse === 1){
                    temp.push(new SpaceSoldier())
                    count++
                } else if(this.userResponse === 2){
                    temp.push(new Solarblade())
                    count++
                } else if(this.userResponse === 6){
                    temp.push(new Secretagent())
                    count++
                } else if(this.userResponse === 4){
                    temp.push(new Primitivewarior())
                    count++
                } else if(this.userResponse === 5){
                    temp.push(new BioIngener())
                    count++
                }
            } else if (key === "right") {
                this.userResponse++
                if (this.userResponse === 7) {
                    this.userResponse = 1
                }
            } else if (key === "left") {
                this.userResponse--
                if (this.userResponse === 0) {
                    this.userResponse = 6
                }
            } else if (key === "up") {
                this.userResponse -= 2
                if (this.userResponse <= 0) {
                    this.userResponse = 6
                }
            } else if (key === "down") {
                this.userResponse += 2
                if (this.userResponse > 6) {
                    this.userResponse = 1
                }
            } else if (key === "c") {
                Deno.exit()
            }
        }
        console.clear()
        this.display(temp)
        GameManager.instance.characters = temp
    }

/**
 * This method is used to get the user entry (a keypress) and return it.
 * @returns the user keypress
 */
    private input = async () => {
        for await (const keypress of readKeypress()) {
            return keypress.key
        }
    }

/**
 * This method print the character selection, the method take an array of character in argument to add it
 * in the sleection print. The selection have an arrow to help the player to see what character he is selectioning.
 * @param characters the array of character selected by the player (posibli empty).
 */
    private display = (characters : Character[]) => {
        console.log("┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐")
        console.log("│                     ┌────────────────────────────────────────────────────┬────────────────────────────────────────────────────┐                     │")
        console.log("│                     │   ######           Space-Soldier          ######   │   ######            Solarblade            ######   │                     │")
        console.log("│                     │               \\_\\   HP : 100                       │                 ║   HP : 100                       │                     │")
        if (this.userResponse === 1) {
            console.log("│                 ==> │               (°°)  Speed : 100                    │               ☺ ║   Speed : 80                     │                     │")
        } else if (this.userResponse === 2) {
            console.log("│                     │               (°°)  Speed : 100                    │               ☺ ║   Speed : 80                     │ <==                 │")
        } else {
            console.log("│                     │               (°°)  Speed : 100                    │               ☺ ║   Speed : 80                     │                     │")
        }
        console.log("│                     │               ╧╤═▬  Kinetic Strique : 35           │               ♦=╞┐ Kinetic Strique : 30            │                     │")
        console.log("│                     │               \\/\\/  KAC : 25 | EAC : 0             │               |\\    KAC : 30 | EAC : 0             │                     │")
        console.log("│                     │Special : none                                      │Special : deal 8 damage to all enemies.             │                     │")
        console.log("│                     ├────────────────────────────────────────────────────┼────────────────────────────────────────────────────┤                     │")
        console.log("│                     │   ######            Technomage            ######   │   ######         Primitive-Warior         ######   │                     │")
        console.log("│                     │                  ☼   HP : 60                       │                 +-+Ξ  HP : 100                     │                     │")
        if (this.userResponse === 3) {
            console.log("│                 ==> │                 _☺_  Speed : 50                    │                 |☺|    Speed : 75                  │                     │")
        } else if (this.userResponse === 4) {
            console.log("│                     │                 _☺_  Speed : 50                    │                 |☺|    Speed : 75                  │ <==                 │")
        } else {
            console.log("│                     │                 _☺_  Speed : 50                    │                 |☺|    Speed : 75                  │                     │")
        }
        console.log("│                     │                 |:=¤ Kinetic Strique : 20          │                  ♥     Kinetic Strique : 40        │                     │")
        console.log("│                     │                 /:\\   KAC : 10 | EAC : 30          │                 / \\   KAC : 15 | EAC : 0           │                     │")
        console.log("│                     │Special: can use Quantum to make Energetical Strique│Special : execute an atack deal 39 Kinetic Damages  │                     │")
        console.log("│                     │        Quantum : 100 | Energetical strique : 30    │but the Primitive Warior lose 20 HP                 │                     │")
        console.log("│                     ├────────────────────────────────────────────────────┼────────────────────────────────────────────────────┤                     │")
        console.log("│                     │   ######            BioIngener            ######   │   ######           Secret Agent           ######   │                     │")
        console.log("│                     │                     HP : 60                        │                 ⣿⡟⢻⣿  HP : 60                      │                     │")
        if (this.userResponse === 5) {
            console.log("│                 ==> │                ☺ ~  Speed : 50                     │                 ⣿⠁⠁⢻  Speed : 130                  │                     │")
        } else if (this.userResponse === 6) {
            console.log("│                     │                ☺ ~  Speed : 50                     │                 ⣿⠁⠁⢻  Speed : 130                  │ <==                 │")
        } else {
            console.log("│                     │                ☺ ~  Speed : 50                     │                 ⣿⠁⠁⢻  Speed : 130                  │                     │")
        }
        console.log("│                     │               /|\\   Kinetic Strique : 25           │                 ⣿⡆⠀⣿  Kinetic Strique : 25         │                     │")
        console.log("│                     │               ===   KAC : 10 | EAC : 10            │                 ⣿⢠⡇⢿  KAC : 20 | EAC : 0           │                     │")
        console.log("│                     │Special : He can heal 25% HP to anyone.             │Special : he/she can steal an object                │                     │")
        console.log("├─────────────────────┴──────────────────────────────┬─────────────────────┴──────────────────────────────┬─────────────────────┴─────────────────────┤")

        const temp : string[][]= []
        characters.forEach(character => {
            temp.push(character.emoji)
        });
        temp.length
        for (let j = 0 ; j < 4; j++) {
            let output = "│                        "
            for (let i = 0 ; i < 3 ; i++) {
                try {
                    output += temp[i][j]
                } catch {
                    output += "    "
                }
                if ( i != 2) {
                    output += "                        │                        "
                } else {
                    output += "               │"
                }
            }
            console.log(output)
        }
        console.log("└────────────────────────────────────────────────────┴────────────────────────────────────────────────────┴───────────────────────────────────────────┘")
    }
}