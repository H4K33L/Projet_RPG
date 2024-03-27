import Character from "../Character.ts"
import Special from "./Special.ts"

export default class Secretagent extends Character implements Special{
    protected _AOESpecialAction : boolean
    public get AOESpecialAction() {
        return this._AOESpecialAction
    }

    constructor(){
        super('Secret Agent',20,0,20,0,130,60,'⣿⡟⢻⣿\n⣿⠁⠁⢻\n⣿⡆⠀⣿\n⣿⢠⡇⢿\n')
        this._AOESpecialAction = false
    }

    specialAction(): void{
        let rand = Math.floor(Math.random() * (100 - 0 + 1) + 0)
        if (40 < rand && rand <= 70) {// 30% d'obtenir une potion

        } else if (70 < rand && rand <= 85) {// 15% d'obtenir un fragment d'étoile

        } else if (85 < rand && rand <= 95) {// 10% d'obtenir un éther

        } else if (95 < rand && rand <= 100) {// 5% d'obtenir une demi-étoile

        }
    }
}