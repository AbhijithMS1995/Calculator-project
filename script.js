function buttonclick(val)
{
    document.getElementById("screen").value += val
}
function clearScreen(){
    document.getElementById("screen").value = ""
}

function result(){
    var values = document.getElementById("screen").value
    var result = eval(values)
    document.getElementById("screen").value = result
}   