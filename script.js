let bagItems=[];
onLoad();
function onLoad(){
  let bagstr= localStorage.getItem('bagItems');
  bagItems=bagstr?JSON.parse(bagstr):[];

  displayHome();
cartitem();
}
function AddtoBag(itemid){
  bagItems.push(itemid);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));

  cartitem();
}

function cartitem(){
  let cartItem=document.querySelector('.bagItemCount');
  
  if(bagItems.length>0){
    cartItem.style.visibility='visible';
cartItem.innerText= bagItems.length;

}
else{
  cartItem.style.visibility='hidden';
}

}

function displayHome(){
let itemsContainer=document.querySelector('.items-container');

if(!itemsContainer){
  return;
}
let innerHTML='';
Item.forEach(item=>
{
  innerHTML +=`<div class="item-container">

<img class="item-image" src="${item.item_image}" alt="item image">
<div class="rating">
    ${item.rating.stars}⭐|${item.rating.reviews}
</div>
<div class="company-name">${item.itmName}</div>
<div class="item-name">${item.product}</div>
<div class="price">
    <span class="current-price">Rs ${item.current_price}</span>
<span class="original-price">Rs ${item.origimnal_price}</span>
<span class="discount">(${item.discount}% OFF)</span>
</div>
<button class="btn-add-bag" onclick="AddtoBag(${item.id})" >Add to Bag</button>
</div>



`;})
itemsContainer.innerHTML=innerHTML;
}