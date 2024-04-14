import { TurnOrder} from "./actionValue/actionValue.ts"
import { readKeypress } from "https://deno.land/x/keypress@0.0.11/mod.ts";
import Character from "./character/Character.ts";
import SpaceSoldier from "./classes/SpaceSoldier.ts"
import BioIngener from "./classes/BioIngener.ts"
import GameManager from "./GameManager.ts"
import Item from "./item/item.ts"

/*let a : boolean |null
do {
    a = Game.Action()
        zombie.alive = false
} while (a)
*/

export default class Fight {
    name : string
    choices : string[]
    des1 : string
    des2 : string
    des3 : string
    team :  Array<Character>
    enemy :  Array<Character>
    turnOrder : TurnOrder
    action = 0
    bossNames = ["Young Star Dragon"]
    itemPage = 0
    start : boolean
    constructor(name : string,choices : string[],d1 :string,d2 : string,d3 : string,team :  Array<Character>,enemy :  Array<Character>) {
        this.name = name
        this.choices = choices
        this.des1 = d1
        this.des2 = d2
        this.des3 = d3
        this.team = team
        this.enemy = enemy
        this.turnOrder = new TurnOrder(this.team.concat(this.enemy))
        this.start = true
    }
    middle = (space : number, str : string) => {
        let emptyness = ""
        let remainder = ""
        const size = (space - str.length)%2
        for (let i = 0; i < size; i++) {
            remainder += " "
        }
        for (let i = 0; i < Math.round(space-str.length)/2-size;i++) {
            emptyness += " "
        }
        return emptyness + remainder + str + emptyness
    }
    displayHP = (carac : Character) => {
        const hp = carac._currentHitPoint*(100/carac._maximumHitPoint)
        let hpBar = ""
        for (let i = 0; i < Math.floor(hp*0.2); i++) {
            hpBar += "\x1b[32m" + "█" + "\x1b[0m"
        }
        for (let i = 0; i < Math.ceil((100-hp)*0.2); i++) {
            hpBar += "\x1b[31m" + "█" + "\x1b[0m"
        }
        hpBar += `${this.middle(12,`${carac._currentHitPoint}/${carac._maximumHitPoint} 💗`)}`
        return hpBar
    }
    line = (n : number,str : string) => {
        let result = ""
        for (let i = 0; i < n; i++) {
            result += str
        }
        return result
    }

