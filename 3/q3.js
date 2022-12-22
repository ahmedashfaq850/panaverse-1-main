const name= "bilal sIddique";
const lowersCase = name.toLowerCase();
const upperCase= name.toUpperCase()
// const titleCase= name[0].toUpperCase()+name.slice(1,)
const titles= ()=>{
    const nameSplit= name.toLowerCase().split(" ");
    let titleCase= ""
    for (let i=0;i<nameSplit.length;i++){
        titleCase += nameSplit[i][0].toUpperCase()+nameSplit[i].slice(1)+" ";  
    }
    return titleCase
} 
const titlecase= titles()
console.log({lowersCase,upperCase,titlecase})

