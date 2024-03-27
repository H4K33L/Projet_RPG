export class Perso {
    speed : number
    name : string
    actionValue : number
    alive = true
    constructor(name : string,speed : number) {
        this.name = name
        this.speed = speed
        this.AV()
    }

    AV() {
        this.actionValue = Math.round(10000/this.speed)
    }
}

export class TurnOrder {
    carac : Perso[]
    order : Perso[]
    constructor(carac : Perso[]) {
        this.carac = carac
        this.order = this.tri()
    }

    Display() {
        this.tri()
        for (let i of this.carac) {
            console.log(i)
        }
    }


    Action() : boolean {
        this.isAlive()
        let base = this.carac[0].actionValue
        for (let i of this.carac) {
            i.actionValue -= base
        }
        this.carac[0].AV()
        this.carac.push(this.carac[0])
        this.carac = this.carac.splice(1)
        return true
    }
    tri = (s = this.carac) => {
        let c : Perso
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
        for (let i of this.carac) {
            if (!i.alive) {
                this.carac.splice(this.carac.indexOf(i),1)
            }
        }
    }
}
/*
const zombie = new Perso("zombie",50)
const squell = new Perso("squel",100)
const heros = new Perso("Heros",130)

const Game = new TurnOrder([zombie,squell,heros])


Game.Display()
let a : boolean
do {
    a = Game.Action()
} while (a)
*/