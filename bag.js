const confee=99;
let itemObjects;
onLoad();

function onLoad(){
  loadItem();
displaybagitems();
bagSummary();
}
function loadItem(){

  itemObjects=bagItems.map(ItemId=>{
for(let i=0;i<bagItems.length;i++)
{
  if(ItemId==Item[i].id)
  {
    return Item[i] ;
  }
}

});
}

function removeCart(itemId){
bagItems=bagItems.filter(bagItems=>bagItems!=itemId);

localStorage.setItem('bagItems',JSON.stringify(bagItems));

loadItem();
cartitem();
displaybagitems();
bagSummary();
}

function displaybagitems(){

let containerItem=document.querySelector('.bag-items-container');
let innerHTML='';
itemObjects.forEach(Item=>{ 

  innerHTML += generateItem(Item);
 
});

containerItem.innerHTML=innerHTML;

}

function bagSummary()
{
  let itemSummary=document.querySelector('.bag-summary');

let totalMrp=0;
let item=itemObjects.length;
let totalAmount=0;
let discount=0;
itemObjects.forEach(bagItems=>{
totalMrp +=bagItems.origimnal_price;
discount+=bagItems.origimnal_price-bagItems.current_price ;
})

totalAmount=totalMrp-discount+confee;
if(totalMrp===0){
  totalAmount=0;
}

  itemSummary.innerHTML=`<div class="bag-details-container">
  <div class="price-header">PRICE DETAIL ( ${item} Items) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">Rs ${totalMrp}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-Rs ${discount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">Rs 99</span>
  </div>
  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">Rs ${totalAmount}</span>
  </div>
</div>
<button class="btn-place-order">
  <div class="css-xjhrni">PLACE ORDER</div>
</button>`;
}

function generateItem(Item){

return `<div class="bag-item-container">
<div class="item-left-part">
  <img class="bag-item-img" src="${Item.item_image}" alt="productImage">
</div>
<div class="item-right-part">
  <div class="company">${Item.ItmName}</div>
  <div class="item-name">${Item.product}</div>
  <div class="price-container">
    <span class="current-price">Rs ${Item.current_price}</span>
    <span class="original-price">Rs ${Item.origimnal_price}</span>
    <span class="discount-percentage">(${Item.discount}% OFF)</span>
  </div>
  <div class="return-period">
    <span class="return-period-days">${Item.returnDate} days</span> return available
  </div>
  <div class="delivery-details">
    Delivery by
    <span class="delivery-details-days">${Item.delivaryDate}</span>
  </div>
</div>

<div class="remove-from-cart" onclick="removeCart(${Item.id});">X</div>

`;
}