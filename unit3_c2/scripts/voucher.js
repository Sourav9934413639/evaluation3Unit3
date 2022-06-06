let buys=JSON.parse(localStorage.getItem("purchase"))||[];
console.log(buys)
let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;
async function getData(){
    try{
        let res=await fetch(url);
        let data=await res.json();
        
        console.log(data[0].vouchers);
        append(data[0].vouchers);
        
    }catch(err)
    {
        console.log(err);
    }
}
getData();
function append(voucher_data){
    voucher_data.forEach((ele)=>{
        let card=document.createElement("div");
       let name=document.createElement("h3");
       name.innerText=ele.name;
       let img_box=document.createElement("div");
       let image=document.createElement("img");
       image.src=ele.image;
       img_box.append(image);
       let price=document.createElement("p");
       price.innerText=ele.price;
       let button=document.createElement("button");
       button.innerText="Buy";
       button.addEventListener("click",()=>{
        purchaseFunc(ele);
       });
       card.append(name,img_box,price,button);
       document.querySelector("#voucher_list").append(card);

    })
}
function purchaseFunc(ele){
    let balanceArr=JSON.parse(localStorage.getItem("user"));
    if(Number(balanceArr.wallet)>=ele.price)
    {
        alert("Hurray! purchase successful");
        buys.push(ele);
        localStorage.setItem("purchase",JSON.stringify(buys));
    }
    else
    {
        alert("Sorry! insufficient balance");
    }
    let balance=ele.price;
    console.log(balance)
}
