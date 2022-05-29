var des=JSON.parse(localStorage.getItem("descriptio"))
    var y=document.getElementById("container")
   
    description(des)
    function description(des){
        console.log(des)

        var row = document.createElement("div")
        row.setAttribute("class","row")
        
        let p=document.createElement("h3");
        p.innerText=`Name :- ${des.name}`;

        let p2=document.createElement("h3");
        p2.textContent = `Gender :- ${des.gender}`;

        let p3=document.createElement("h3");
        p3.textContent=`Skin-Color :- ${des.skin_color}`;

        let p4=document.createElement("h3");
        p4.innerText=`Height :-${des.height}`;
       
        let p5=document.createElement("h3");
        p5.innerText=`Eye-color :-${des.eye_color}`;
        
        row.append(p, p2, p3, p4, p5);
        y.append(row);
                
    }