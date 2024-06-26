//Fun hero vs villian fight : 

import {randomSuperhero} from "superheroes";
var hero = randomSuperhero();

import {randomSupervillain} from 'supervillains';
var villian = randomSupervillain();

console.log("\n\n  Welcome to the clash of HERO VS VILLIAN !!!!! \n");
setTimeout(function(){
    console.log(".................... *drumrolls* .......................\n");
},1000)

setTimeout(function(){
    console.log("Our hero is .... ");
},2000)

setTimeout(function()
{
    console.log(hero);
},2500);

setTimeout(function()
{
    console.log("\nAnd to face them, is VILLIAN .... ");    
},3500);
setTimeout(function()
{
    console.log(villian);
},4000);

setTimeout(function()
{
    console.log("\n\nThey are fighting.... \n\n");
    console.log(".........*kicks*.........*punches*.......\n\n");
},5000);


setTimeout(function(){
var n = Math.floor(Math.random()*2);
if(n===0)
    console.log("\nHero " + hero +" wins the Clash of " + hero + " and " + villian + "\n\n");
else 
    console.log("\nVillain "+villian+ " wins the Clash of " + hero + " and " + villian+ "\n\n");

},8000);
