import Character from "../character/Character.ts"

export default interface Use {
    use(targets : Character[]):void 
}

// fonction utilisation objets avec un target character pour choisir sur qui l'utiliser