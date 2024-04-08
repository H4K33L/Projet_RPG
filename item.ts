import items from "./items.ts";
import Character from "./Character.ts";
import rez from "./rez.ts"
import healer from "./healer.ts"
import mana from "./quantum.ts"

const Potion = new healer(50,2,0,"health",0,"Potion 🧪")
const Morceau_Étoile = new rez(50,1,20,"rez or heal",0,"Morceau d'étoile ✨")
const Demi_Étoile = new rez(100,0,100,"rez or heal",0,"Demi-étoile 🌟")
const Ether = new mana(0,1,0,"mana",30,"Ether 💊")



/** 
 * getter setter pour les quantity 
 * 
 * private tout les objets  
 */
/**
 * définir quel item est healer, healer mana ou rez 
 * définir pour chaque item ces stats : 
 * - Potion 🧪
 * - Morceau d'étoile ✨
 * - Demi-étoile 🌟 
 * - Ether 💊
 */