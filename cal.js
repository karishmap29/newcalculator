function allclear(){
    inp.value=" ";
}
function clearentry(){
    data=inp.value
    inp.value=data.slice(0,-1);
}
function displaydata(n){
inp.value+=n;
}
function result(){
    inp.value=eval(inp.value)
}