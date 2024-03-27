import {Perso,TurnOrder} from "./actionValue.ts"

const zombie = new Perso("zombie",50)
const squell = new Perso("squel",100)
const heros = new Perso("Heros",130)

const Game = new TurnOrder([zombie,squell,heros])


/*let a : boolean |null
do {
    a = Game.Action()
        zombie.alive = false
} while (a)
*/

class Menu {
    choice1 : string
    choice2 : string
    choice3 : string
    des1 : string
    des2 : string
    des3 : string
    constructor(c1 :string,c2 : string,c3 : string,d1 :string,d2 : string,d3 : string) {
        this.choice1 = c1
        this.choice2 = c2
        this.choice3 = c3
        this.des1 = d1
        this.des2 = d2
        this.des3 = d3
    }
}

class Carac {
    emoji : string
    hpmax : number
    hp : number
    name : string
    constructor(emoji : string,hpmax : number,name : string) {
        this.emoji = emoji
        this.hpmax = this.hp = hpmax
        this.name = name
    }
}

let mage = new Carac("🧙",100,"Primitive-Warrior")
let ninja = new Carac("🥷",100,"mage")
let elfe = new Carac("🧝",100,"elfe")
let vampire = new Carac("🧛",100,"vampire")
let roi = new Carac("🫅",100,"roi")
let orc = new Carac("🧌",100,"orc")
let team = [mage,ninja,elfe]
let enemy = [vampire,roi,orc]

let menu = new Menu("Items 💼","Attaque ⚔️","Special 🪄","","Description de l'attaque","Description de l'attaque")

const Display = (team : Carac[], enemy : Carac[],action : number,menu : Menu) => {
    let top = line(52," ")
    let bot = " "
    let mid = line(52," ")
    let topleft,topmid,topright = top
    let midleft,midmid,midright = mid
    let botleft,botmid,botright = bot




    let caracs = team.concat(enemy)
    caracs.push(caracs[0])
    console.log(`┌${line(159,"─")}┐`)
    console.log(`│  ┌${line(21,"─")}┐${line(134," ")}│`)
    console.log(`│  │${middle(21,caracs[0].name)}│${line(134," ")}│`)
    console.log(`│  └${line(21,"─")}┘${line(134," ")}│`)
    for (let i = 1; i < 4; i++) {
        console.log(`│  ┌${line(21,"─")}┐${line(134," ")}│`)
        console.log(`│  │${middle(21,caracs[i*2-1].name)}│${line(25," ")}${team[i-1].emoji}${line(83," ")}${enemy[i-1].emoji}${line(22," ")}│`)
        console.log(`│  └${line(21,"─")}┘${line(9," ")}┌${line(33,"─")}┐${line(49," ")}┌${line(33,"─")}┐${line(6," ")}│`)
        console.log(`│  ┌${line(21,"─")}┐${line(9," ")}│${displayHP(team[i-1])}${line(49," ")}│${displayHP(enemy[i-1])}${line(6," ")}│`)
        console.log(`│  │${middle(21,caracs[i*2].name)}│${line(9," ")}└${line(33,"─")}┘${line(49," ")}└${line(33,"─")}┘${line(6," ")}│`)
        console.log(`│  └${line(21,"─")}┘${line(134," ")}│`)
    }
    console.log(`│${line(159," ")}│`)
    console.log(`├${line(52,"─")}┬${line(53,"─")}┬${line(52,"─")}┤`)
    switch (action) {
        case 0 :{
            topleft = `┌${line(46,"─")}┐`
            midleft = "│"
            botleft = `└${line(46,"─")}┘`
            break
        }
        case 1 :{
            topmid = `┌${line(47,"─")}┐`
            midmid = "│"
            botmid = `└${line(47,"─")}┘`
            break
        }
        case 2 :{
            topright = `┌${line(46,"─")}┐`
            midright = "│"
            botright = `└${line(46,"─")}┘`
            break
        }
    }


}

const line = (n : number,str : string) => {
    let result = ""
    for (let i = 0; i < n; i++) {
        result += str
    }
    return result
}

const middle = (space : number, str : string) => {
    let emptyness = ""
    let remainder = ""
    let size = (space - str.length)%2
    for (let i = 0; i < size; i++) {
        remainder += " "
    }
    for (let i = 0; i < Math.round(space-str.length)/2-size;i++) {
        emptyness += " "
    }
    return emptyness + remainder + str + emptyness
}

const displayHP = (carac : Carac) => {
    let hp = carac.hp
    let hpmax = carac.hpmax
    let hpBar = ""
    if (hp == 0) {
        hpBar = "\x1b[31m" + "████████████████████" + "\x1b[0m"
    } else if (hp == hpmax) {
        hpBar = "\x1b[32m" + "████████████████████" + "\x1b[0m"
    } else {
        for (let i = 0; i < Math.floor(hp/5); i++) {
            hpBar += "\x1b[32m" + "█" + "\x1b[0m"
        }
        for (let i = 0; i < Math.ceil((hpmax-hp)/5); i++) {
            hpBar += "\x1b[31m" + "█" + "\x1b[0m"
        }
    }
    hpBar += `│${middle(12,`${carac.hp}/${carac.hpmax} 💗`)}│`
    return hpBar

}

mage.hp -= 40

Display(team,enemy,0,menu)