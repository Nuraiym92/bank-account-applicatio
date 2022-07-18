const alert=document.getElementById('alert')
class Bank{
 constructor(balance){
    this.balance=balance
 }
     deposit(amount){
        this.balance+=amount
     }
     withdraw(amount){
      if(this.balance-amount<=0){
        alert.innerText=`You don't have enough money to withdraw!`
        return
         
      }
        this.balance-=amount
        
     }
     
}

const userChecking=new Bank(0)


const depositButton=document.getElementById('deposit')
const withdrawButton=document.getElementById('withdraw')
const amountInput=document.getElementById('amount')
const balanceDiv=document.getElementById('balance')


depositButton.onclick = () =>{
   const amount=Number(amountInput.value)
   userChecking.deposit(Number(amount))
   balanceDiv.innerText=`Balance: ${userChecking.balance}`
   alert.innerText=``
}

withdrawButton.onclick=()=>{
   const amount=Number(amountInput.value)
   userChecking.withdraw(Number(amount))
   balanceDiv.innerText=`Balance:${userChecking.balance}`
}