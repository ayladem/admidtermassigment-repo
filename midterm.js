
 //11
 const number = (Number(prompt("Please enter a number")));
 if(number!=number.valueOf(Number)){
    prompt("Please enter a new number")
 }
  
else if(number==3||number===8){
console.log("Congrats! You win the game!")
     }
     else if(number==101||number==108){
        console.log("Congrats! You win the game!")  
     }else{
         console.log("sorry game is over")
     }




//12
function monthlyMortgagePayment(loanamount,monthlyInterestRate,loanTerm){
     const termMonth=12*loanTerm;//120
     const monintRate=(monthlyInterestRate);

    return amount=(Math.round(  loanamount*monintRate*(Math.pow(1+monintRate,termMonth))/(Math.pow(1+monintRate,termMonth)-1)));

}

console.log(( monthlyMortgagePayment(1000000,0.01,10)))








   //13

  function calculatetotalbal(Pamount,Interestrate,timeperiod){
      
      const interest=(Pamount*Interestrate*timeperiod)
    return Pamount+interest;
  }
  console.log(calculatetotalbal(10000,0.01,10))



//14
  const stateUS=[];
  stateUS.push('Alabama',102,'New Jersey','Arizona','New York','Arkansas','California', 'Colorado', 'Washington','Connecticut')
  
  for( i=0; i<stateUS.length-6; i++){
console.log(stateUS[i],typeof(stateUS[i]));
  }
 
  
  
  stateUS.splice(2,1)
  stateUS.splice(3,1)
  stateUS.splice(6,1)
  stateUS.splice(1,1,"Alaska")
  console.log(stateUS)
   for( i=0; i<stateUS.length-3; i++){
    console.log(stateUS[i],typeof(stateUS[i]));
    }
    console.log(`There are ${stateUS.length} states left in the array of stateUS and they are  ${stateUS} `)
  //15
const Markobject={
    firstName:"Mark",
    lastName:"King",
    birthYear:1998,
    address:"103 courth street brooklyn,Ny,11201",
  
   
}
function centuryCheck(){
if(Markobject.birthYear<2001){
    console.log('Mark born in 20th Century')
}else if(Markobject.birthYear>2001){
    console.log('Mark born in 21st Century')
}}
centuryCheck()
 Markobject.address="120 courth street, Brooklyn";
 console.log("Mark's new address is ", Markobject.address)
//16
 const arrayCelcius=[]; 
 const arrayFahreinheit=[-128,  46, 60, 72, 76, 88, 90, 100, 137];
 

 
 function FahrenheitToCelcius(){
 
for(i=0; i<arrayFahreinheit.length; i++){
    if(arrayFahreinheit[i]<-126||arrayFahreinheit[i]>136){
        console.log("Invalid temperature!")
     }else if(arrayFahreinheit[i]==""){
     console.log("Invalid temperature!")
    }else if(arrayFahreinheit[i]==NaN){
        console.log("Invalid temperature!")
    }else{
       
    
    const Cresult=(((arrayFahreinheit[i]-32)*5)/9);
    arrayCelcius.push(Cresult)

     console.log(`${arrayFahreinheit[i]}F is ${Cresult.toFixed()}C`)
       
    } 
}}
FahrenheitToCelcius()


