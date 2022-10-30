
var clientName = document.getElementById('clientName');//Input kolo
var clientBalance = document.getElementById('clientBalance');//Input kolo
var clientID=document.getElementById('clientID')
var searchInput=document.getElementById('search');
var addBtn=document.getElementById('addBtn');

var currentIndex=0;

var container=[]; //3shan tsheil kol eldata value elly el user hayd5lha

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
    
        var client = {
            id:clientID.value,
            name: clientName.value,
            balance: clientBalance.value,
         
        }
        container.push(client);
        localStorage.setItem('clients',JSON.stringify(container))//da 4shan a5od a5r update w t7wl json L string
        clearForm();
        display(container);   
   
}

function clearForm() {
    clientID.value="";
    clientName.value = "";
    clientBalance.value = "";
  
    addBtn.innerHTML="add Client";
}

function display() { 
    var cartoona = ``;
    for(var i =0;i<container.length; i++)
    {
        cartoona +=
        `<tr>
            <td>${container[i].id}</td>
            <td>${container[i].name}</td>
            <td>${container[i].balance}</td>

            <td> <button onclick="getInfo(${i})" class="btn btn-outline-warning">update</button></td>
            <td> <button onclick="deleteClient(${i})" class="btn btn-outline-danger">delete</button></td>
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
        `<tr>
            <td>${container[i].id}}</td>
            <td>${container[i].name}</td>
            <td>${container[i].balance}</td>

            <td> <button onclick="getInfo(${i})" class="btn btn-outline-warning">update</button></td>
            <td> <button onclick="deleteClient(${i})" class="btn btn-outline-danger">delete</button></td>
        </tr>`
    } document.getElementById('tableBody').innerHTML=cartona;
}


function deleteClient (deletedIndex){
    container.splice(deletedIndex,1);
    localStorage.setItem('clients',JSON.stringify(container))
    display(container);
} 
function getInfo (index){
   
    var currentClient=container[index]
    clientName.value = currentClient.name;
    clientBalance.value = currentClient.balance;

    addBtn.innerHTML='update';
    currentIndex=index;
}
function update(){
    var client = {
        id:clientID.value,
        name: clientName.value,
        balance: clientBalance.value,
    }
    console.log(container);
    container[currentIndex]=client;
    console.log(container);
    localStorage.setItem('clients',JSON.stringify(container))
    
    clearForm();
    display();
}



