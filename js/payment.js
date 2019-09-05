let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let percent = document.querySelector(".percent");
let form = document.querySelector(".pay-form");
let taxDue = document.querySelector("#taxDue");
let msg = document.querySelector(".msg");
let submit = document.querySelector("#submit");
let income = document.querySelector("#annual_income");
let status = document.querySelector("#status");
let month = document.querySelector("#month");


form.annual_income.addEventListener("input",  (e) => {
    e.preventDefault();
    let income = form.annual_income.value;

    if(isNaN(income))
    {
        msg.textContent = "Please, inputs numbers only in the Annual Income field";
        msg.style.color = "red";
    }
    else if(income.trim() === "")
    { 
        msg.textContent = 'Please fill in your annual income';
        msg.style.color = "red";
       
        return false; 
    }	
    
    getPercentage(income);
})

const getPercentage = (income) => {  
    
    
    
    let percentage = 0;
    let tax = 0;
   

    if(income <= 50000){
    percentage = 5;
    percent.innerHTML = "You pay" + " " + percentage + "%";
    percent.style.display = "inline";
    
    tax = income *  percentage/100;
    taxDue.value = tax;
    }
                   
    if(income > 50000 &&  income <= 150000){
    percentage = 5.5;
    percent.innerHTML = "You pay" + " " + percentage + "%";
    percent.style.display = "inline";
    
    tax = income *  percentage/100;
    taxDue.value = tax;
    }
                  
                  
    if(income > 150000 &&  income <= 500000){
    percentage = 6.0;
    percent.innerHTML = "You pay" + " " + percentage + "%";
    percent.style.display = "inline";
    
    tax = income *  percentage/100;
    taxDue.value = tax;
    }
                  
    if (income > 500000){
    percentage = 10;
    percent.innerHTML = "You pay" + " " + percentage + "%";
    percent.style.display = "inline";

    tax = income *  percentage/100;
    taxDue.value = tax;
    }
   
}

// const calcTaxToBepaid = (percentage, income) => {

//     console.log(income);
//     let tax = 0;
    
//     tax = income *  percentage/100;
    
//     amountDue.textContent = tax;
    
//     console.log(tax);
//     }
    
status.addEventListener('change', (e) =>{
    if(status.selectedIndex != 0)
    {
        msg.textContent = "";
      
        return true;
    }

})


month.addEventListener('change', (e) =>{
    if(month.selectedIndex != 0)
    {
        msg.textContent = "";
      
        return true;
    }

})
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        validate();
    });


  const validate = () => {
    
    if(status.selectedIndex == 0)
    {
        msg.textContent = "Please, select your status";
        msg.style.color = "red";
        return false;
    }
    
    if(name.value === "" || email.value === "" || phone.value === "" || annual_income.value === ""){
                msg.textContent = "Please, fill all required fields";
                msg.style.color = "red";
            return false; 
        }

    if(month.selectedIndex == 0)
    {
        msg.textContent = "Please, select your tax month";
        msg.style.color = "red";
      
        return false;
    }

    // if(isNaN(income))
    // {
    //     msg.textContent = "Please, inputs numbers only in the Annual Income field";
    //     msg.style.color = "red";
    // }
    // else if(incomeText.value.trim() === "")
    // { 
    //     msg.textContent = 'Please fill in your annual income';
    //     msg.style.color = "red";
       
    //     return false; 
    // }	

    if(income == ""){
    percent.style.display = "none";
    }

    
    form.name.addEventListener('input', (e) =>{
    
        if(name.value === "")
        {
            msg.textContent = "Please, input your name";
            msg.style.color = "red";
        }
        const validator = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
        if (!validator.test(form.name.value)) {
            msg.textContent = "Please, enter valid name & not numbers numbers";
            msg.style.color = "red";
            return false;
        } 
    
    })
    
    form.email.addEventListener('input', (e) =>{

        if(email.value === "")
        {
            msg.textContent = "Please, input your email";
            msg.style.color = "red";
        }
        
        const validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!validator.test(form.email.value)) {
            msg.textContent = "Please, enter valid email address";
            msg.style.color = "red";
            return false;
        } 
    })

    form.phone.addEventListener('input', (e) =>{
    
        msg.textContent = "";
        const validator = /^[0-9]+$/g;
        if (!validator.test(form.phone.value)) {
            msg.textContent = "Please, enter valid phone number";
            msg.style.color = "red";
            return false;
        } 
    
    })

    msg.textContent = "";
    status.selectedIndex = 0;
    month.selectedIndex = 0;
    amountDue.value = "";
    name.value = "";
    email.value = "";
    phone.value = "";
    percent.textContent = "";
    taxDue.value = "";
  }

