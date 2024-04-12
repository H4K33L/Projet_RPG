import { Carac } from "./display.ts";


export class Perso {
    speed : number
    name : string
    actionValue : number = 10000
    alive = true
    constructor(name : string,speed : number) {
        this.name = name
        this.speed = speed
        this.AV()
    }

    AV = () => {
        this.actionValue = Math.round(10000/this.speed)
    }
}

export class TurnOrder {
    carac : Carac[]
    constructor(carac : Carac[]) {
        this.carac = carac
        this.tri()
    }

    Display() {
        for (const i of this.carac) {
            console.log(`${i.name} s :${i.speed}, av : ${i.actionValue}`)
        }
    }

    NextAction() {
        //const nextAction = new Carac("J",100,"",100)
        const nextAction = new Carac([""],0,"",0)
        
        Object.assign(nextAction,this.carac[0])
        nextAction.AV()
        nextAction.actionValue *= 2
        this.carac.push(nextAction)
        this.tri()
    }

    Action() : boolean {

        this.isAlive()
        const base = this.carac[0].actionValue
        const av = this.carac.slice(1)

        for (const i of av) {
            i.actionValue = Math.max(0,i.actionValue-base)
        }
        this.preventEqualAV()
        this.carac[0].actionValue = 0
        this.carac = this.carac.slice(0,1).concat(av)    
        this.NextAction()

        this.carac = this.carac.slice(1)
        return true
    }

    tri = (s = this.carac) => {
        let c : Carac
        for (let i = 0; i < s.length-1; i++) {
            let min = s[i].actionValue
            let id = i
            for (let f = i; f < s.length; f++) {
                if (s[f].actionValue < min) {
                    min = s[f].actionValue
                    id = f
                }
                }
            c = s[id]
            s[id] = s[i]
            s[i] = c
        }
        return s
    }

    isAlive() {
        for (const i of this.carac) {
            if (!i.alive) {
                this.carac.splice(this.carac.indexOf(i),1)
            }
        }
    }

    preventEqualAV() {
        const numbers : number[] = []
        for (const i of this.carac) {
            if (!numbers.includes(i.actionValue)) {
                numbers.push(i.actionValue)
            } else {
                i.actionValue++
                numbers.push(i.actionValue)
            }
        }
    }
}
/*
const zombie = new Perso("zombie",50)
const squell = new Perso("squel",100)
const heros = new Perso("Heros",130)

let mage = new Perso("🧙",100,)
let ninja = new Perso("🥷",120)
let elfe = new Perso("🧝",150)
let vampire = new Perso("🧛",130)
let roi = new Perso("🫅",90)
let orc = new Perso("🧌",10)
const Game = new TurnOrder([mage,ninja,elfe,vampire,roi,orc])


console.log("-----------------")
let a : boolean
do {
    a = Game.Action()
} while (a)
*/