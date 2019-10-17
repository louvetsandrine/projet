var messagesCount = document.getElementsByTagName('p').length;

document.getElementById("count").textContent = messagesCount;

for(var i=0; i<document.getElementsByClassName('trash').length; i++){
    document.getElementsByClassName('trash')[i].addEventListener("click",function(){
        console.log(messagesCount);
        
        this.parentNode.remove();
        
        messagesCount = document.getElementsByTagName('p').length;
        document.getElementById("count").textContent = messagesCount
        console.log(messagesCount);
    })
}