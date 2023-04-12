let text = ""
var payload = []

function onSubmit() {
    var firstname = document.getElementById("firstname").value;
    var middlename = document.getElementById("middlename").value;
    var lastname = document.getElementById("lastname").value;
    var checkboxes = document.getElementsByClassName("sports")

    text = ""
    index = 0;
    
    payload.length = 0
    for (const checkbox of checkboxes) {
        if(payload.length == 0) {
            document.getElementById("games").innerHTML ="No Selected Sports"
        }
    if (checkbox.checked == true) {
        payload.push(checkbox.value);
    }
}
    payload.forEach(transformData);
    document.getElementById("output").innerHTML =  firstname + (" ")  + middlename + (" ") + lastname
}
function transformData(item, index) {
    text += index + (" ")+ item + "<br>";
    document.getElementById("games").innerHTML = text
}

