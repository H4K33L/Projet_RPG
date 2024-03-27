import Character from "../Character.ts"

export default interface Special {
    specialAction(targets : Character[]):void 
}