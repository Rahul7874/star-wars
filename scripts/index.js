
let id;

async function searchMovies(){
try{
const query = document.getElementById("query").value;

const res =await fetch(`https://swapi.dev/api/people/?search=${query}`);

const data =await res.json();

const movies =data.results;
console.log(movies)
return movies;
}

catch(err){
    console.log("err:",err);
}
}

// append under search bar
array =[]
function appendMovies(data){
    let movies_div = document.getElementById("results");
    movies_div.innerHTML = null;


    data.forEach(function(el){
    
    var row=document.createElement("div")
    row.setAttribute("class","row")
    row.addEventListener("click",function(){
        array.push(el);
        newPage(el)
        

    })
    console.log(array);
    
    let p =document.createElement("p")
    p.innerText=el.name;
    
    row.append(p)
    movies_div.append(row);
});
}

function newPage(el){
    var x= localStorage.setItem("descriptio",JSON.stringify(el));
    console.log(x)
    console.log("array:",array)
  window.location.href="details.html";
}

// main function

async function main(){
let data =await searchMovies();

if(data === undefined)
{
    return false;
}
appendMovies(data);
}

// debounceing function

function debounce(func,delay){
if(id)
{
    clearTimeout(id);
}
id =setTimeout(function(){
    func();

},delay);
}