    DisplayFight() {
        console.clear()
        const fillList = (list : string[][] | string[],length : number) => {
            if (list.length == length) {
                return list
            }
            let newList : string[]
            if (typeof list[0] == "object") {
                if (list.length < length) {
                    for (let i = list.length; i < length; i++) {
                        newList = []
                        for (const _f of list[0]) {
                            newList.push(line(list[0][0].length," "))
                        }
                        list.push(newList)
                    }
                }
            } else {
                if (list.length < length) {
                    for (let i = list.length; i < length; i++) {
                        list.push(line(list[0].length," "))
                    }
                }
            }
            return list
        }
        const line = (n : number,str : string) => {
            let result = ""
            for (let i = 0; i < n; i++) {
                result += str
            }
            return result
        }

        const outline = (content : string,length : number) => {
            return [`┌${line(length,"─")}┐`,`│${this.middle(length,content)}│`,`└${line(length,"─")}┘`]
        }
        const order = () => {
            let line : string[]
            const displayOrder : string[][] = []
            for (const i of this.turnOrder.carac){
                line = []
                line = outline(i.name,21)
                if (this.team.includes(i)) {
                    line[0] = "\x1b[34m" + line[0] + "\x1b[0m"
                    line[1] = "\x1b[34m" + "|" + "\x1b[0m" + line[1].slice(1,line[1].length-1) + "\x1b[34m" + "|" + "\x1b[0m"
                    line[2] = "\x1b[34m" + line[2] + "\x1b[0m"
                } else if (this.enemy.includes(i)) {
                    line[0] = "\x1b[31m" + line[0] + "\x1b[0m"
                    line[1] = "\x1b[31m" + "|" + "\x1b[0m" + line[1].slice(1,line[1].length-1) + "\x1b[31m" + "|" + "\x1b[0m"
                    line[2] = "\x1b[31m" + line[2] + "\x1b[0m"
                }
                displayOrder.push(line)
            }
            return displayOrder
        }
        const team = (groupe : Character[]) => {
            const displayTeam : string[][] = []
            let perso : string[]
            for (const i of groupe) {
                perso = []
                for (const f of i.emoji) {
                    perso.push(this.middle(34,f))
                }
                perso = perso.concat(outline(this.displayHP(i),32))
                displayTeam.push(perso)
            }
            return displayTeam
        }
        const boss = (boss : Character) => {
            const displayBoss : string[][] = []
            let bossStr : string[] = []
            for (let i = 0; i < 6; i++) {
                bossStr.push(line(34," "))
            }
            bossStr.push(this.middle(34,boss.emoji[0]))
            displayBoss.push(bossStr)
            bossStr = []
            for (let i = 1; i < 5;i++) {
                bossStr.push(this.middle(34,boss.emoji[i]))
            }
            bossStr = bossStr.concat(outline(this.displayHP(boss),32))
            displayBoss.push(bossStr)
            bossStr = []
            for (let i = 0; i < 7; i++) {
                bossStr.push(line(34," "))
            }
            displayBoss.push(bossStr)
            return displayBoss
        }
        const orderStr = fillList(order(),7)
        let newOrder : string[] = []
        for (const i of orderStr) {
            for (const f of i) {
                newOrder = newOrder.concat(f)
            }
        }
        let enemyStr : string[][] | string[]
        if (this.bossNames.includes(this.enemy[0].name)){
            enemyStr = boss(this.enemy[0])
        } else {
            enemyStr = fillList(team(this.enemy),3)
        }
        const teamStr = team(this.team)
        fillList(team(this.enemy),3)
        let str : string
        console.log(`┌${line(149,"─")}┐`)
        for (let i = 0; i < 3;i++) {
            for (let f = 0;f < 7;f++) {
                str = ""
                let a = 0
                if (teamStr.length > enemyStr.length) {
                    a = teamStr[i].length
                } else {
                    a = enemyStr[i].length
                }
                if (i*a+f >= newOrder.length) {
                    str += line(23," ")
                } else {
                    str += newOrder[i*a+f]
                }
                str += line(9," ")
                str += teamStr[i][f]
                str += line(40," ") + enemyStr[i][f]
                console.log(`│${str}${line(9," ")}│`)
            }
        }
        console.log(`├${line(49,"─")}┬${line(49,"─")}┬${line(49,"─")}┤`)
        let [topleft,topmid,topright] = [line(45," "),line(45," "),line(45," ")]
        let [midleft,midmid,midright] = [" "," "," "]
        let [botleft,botmid,botright] = [line(45," "),line(45," "),line(45," ")]
        switch (this.action) {
            case 0 :{
                topleft = `┌${line(43,"─")}┐`
                midleft = "│"
                botleft = `└${line(43,"─")}┘`
                break
            }
            case 1 :{
                topmid = `┌${line(43,"─")}┐`
                midmid = "│"
                botmid = `└${line(43,"─")}┘`
                break
            }
            case 2 :{
                topright = `┌${line(43,"─")}┐`
                midright = "│"
                botright = `└${line(43,"─")}┘`
                break
            }
        }
        console.log(`│  ${topleft}  │  ${topmid}  │  ${topright}  │`)
        console.log(`│  ${midleft}${this.middle(43,this.choices[0])}${midleft}  │  ${midmid}${this.middle(43,this.choices[1])}${midmid}  │  ${midright}${this.middle(43,this.choices[2])}${midright}  │`)
        console.log(`│  ${midleft}${line(43," ")}${midleft}  │  ${midmid}${line(43," ")}${midmid}  │  ${midright}${line(43," ")}${midright}  │`)
        console.log(`│  ${midleft}${this.middle(43,this.des1)}${midleft}  │  ${midmid}${this.middle(43,this.des2)}${midmid}  │  ${midright}${this.middle(43,this.des3)}${midright}  │`)
        console.log(`│  ${midleft}${line(43," ")}${midleft}  │  ${midmid}${line(43," ")}${midmid}  │  ${midright}${line(43," ")}${midright}  │`)    
        console.log(`│  ${botleft}  │  ${botmid}  │  ${botright}  │`)
        console.log(`└${line(49,"─")}┴${line(49,"─")}┴${line(49,"─")}┘`)
    }
    Action = async () => {
        if (this.checkSideAlive(GameManager.instance.characters) || this.checkSideAlive(this.enemy)) {
            return false
        }
        let actingCharacter : Character
        if (this.presentInList(this.turnOrder.carac[0],this.enemy)) {
            actingCharacter = this.enemy[this.find(this.turnOrder.carac[0],this.enemy)]
        } else {
            actingCharacter = GameManager.instance.characters[this.find(this.turnOrder.carac[0],GameManager.instance.characters)]
        }
        if (!actingCharacter.alive) {
            this.turnOrder.Action(this.team.concat(this.enemy))
            this.DisplayFight()
            return true
        }
        if (this.start) {
            this.turnOrder.Action(this.team.concat(this.enemy))
            this.start = false

            this.DisplayFight()

            return true
        } 
        //if (this.presentInList(this.turnOrder.carac[0],this.enemy))
        if (this.presentInList(this.turnOrder.carac[0],this.enemy)) {
            await GameManager.instance.timeout(1000)
            this.enemyAct()
            this.DisplayFight()
            await GameManager.instance.timeout(1000)
            this.turnOrder.Action(this.team.concat(this.enemy))
            this.DisplayFight()
            return true
        }
        const key = await this.input()
        if (key == "right" && this.action < 2) {
            this.action++
        } else if (key =="left" && this.action > 0) {
            this.action--
        } else if (key == "c") {
            Deno.exit()
        } else if (key == "return") {
            await this.teamAct(this.choices[this.action])
            this.turnOrder.Action(this.team.concat(this.enemy))
        }
        this.DisplayFight()
        return true

    }
    
