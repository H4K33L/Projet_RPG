export default class Character {
    public name : string
    protected kineticStrike : number
    protected energeticalStrike : number
    protected KAC : number
    protected EAC : number
    protected speed : number
    public actionValue : 0
    protected maximumHitPoint : number
    protected currentHitPoint : number
    public alive : boolean
    public emoji : string
    public specialAction : boolean

    constructor(name : string, kineticStrike : number,enrgeticalStrike : number,
                KAC : number,EAC : number,speed : number,
                maximumHitPoint : number,emoji : string,
                specialAction : boolean){
        this.name = name
        this.kineticStrike = kineticStrike
        this.energeticalStrike = enrgeticalStrike
        this.KAC = KAC
        this.EAC = EAC
        this.speed = speed
        this.maximumHitPoint = maximumHitPoint
        this.currentHitPoint = maximumHitPoint
        this.alive = true
        this.emoji = emoji
        this.specialAction = specialAction
    }

    arm(value : number, type : string){
        if (type === "K") {
            this.currentHitPoint = Math.max(0, this.currentHitPoint - Math.max(0, value - this.KAC))
        } else {
            this.currentHitPoint = Math.max(0, this.currentHitPoint - Math.max(0, value - this.EAC))
        }
        if (this.currentHitPoint === 0){
            this.alive = false
        }
    }

    heal(percent : number){
        if (this.alive === true){
            this.currentHitPoint = Math.min(this.maximumHitPoint, this.currentHitPoint + (this.maximumHitPoint*(percent/100)))
        }
    }

    rez(percent : number){
        if (this.alive === false){
            this.currentHitPoint = Math.min(this.maximumHitPoint, this.currentHitPoint + (this.maximumHitPoint*(percent/100)))
        }
    }

    attack(targets: Character[]){
        targets.forEach(target => {
            target.arm(this.kineticStrike,'K')
        })
    }

    special(targets : Character[]){
        /* epty method who is fill in herited class */
    }
}