function myFunction() {
    let salary = prompt("Please input monthly salary", null);
    let points;
    if (salary != null) {
        try {
            salary = parseFloat(salary);
            if (salary == NaN || salary < 0) throw "Error: Invalid input, try again...";
            //PAYE
            let salaryPayee = salary;
            
            switch(true){
                case salaryPayee <= 24000:
                    salaryPayee - salary
            }
            if (salaryPayee <= 24000){
                payee = 0.1;
            } else if (salary === 70){
                //Handling edge case
                points = 1;
            } else{
                points = Math.ceil((salary - 70) / 5)
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