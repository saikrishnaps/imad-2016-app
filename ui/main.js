console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='new value';
var img=document.getElementById('madi');
var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+10;
    img.style.marginLeft='10px';
}
img.onclick= function(){
    var interval=setInterval(moveright,100);
    img.style.marginLeft='100px';
};