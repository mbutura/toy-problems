function myFunction() {
    let salary = prompt("Please input monthly salary", null);
    let points;
    if (salary != null) {
        try {
            salary = parseFloat(salary);
            if (salary == NaN || salary < 0) throw "Error: Invalid input, try again...";
            
            //PAYE deductions
            let payee = 0;
            switch(true){
                case salary > 32333:
                    payee += (salary-32333) * 0.3;
                case salary > 24001:
                    payee += (salary-24001) * 0.25;
                default:
                    payee += salary * 0.1;
            }
            
            //NHIF deductions
            let nhif = 0
            switch(true){
                case salary >= 100000:
                    nhif = 1700;
                case salary >= 90000 && salary <= 90000:
                    nhif = 1600;
                case salary >= 90000 && salary <= 90000:
                    nhif = 1700;
                case salary >= 100000:
                    nhif = 1700;
                case salary > 24001:
                    payee += (salary-24001)*0.25;
                default:
                    payee += salary*0.1;
            }

            //NSSF deductions
            let nssf = 0
            switch(true){
                case salary > 32333:
                    payee += (salary-32333)*0.3;
                case salary > 24001:
                    payee += (salary-24001)*0.25;
                default:
                    payee += salary*0.1;
            }

        document.getElementById("points-display").innerHTML = `Points: ${points}`;
        } catch(err) {
            document.getElementById("points-display").innerHTML =`${err}`;
        }
    } else {
        document.getElementById("points-display").innerHTML ="Error: Invalid input, try again...";
    }
  }