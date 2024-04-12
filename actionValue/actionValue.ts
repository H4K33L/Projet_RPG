import Character from "../character/Character.ts"

export class TurnOrder {
    carac : Character[]
    
    constructor(carac : Character[]) {
        this.carac = carac
        this.tri()
    }

    NextAction() {
        //const nextAction = new Carac("J",100,"",100)
        const nextAction = this.carac[0].deepCopy()
        nextAction.AV()
        nextAction.actionValue *= 2
        this.carac.push(nextAction)
        this.tri()
    }

    Action(allCarac : Character[]) : boolean {
        if (this.carac.length == allCarac.length+1) {
            this.carac = this.carac.slice(1)
        }
        const base = this.carac[0].actionValue
        const av = this.carac.slice(1)

        for (const i of av) {
            i.actionValue = Math.max(0,i.actionValue-base)
        }
        this.preventEqualAV()
        this.carac[0].actionValue = 0
        this.carac = this.carac.slice(0,1).concat(av)
        this.NextAction()
        return true
    }

    tri = (s = this.carac) => {
        let c : Character
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
