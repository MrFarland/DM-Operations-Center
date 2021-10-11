/*
 Encounter+ iOS
 version 1.0
 ----------------
 custom js
 */

 // Use the appropriate a or an depending on the first letter of the next word.
 const a=w=>(w.match(/^[aeiou]/i))?`an ${w}`:`a ${w}`