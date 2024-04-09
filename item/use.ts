import Character from "../character/Character.ts"

export default interface Use {
    use(targets : Character[]):void 
}