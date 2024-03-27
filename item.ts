import items from "./items.ts";
import Character from "./Character.ts";
import rez from "./rez.ts"
import healer from "./healer.ts"
import mana from "./mana.ts"

const Potion = new healer(50,2,0,"health","Potion 🧪")
const Morceau_Étoile = new rez(50,1,20,"rez or heal","Morceau d'étoile ✨")
const Demi_Étoile = new rez(100,0,100,"rez or heal","Demi-étoile 🌟")
const Ether = new mana(0,1,0,"mana","Ether 💊")





/**
 * définir quel item est healer, healer mana ou rez 
 * définir pour chaque item ces stats : 
 * - Potion 🧪
 * - Morceau d'étoile ✨
 * - Demi-étoile 🌟 
 * - Ether 💊
 */