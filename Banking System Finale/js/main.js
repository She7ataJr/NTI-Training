
var clientName = document.getElementById('clientName');//Input kolo
var clientBalance = document.getElementById('clientBalance');//Input kolo
var searchInput=document.getElementById('search');
var addBtn=document.getElementById('addBtn');

var currentIndex=0;

var container=[]; //3shan tsheil kol elproducts value elly el user hayd5lha

if(localStorage.getItem('clients')!=null)
{
    container = JSON.parse(localStorage.getItem('clients'));
    display(container)
}
else
{
    container=[];
}
addBtn.onclick=function(){
    if(addBtn.innerHTML=='add Client')
    {
        add();
    }
    else
    {
        update();
    }
    display();
    clearForm();
}
function add() {
    
        var product = {
            name: clientName.value,
            balance: clientBalance.value,
         
        }
        container.push(product);
        localStorage.setItem('clients',JSON.stringify(container))//da 4shan a5od a5r update w t7wl json L string
        clearForm();
        display(container);   
   
}

function clearForm() {
    
    clientName.value = "";
    clientBalance.value = "";
  
    addBtn.innerHTML="add Client";
  }

function display() { 
    var cartoona = ``;
    for(var i =0;i<container.length; i++)
    {
        cartoona +=`<tr>
        <td>${i+1}</td>
        <td>${container[i].name}</td>
        <td>${container[i].balance}</td>

        <td> <button onclick="getInfo(${i})" class="btn btn-outline-warning">update</button></td>
        <td> <button onclick="deletProduct(${i})" class="btn btn-outline-danger">delete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoona;
 }


function Search (searchText){
    var cartona ='';
    for (var i=0 ; i<container.length;i++)
    if (container[i].name.toLowerCase().includes(searchText.toLowerCase()))
    {
        cartona+=
        `
        <tr>
            <td>${i+1}</td>
            <td>${container[i].name}</td>
            <td>${container[i].balance}</td>

            <td> <button onclick="getInfo(${i})" class="btn btn-outline-warning">update</button></td>
            <td> <button onclick="deletProduct(${i})" class="btn btn-outline-danger">delete</button></td>
        </tr>
        `;
    } document.getElementById('tableBody').innerHTML=cartona;
}


function deletProduct (deletedIndex){
    container.splice(deletedIndex,1);
    localStorage.setItem('clients',JSON.stringify(container))
    display(container);
} 
function getInfo (index){
   
    var currentProduct=container[index]
    clientName.value = currentProduct.name;
    clientBalance.value = currentProduct.balance;

    addBtn.innerHTML='update';
    currentIndex=index;
}
function update(){
    var product = {
        name: clientName.value,
        balance: clientBalance.value,

    }
    console.log(container);
    container[currentIndex]=product;
    console.log(container);
    localStorage.setItem('clients',JSON.stringify(container))
    
    clearForm();
    display();
}



