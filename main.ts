console.log('Il mio primo programmino');
let myvar: number = 10;
myvar += 40;
console.log('myvar =', myvar);


interface MiaInterfaccia{
  mioNumero: number;
  miaStringa: string;

}

let miaInterfaccia: MiaInterfaccia = {
  mioNumero: 40,
  miaStringa: 'quaranta',

};
console.log('mioNumero =', miaInterfaccia.mioNumero);
console.log('miaStringa =', miaInterfaccia.miaStringa);