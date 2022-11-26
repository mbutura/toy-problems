function myFunction() {
    let speed = prompt("Please enter speeds", null);
    let points;
    if (speed != null) {
        try {
            speed = parseFloat(speed);
            if (speed == NaN || speed < 0) throw "Error: Invalid input, try again...";
            if (speed < 70){
                points = 'OK';
            } else if (speed === 70){
                //Handling edge case
                points = 1;
            } else{
                points = Math.ceil((speed - 70) / 5)
            }

            if (points > 12){
                points = "License suspended";
            }

            document.getElementById("points-display").innerHTML = `Points: ${points}`;
        } catch(err) {
            document.getElementById("points-display").innerHTML =`${err}`;
        }
    } else {
        document.getElementById("points-display").innerHTML ="Error: Invalid input, try again...";
    }
  }