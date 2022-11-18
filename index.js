console.log("narendra");


async function table1(){
    let data=await fetch("https://jsonplaceholder.typicode.com/users").then((test)=>test.json());
    console.log(data);

    let content=document.getElementById("tablebody");
    let tablerow="";

    data.forEach((a)=>{
        console.log(a.id)
        tablerow +=`
            <tr>
                <td>${a.id}</td>
                <td>${a.name}</td>
                <td>${a.email}</td>
                <td>${a.phone}</td>
                <td>${a.website}</td>
                <td>${a.company.name}</td>
                <td>${a.company.bs}</td>
            </tr>
        `

        content.innerHTML=tablerow;
    })
}

table1();