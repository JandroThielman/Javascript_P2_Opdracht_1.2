const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];

document.getElementById("j").innerHTML = "Er zitten " + winkelmandje.length + " producten in uw winkelmand.";

document.getElementById("a").innerHTML = "Uw producten zijn: " + winkelmandje.toString() + ".";

document.getElementById("n").innerHTML = winkelmandje[3] + ", staat op de vierde plek in uw winkelmand.";

winkelmandje.splice(0, 5, "Bananen", "Bier", "Chips", "Bonen", "Aardappelen")
document.getElementById("d").innerHTML = "Uw producten zijn Veranderd: " + winkelmandje.toLocaleString() + ".";

document.getElementById("r").innerHTML = "Uw producten zijn: " + winkelmandje.toString() + ".";

function addPoduct(){

    var count = 0;
    var button = document.getElementById("myButton");

    button.onclick = function() {
        count++;

        if (count > 0) {
            
            document.getElementById("j").innerHTML = "Er zitten " + winkelmandje.length + " producten in uw winkelmand.";

            document.getElementById("a").innerHTML = "Uw producten zijn: " + winkelmandje.toString() + ".";
        
            document.getElementById("n").innerHTML = winkelmandje[3] + ", staat op de vierde plek in uw winkelmand.";
        
            winkel.splice(1, 1, 'Bier');
        
            document.getElementById("d").innerHTML = "Uw producten zijn Veranderd: " + winkel.toString() + ".";
        
            document.getElementById("r").innerHTML = "Uw producten zijn: " + winkelmandje.toString() + ".";
        
            winkelmandje.splice(5, 0, 'brood');
        
            winkel.splice(5, 0, 'brood');
        } 

        if (count > 1) {
            document.getElementById("myButton").disabled = true;
         } else {
            button.disabled = false;
        }
         
    }

}

if (winkelmandje.length > 1) {
    document.getElementById("o").innerHTML = "U heeft genoeg producten om te tonen:";
    } else {
    document.getElementById("o").innerHTML = "<p>U heeft niet genoeg producten om te tonen.</p>";
}

document.getElementById("t").innerHTML = "Uw producten zijn: " + winkelmandje.join(" ") + ".";

document.getElementById("h").innerHTML = "Uw oude producten zijn: " + winkelmandje.toString() + ".";

winkelmandje.splice(0, 2);
document.getElementById('i').innerHTML = "Ow nieuwe producten zijn: "+ winkelmandje.join(', ') + ".";

document.getElementById("e").innerHTML = "Uw oude producten zijn: " + winkelmandje.sort() + ".";