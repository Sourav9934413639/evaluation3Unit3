let buys=JSON.parse(localStorage.getItem("purchase"))||[];
let balance=JSON.parse(localStorage.getItem("user"))||[];
console.log(buys.price)
console.log(balance)
let remains=balance.wallet;


function append(purchase_data){
    purchase_data.forEach((ele)=>{
        remains=remains-ele.price;
        if(remains<=0)
        {
            remains=0;
        }
        
        document.querySelector("#balance").innerText=remains;
        let card=document.createElement("div");
       let name=document.createElement("h3");
       name.innerText=ele.name;
       let img_box=document.createElement("div");
       let image=document.createElement("img");
       image.src=ele.image;
       img_box.append(image);
       let price=document.createElement("p");
       price.innerText=ele.price;
      
       card.append(name,img_box,price);
       document.querySelector("#purchased_vouchers").append(card);

    })
}
append(buys);