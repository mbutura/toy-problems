function myFunction() {
    let salary = prompt("Please input monthly salary", null);
    let points;
    if (salary != null) {
        try {
            let paye = 0;
            let nssf = 0;
            let nhif = 0;
            salary = parseFloat(salary);
            if (isNaN(salary) || salary < 0) throw "Error: Invalid input, try again...";
            switch(true){
                case salary === 0:
                    break;
                case salary > 32333:
                    paye += (salary-32333) * 0.3;
                case salary > 24001:
                    paye += (salary-24001) * 0.25;
                default:
                    paye += salary * 0.1;
            }
            
            //NHIF deductions
            switch(true){
                case salary === 0:
                    break;
                case salary >= 100000:
                    nhif = 1700;
                    break;
                case salary >= 90000 && salary < 100000:
                    nhif = 1600;
                    break;
                case salary >= 80000 && salary < 90000:
                    nhif = 1500;
                    break;
                case salary >= 70000 && salary < 80000:
                    nhif = 1400;
                    break;
                case salary >= 60000 && salary < 70000:
                    nhif = 1300;
                    break;
                case salary >= 50000 && salary < 60000:
                    nhif = 1200;
                    break;
                case salary >= 40000 && salary < 50000:
                    nhif = 1100;
                    break;
                case salary >= 40000 && salary < 45000:
                    nhif = 1000;
                    break;
                case salary >= 35000 && salary < 40000:
                    nhif = 950;
                    break;
                case salary >= 30000 && salary < 35000:
                    nhif = 900;
                    break;
                case salary >= 25000 && salary < 30000:
                    nhif = 850;
                    break;
                case salary >= 20000 && salary < 25000:
                    nhif = 750;
                    break;
                case salary >= 15000 && salary < 20000:
                    nhif = 600;
                    break;
                case salary >= 12000 && salary < 15000:
                    nhif = 500;
                    break;
                case salary >= 8000 && salary < 12000:
                    nhif = 400;
                    break;
                case salary >= 6000 && salary < 8000:
                    nhif = 300;
                    break;
                default:
                    nhif = 150;
                    break;
            }

            //NSSF deductions
            switch(true){
                case salary === 0:
                    break;
                case salary >= 18000:
                    nssf = 0.06 * 18000;
                    break;
                case salary >= 6001 && salary < 18000:
                    nhif = 0.06 * salary;
                    break;
                default:
                    nhif = 0.06 * salary;
                    break;
            }
            document.getElementById("gross-display").innerHTML = `Gross pay: ${salary}`;
            document.getElementById("paye-display").innerHTML = `PAYE: ${paye.toFixed(1)}`;
            document.getElementById("nhif-display").innerHTML = `NHIF ${nhif.toFixed(1)}`;
            document.getElementById("nssf-display").innerHTML = `NSSF: ${nssf.toFixed(1)}`;
            document.getElementById("net-display").innerHTML = `Net payable: ${(salary-paye-nssf-nhif).toFixed(1)}`;
        } catch(err) {
            document.getElementById("gross-display").innerHTML =`${err}`;
        }
    } else {
        document.getElementById("gross-display").innerHTML ="Error: Invalid input, try again...";
    }
  }