    teamAct = async (input : string) => {
        let item : Item
        let target : Character[]
        if (input == "Special 🪄" && !(this.turnOrder.carac[0] instanceof SpaceSoldier)) {
            if (this.turnOrder.carac[0].AOESpecialAction) {
                GameManager.instance.characters[this.find(this.turnOrder.carac[0],GameManager.instance.characters)].specialAction(this.enemy)
            } else {
                target = await this.chooseTarget(input)
                GameManager.instance.characters[this.find(this.turnOrder.carac[0],GameManager.instance.characters)].specialAction(target)
            }
        } else if (input == "Attaque ⚔️") {
            target = await this.chooseTarget(input)
            target[0].arm(this.turnOrder.carac[0].kineticStrike,"K")
        } else if (input == "Items 💰") {
            item = GameManager.instance.inventory[this.find(await this.chooseItem(),GameManager.instance.inventory)]
            target = await this.chooseTarget(input)
            item.use(target)
        }
    }

    enemyAct = () => {
        let rng = Math.random()*10
        let target : Character
        if (rng < 2) {
            target = this.findLowestHp()
        } else {
            target = GameManager.instance.characters[Math.floor(Math.random()*3)]
        }
        if (!this.bossNames.includes(this.turnOrder.carac[0].name)) {
            target.arm(this.turnOrder.carac[0].kineticStrike,"K")
        } else {
            rng = Math.random()*10
            if (rng < 7) {
                target.arm(this.turnOrder.carac[0].kineticStrike,"K")
            } else {
                this.turnOrder.carac[0].specialAction(GameManager.instance.characters)
            }
        }
    }

