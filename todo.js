document.getElementById("Add").addEventListener("click",newobj)

function newobj(){
    var newtd=document.querySelector('.newtodo').value
    var ol=document.getElementById('ordlist')
    var li=document.createElement("li")
    var rb=document.createElement("input")
    rb.setAttribute("type","checkbox")
    rb.setAttribute("labels",newtd)
    li.textContent=newtd
    li.appendChild(rb)
    ol.appendChild(li)
    rb.addEventListener("click",function(){
        li.classList.toggle('strike')
    })
}