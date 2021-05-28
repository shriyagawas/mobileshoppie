const data = [

    {
        id : 0,
        img : 'images/4.jpg',
        price:'200',
        name :'abc',
        save : 12,
        delivery : ' In 5-6 days',
        itemInCart : false
        
    },
    {
        id : 1,
        img : 'images/11.jpg',
        price:'20000',
        name :'anv',
        save : '',
        delivery : ' In 5-6 days',
        itemInCart : false
        
    },
    {
        id : 2,
        img : 'images/11.jpg',
        price:'20000',
        name :'any',
        save : '',
        delivery : ' In 5-6 days',
        itemInCart : false
        
    },
    {
        id : 3,
        img : 'images/11.jpg',
        price:'20000',
        name :'anv',
        save : '',
        delivery : ' In 5-6 days',
        itemInCart : false
        
    },
    {
        id : 4,
        img : 'images/11.jpg',
        price:'20000',
        name :'anv',
        save : '',
        delivery : ' In 5-6 days',
        itemInCart : false
        
    },
    {
        id : 5,
        img : 'images/11.jpg',
        price:'20000',
        name :'anv',
        save : '',
        delivery : ' In 5-6 days',
        itemInCart : false
        
    },
    {
        id : 6,
        img : 'images/11.jpg',
        price:'20000',
        name :'anv',
        save : '',
        delivery : ' In 5-6 days',
        itemInCart : false
        
    },
    {
        id : 7,
        img : 'images/11.jpg',
        price:'20000',
        name :'anv',
        save : '',
        delivery : ' In 5-6 days',
        itemInCart : false
        
    },
    {
        id : 8,
        img : 'images/11.jpg',
        price:'20000',
        name :'anv',
        save : '',
        delivery : ' In 5-6 days',
        itemInCart : false
        
    },
    {
        id : 9,
        img : 'images/11.jpg',
        price:'20000',
        name :'anv',
        save : '',
        delivery : ' In 5-6 days',
        itemInCart : false
        
    },
   
];

let cartList = []; //array to store carts
 var i;
  
 var detail =  document.getElementsByClassName('card-item');
 var  detailsImg = document.getElementsByClassName('detail-img');
 var detailTitle = document.getElementById('detail-title');
 var detailprice = document.getElementById('detail-price');
 var yousaved = document.getElementById('you-save');
 var delivary = document.getElementById('delivery');
 var detailsPage =  document.getElementsByClassName('details-page');

 var back = document.getElementById('back');


 back.addEventListener('click', refreshPage);//back to home page

 var addToCarts = document.querySelectorAll('#add-to-cart');

 var cart = document.getElementById('carts');

 //cartList.addEventListener('click',displayCart);//displa cart

 var cart = document.getElementById('carts');

 //cart.addEventListener('click'(()=>addToCarts(getId)));  //eadd item to cart




 var getId;
 var home =  document.getElementById('logo');
 //home.addEventListener('click',hideCart);//to hide cart page and return to home back


 //........................

 document.addEventListener('click',function (e)
 {
     if(e.target.id=='remove')
     {
        var itemId = e.target.parentNode.id;
        removeFromCart(itemId);
   
     }
    
 })



//to display details

for(i=0;i<data.length;i++)
{
    detail[i].addEventListener('click',handleDetail);
}


//to add item

addToCarts.forEach(val=>val.addEventListener('click',()=>addToCarts(val.parentNode.id)));

//detail function

function handleDetail()
{
    detailsPage.style.display = 'block';

    
    getId = this.parentnode.id;
    detailsImg.src =  data[getId].img;
    detailTitle.innerHTML =data[getId].name;
    detailprice.innerHTML= 'price : $ '+ data[getId].price;
    yousaved.innerHTML = 'you saved : ( $ '+ data[getId].save + ')';

}
 function displayCart()
 {
     document.getElementById('main').style.display = 'none';

     document.getElementById('details-page').style.display = 'none';

     document.getElementById('cart-container').style.display = 'block';

     if(cartList.length==0)
     {
         document.getElementById('cart-with-items').style.display = 'none';
         document.getElementById('empty-cart').style.display = 'block';


     }
     else{
        document.getElementById('cart-with-items').style.display = 'block';
        document.getElementById('empty-cart').style.display = 'none';

     }
 }


function addToCarts(id)
{
    if(!data[id].itemInCart)
    {
        cartList = [...cartList,data[id]];
        addItem();
        alert('item added to cart');
    }
    else
    {
        alert('........');
    }
    data[id],itemInCart = true;
}

var totalAmount;
var totalItems;
var totalSaving;


// add item to cart

function addItem()
{
    totalAmount = 0;
    totalItems = 0;
    totalSaving = 0;
    var clrNode = document.getElementById('item-body');
    clrNode.innerHTML = '';
    cartList.map((cart)=>{
        var cartCont = document.getElementById('item-body');
        totalAmount = totalAmount + cart.price;
        totalSaving = totalSaving + cart.save;
        totalItems = totalItems + 1;

        var tempCart = document.createElement('div');
        tempCart.setAttribute('class',tempCart.setAttribute('id',cart.id));

        var listImg  = document.createElement('img');
        listImg.setAttribute('id','list-img');
        listImg.src = cart.img;
        tempCart.appendChild(listImg);

        var listName = document.createElement('h3');
        listName.setAttribute('class','list-name');

        listName.innerHTML = cart.name;
        tempCart.appendChild(listName);

        var listPay = document.createElement('h3');
        listPay.setAttribute('class','pay');
        listPay.innerHTML = cart.price;
        tempCart.appendChild(listPay);

        var listQuality = document.createElement('h3');
        listQuality.setAttribute('class','quantity');
        listQuality.innerHTML = '1';
        tempCart.appendChild(listQuality);

        var listTrash = document.createElement('i');
        listTrash.setAttribute('class','fa fa-trash');

        listTrash.setAttribute('id','remove');
        tempCart.appendChild(listTrash);

        cartCont.appendChild(tempCart);

    })

    document.getElementById('total-amount').innerHTML = 'total amount : $ ' + totalAmount;
    document.getElementById('total-items').innerHTML = 'total items : $ ' + totalItems;

    document.getElementById('you-saved').innerHTML = 'total saved : $ ' + totalsaving;

    document.getElementById('total').style.display = 'block';



}


function hideCart()
{
    document.getElementById('main').style.display = 'block';

    document.getElementById('cart-container').style.display = 'none'; 



}

//back to home page

function refreshPage()
{
    detailsPage.style.display = 'none';


}






