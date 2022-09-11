function Counter(x){
    var c=Number(x.innerHTML);
    if(c > 0){
        x.innerHTML=c-1;
    }
}
function Reset(x,c){
    x.innerHTML=c;
}