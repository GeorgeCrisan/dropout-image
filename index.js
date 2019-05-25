import "./style.sass";

window.addEventListener('load',function(){
    console.log('home ***');

    var nodes = document.querySelectorAll(".dropout > img");
    for(let i = nodes.length -1; i >= 0; i--){
        nodes[i].style.zindex = i;
        nodes[i].addEventListener("click",function(){
            this.classList.add("closing");
        });
        
        nodes[i].addEventListener('animationend',function(){
            var children = this.parentNode.children;
            for(let n = 0; n < children.length; n++){
                var zindexthing = Number(children[n].style.zindex) + 1;
                children[n].style.zindex = zindexthing;
            }
            this.style.zindex = 0;
            this.classList.remove('closing');
        });
    }

});