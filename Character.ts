export default abstract class Character {
    protected kineticStrike : number
    protected energeticalStrike : number
    protected KAC : number
    protected EAC : number
    protected speed : number
    protected readonly maximumHitPoint : number
    protected currentHitPoint : number
    //
    public get _currentHitPoint() {
        return this.currentHitPoint
    }
    //
    protected _name : string
    public get name() {
        return this._name
    }
    protected _alive : boolean
    public get alive() {
        return this._alive
    }
    protected _emoji : string
    public get emoji() {
        return this._emoji
    }
    
    private _actionValue : number
    public get actionValue() {
        return this._actionValue
    }
    public set actionValue(Value){
        this._actionValue = Math.min(0,this._actionValue-Value)
    }

    protected constructor(name : string, kineticStrike : number,enrgeticalStrike : number,
                KAC : number,EAC : number,speed : number,
                maximumHitPoint : number,emoji : string,){
        this._name = name
        this.kineticStrike = kineticStrike
        this.energeticalStrike = enrgeticalStrike
        this.KAC = KAC
        this.EAC = EAC
        this.speed = speed
        this.maximumHitPoint = maximumHitPoint
        this.currentHitPoint = maximumHitPoint
        this._alive = true
        this._emoji = emoji
    }

    public arm(value : number, type : string){
        if (type === "K") {
            this.currentHitPoint = Math.max(0, this.currentHitPoint - Math.max(0, value - this.KAC))
        } else {
            this.currentHitPoint = Math.max(0, this.currentHitPoint - Math.max(0, value - this.EAC))
        }
        if (this.currentHitPoint === 0){
            this._alive = false
        }
    }

    public heal(percent : number){
        if (this._alive === true){
            this.currentHitPoint = Math.min(this.maximumHitPoint, this.currentHitPoint + (this.maximumHitPoint*(percent/100)))
        }
    }

    public rez(percent : number){
        if (this._alive === false){
            this.currentHitPoint = Math.min(this.maximumHitPoint, this.currentHitPoint + (this.maximumHitPoint*(percent/100)))
        }
    }

    public attack(targets: Character[]){
        targets.forEach(target => {
            target.arm(this.kineticStrike,'K')
        })
    }

    public AV() {
        this._actionValue = Math.round(10000/this.speed)
    }
}