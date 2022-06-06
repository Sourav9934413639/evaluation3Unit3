let storeDetails=[];
document.getElementById("form").addEventListener("submit",subfunc)
function subfunc()
{
    event.preventDefault()
    
    
    class Person_Details{
        constructor(){
            this.name=form.name.value;
            this.email=form.email.value;
            this.address=form.address.value;
            this.wallet=form.amount.value;
        }
        
    }
    let userDetails=new Person_Details();
    
    storeDetails.push(userDetails);
    localStorage.setItem("user",JSON.stringify(userDetails));
    console.log(userDetails);
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
    document.getElementById("amount").value="";
    


}
