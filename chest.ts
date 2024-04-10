/** 
 * besoin d'une table de loot avec le % de chance de drop l'objets 
 * - Potion 🧪 40%
 * - Morceau d'étoile ✨ 25%
 * - Demi-étoile 🌟 10%
 * - Ether 💊 15%
 * mimic ou mimique 10% (15 dégat)
 * 
 * puis afficher un récapitulatif des objets gagner 
 *      
 */


/** random loot :
 * - random loot utilisant la tableLoot
 * - fonction utilisant 2 fois le rand
 * - faire un message disant quel objets choisi pour ensuite le mettre dans un message disant ce qui a été obtenu
 */

 /**fonction rencontre mimique :
  * - si mimic looter :
  *   - autre loot annuler
  *   - 15 dégat prit 
 */

import item from "./item/item.ts";
import Character from "./character/Character.ts";

import GameManager from "./GameManager";
class chest {

    constructor() {
        const rand = Math.floor(Math.random() * (100 - 0 + 1) + 0)
        if (0 < rand && rand <= 40) {// 40% d'obtenir une potion
            GameManager.instance.addItem("Potion 🧪")
            this.chest()
        } else if (40 < rand && rand <= 65) {// 25% d'obtenir un fragment d'étoile
            GameManager.instance.addItem("Morceau d'étoile ✨")
            this.chest()
        } else if (65 < rand && rand <= 80) {// 15% d'obtenir un éther
            GameManager.instance.addItem("Ether 💊")
            this.chest()
        } else if (80 < rand && rand <= 90) {// 10% d'obtenir une demi-étoile
            GameManager.instance.addItem("Demi-étoile 🌟")
            this.chest()
        } else if (90 < rand && rand <= 100) {// 10% d'obtenir une attaque de mimic
            GameManager.instance.characters.forEach(caracter => {
                caracter.arm(15,"K")
            });
            this.mimic()
        }
    }
    chest() {
        const title = ["*******************************************************************************",
            "                          .=\"\"_;=.                                             ",
            "                       ,-\"_,=\"\"     `\"=.\"                                      ",
            "                       \"=._o`\"-._        \"=.                                  ",
            "                           `\"=._o`\"=._      _`\"=._                             ",
            "                                :=._o \"=._.\"_.-=\"'\"=.                          ",
            "                         __.--\" , ; `\"=._o.\" ,-\"\"\"-._ \".                       ",
            "                      ._\"  ,. .` ` `` ,  `\"-._\"-._   \". '                      ",
            "                      |o`\"=._` , \"` `; .\". ,  \"-._\"-._; ;                      ",
            "                      | ;`-.o`\"=._; .\" ` '`.\"\` . \"-._ /                       ",
            "                      | ;`-.o`\"=._; .\" ` '`.\"\` . \"-._ /                       ",
            "                      |o;    `\"-.o`\"=._``  '` \" ,__.--o;                       ",
            "                      | ;     (#) `-.o `\"=.`_.--\"_o.-; ;                       ",
            "____/______/______/___|o;._    \"      `\".o|o_.--\"    ;o;____/______/______/____",
            "/______/______/______/_\"=._o--._        ; | ;        ; ;/______/______/______/_",
            "____/______/______/______/__\"=._o--._   ;o|o;     _._;o;____/______/______/____",
            "/______/______/______/______/____\"=._o._; | ;_.--\"o.--\"_/______/______/______/_",
            "____/______/______/______/______/_____\"=.o|o_.--\"\"___/______/______/______/____",
            "/______/______/______/______/______/______/______/______/______/______/______/_",
            "*******************************************************************************" ]
        title.forEach(line => {
            console.log(line)
        });
    }

    mimic() {
        const title = ["*******************************************************************************",
            "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀             ⠀⠀⠀⠀⠀⠀⠀⠿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿                      ",
            "⠀⠀⠀⠀⠀⠀⠀                            ⣀⣀⣤⣤⠀⣉⠑⠀⠠⣤⣤⣤⣤⣤⠀⠀⠚⢉⠀⡀⠀⠀⠀             ",
            "⠀⠀                            ⣠⣴⣶⣶⠆⢀⣈⡉⠛⠀⠉⠀⠓⠒⠙⠛⠛⠛⠃⠒⠒⠀⠉⠠⠿⠦⠀⠀            ",
            "                            ⠀⣸⣿⣿⡿⠋⣠⡿⠋⠀⢸⣿⠏⢸⣿⣿⠁⢻⣿⠃⠈⢿⡿⠀⣶⣶⠀⣶⡤⠀           ",
            "⠀                            ⣿⣿⠟⢁⣼⠟⡁⢾⣧⠀⠋⠀⠈⢿⠇⠀⠀⠃⠀⠀⠘⠁⠀⢸⡟⠀⠙⠁⠀            ",
            "⠀                           ⠸⠋⣠⡿⠃⣴⡇⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠁⠀⠀⠀⠀               ",
            "⠀⠀                          ⢰⡟⠀⢀⠀⠉⡀⠀⠀⠀⠀⠀⣰⠀⠀⠀⠀⠀⠀⠀⠀⠀⣆⠀⠀⠀⠀⠀                 ",
            "⠀⠀⠀⠀                       ⠰⣿⡄⣴⣇⠀⣰⣇⠀⣰⣿⡇⠀⣴⡄⠀⢰⣆⠀⢰⣿⡄⢠⣷⡀⠀                 ",
            "⠀⠀⠀                       ⣶⣶⣤⣤⣍⡉⢀⣉⠙⠀⠛⠛⠓⠐⠛⠓⠀⠛⠛⠂⠚⠛⠁⣈⣉⠁⠀                 ",
            "⠀⠀                       ⠀⣿⣿⣿⣿⣿⠁⣼⣿⣿⣿⣿⣿⡇⢸⣿⠟⣿⡇⢸⣿⣿⣿⣿⣿⣿⠀⠀                ",
            "____/______/______/______/ ⣿⣿⣿⣿⣿⠁⣼⣿⣿⣿⣿⣿⡇⢸⣿⠟⣿⡇⢸⣿⣿⣿⣿⣿⣿⠀___/______/____/_",
            "/______/______/___/______/⠀⠸⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⡇⢸⣿⠄⣿⡇⢸⣿⣿⣿⣿⣿⣿⠀/______/______/__",
            "____/______/______/______/ ⠄⠹⣿⡿⠋⠀⠙⢿⣿⣿⣿⣿⡇⢸⣿⣤⣿⡇⢸⣿⣿⣿⣿⣿⠟⠀____/______/_____",
            "/______/______/______/______/ ⠉⠀⠺⠀⣧⡈⢻⣿⣿⣿⣷⣶⣶⣶⣶⣶⣾⣿⣿⣿⡿⠃⣰_/______/____/____",
            "____/______/______/______/______/____ ⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁______/______/______/_",
            "/______/______/______/______/______/______/______/______/______/______/______/_",
            "*******************************************************************************",]
            title.forEach(line => {
                console.log(line)
            });
        }
    }
  



console.log(`you have gain ${item} and ${item}`)

/**  
 * puis afficher un récapitulatif des objets gagner 
*/