    findLowestHp = () => {
        let min = 1000
        let chara = GameManager.instance.characters[0]
        for (const i of GameManager.instance.characters) {
            if (i._currentHitPoint < min) {
                chara = i
                min = i._currentHitPoint
            }
        }
        return chara
    }

    input = async () => {
        for await (const keypress of readKeypress()) {
            return keypress.key
        }
    }

    find(target : Character | string,list  : Character[] | Item[]) {
        let name : string
        if (target instanceof Character) {
            name = target.name
        } else {
            name = target
        }
        for (let i = 0; i < list.length;i++) {
            if (name == list[i].name) {
                return i
            }
        }
        return 0
    }
    private presentInList(target : Character,list : Character[]) {
        for (const i of list) {
            if (target.name == i.name) {
                return true
            }
        }
        return false
    }

    chooseTarget = async (input : string) =>  {
        const saveChoices = this.choices
        const saveDes = [this.des1,this.des2,this.des3]
        if (this.turnOrder.carac[0].AOESpecialAction && input == "Special 🪄") {
            return this.enemy
        }
        let result : Character[]
        let listCharacters : Character[]
        if ((this.turnOrder.carac[0] instanceof BioIngener && input == "Special 🪄") || input == "Items 💰") {
            listCharacters = GameManager.instance.characters
        } else {
            listCharacters = this.enemy
        }
        this.choices = []
        for (let i = 0;i < 3;i++) {
            if (i < listCharacters.length) {
                this.choices.push(listCharacters[i].name)
                this[`des${i+1}`] = this.line(6," ") + this.displayHP(listCharacters[i]) + this.line(5," ")
            } else {
                this.choices.push("")
                this[`des${i+1}`] = this.line(43," ")
            }
        }
        while (true) {
            this.DisplayFight()
            const key = await this.input()
            if (key == "right" && this.action < 2) {
                this.action++
            } else if (key =="left" && this.action > 0) {
                this.action--
            } else if (key == "c") {
                Deno.exit()
            } else if (key == "return") {
                if (listCharacters[this.action] !== undefined) {
                    result = [listCharacters[this.action]]
                    break
                }
            }
        }
        this.choices = saveChoices
        this.des1 = saveDes[0],this.des2 = saveDes[1],this.des3 = saveDes[2]
        return result
    }

    chooseItem = async () => {
        let result : string
        const saveChoices = this.choices
        const saveDes = [this.des1,this.des2,this.des3]
        const inventory = GameManager.instance.inventory
        while (true) {
            this.choices = ["Other Page"]
            this.des1 = "go to the other items"
            this.choices.push(inventory[this.itemPage].name)
            this.choices.push(inventory[this.itemPage+1].name)
            this.des2 = inventory[this.itemPage].useType + " : " + inventory[this.itemPage].quantity
            this.des3 = inventory[this.itemPage+1].useType + " : " + inventory[this.itemPage+1].quantity
            this.DisplayFight()
            const key = await this.input()
            if (key == "right" && this.action < 2) {
                this.action++
            } else if (key =="left" && this.action > 0) {
                this.action--
            } else if (key == "c") {
                Deno.exit()
            } else if (key == "return") {
                if (this.choices[this.action] == "Other Page") {
                    this.switchItemPage()
                    continue
                } else {
                    result = this.choices[this.action]
                    break
                }
            }
        }
        this.choices = saveChoices
        this.des1 = saveDes[0],this.des2 = saveDes[1],this.des3 = saveDes[2]
        return result        
    }

    emptyList = () => {
        for (let i = 0; i < this.enemy.length;i++) {
            if (this.enemy[i]._currentHitPoint == 0) {
                delete this.enemy[i]
            }
        }
    }

    checkSideAlive = (list : Character[]) => {
        for (const _i of list) {
            if (_i.alive) {
                return false
            }
        }
        return true
    }
    switchItemPage = () => {
        if (this.itemPage == 0) {
            this.itemPage = 2
        } else if (this.itemPage == 2) {
            this.itemPage = 0
        }
    }

}