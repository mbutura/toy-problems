function myGradeFunction() {
    let mark = prompt("Please enter marks", null);
    let grade;
    if (mark != null) {
        try {
            mark = parseInt(mark, 10);
            if (isNaN(mark) || mark < 0 || mark > 100 ) throw "Error: Invalid input, try again...";
            /*Simple switch case break to handle mutually exclusive grades*/
            switch (true) { 
                case mark > 79:
                    grade = 'A';
                    break;
                case mark > 59 && mark <=79:
                    grade = 'B';
                    break;
                case mark > 49 && mark <=59:
                    grade = 'C';
                    break;
                case mark >= 40 && mark <=49:
                    grade = 'D';
                    break;
                default:
                    grade = 'E';
                    break;
            }
            document.getElementById("grade-display").innerHTML = `Grade: ${grade}`;
        } catch(err) {
            document.getElementById("grade-display").innerHTML =`${err}`;
        }
    } else {
        document.getElementById("grade-display").innerHTML ="Error: Invalid input, try again...";
    }
}

function mySpeedFunction() {
    let speed = prompt("Please enter speeds", null);
    let status, points;
    const pointLimit = 12;
    /*If there is data*/
    if (speed != null) {
        try {
            speed = parseFloat(speed);
            /*Check for malformed data that cant be converted by parsefloat()*/
            if (isNaN(speed) || speed < 0) throw "Error: Invalid input, try again...";
            /*Hnadle base case*/
            if (speed < 70){
                status = 'Status: OK';
            } else if (speed === 70){ 
                /*Handling edge case*/
                status = `${1}`;
            } else{
                /*Handling normal case*/
                points = Math.ceil((speed - 70) / 5);
                status = points > pointLimit? "Status: License suspended": `Demerit points: ${points}`;
            }
            document.getElementById("points-display").innerHTML = status;
        } catch(err) {
            document.getElementById("points-display").innerHTML =`${err}`;
        }
    } else {
        /*If there is no data*/
        document.getElementById("points-display").innerHTML ="Error: Invalid input, try again...";
    }
  }

  function myTaxFunction() {
    let salary = prompt("Please input monthly salary", null);
    if (salary != null) {
        try {
            let paye = 0;
            let nssf = 0;
            let nhif = 0;
            let taxablePay = 0;
            const personalRelief = 2400;
            salary = parseFloat(salary);
            if (isNaN(salary) || salary < 0) throw "Error: Invalid input, try again...";
            /*
            NSSF deductions are calculated first in order to obtain taxable pay as NSSF is considered
            non-taxable.
            */
            switch(true){
                case salary === 0:
                    break;
                case salary >= 18000:
                    nssf = 0.06 * 18000;
                    break;
                case salary >= 6001 && salary < 18000:
                    nssf = 0.06 * salary;
                    break;
                default:
                    nssf = 0.06 * salary;
                    break;
            }

            /*
            PAYE deduction - This is a stepped calculation with each inclome bracket/step calculated 
            independently and summed at the end. We can allow the same taxable figure to fall-through 
            using a switch statement which reduces code density and increases clarity/
            */
            taxablePay = salary - nssf;
            switch(true){
                case taxablePay === 0:
                    break;
                case taxablePay > 32333:
                    paye += (taxablePay-32333) * 0.3;
                case taxablePay > 24000:
                    paye += (taxablePay >= 32333)?(32333-24001) * 0.25:(taxablePay-24000) * 0.25;
                default:
                    paye += (taxablePay >= 24000)?24000 * 0.1:taxablePay * 0.1;
            }

            //Reduce the PAYE by personal relief.
            paye -= personalRelief;
            
            /*
            NHIF calculations are mutually exclusive and can be handled by if-else or
            switch break statements.
            */
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

            document.getElementById("gross-display").innerHTML = `Gross pay less NSSF deduction = (Taxable Pay) ${salary}-${nssf.toFixed(1)} = ${(salary - nssf).toFixed(1)}`;
            document.getElementById("paye-display").innerHTML = `Payee deduction less personal relief = ${paye.toFixed(1)}`;
            document.getElementById("nhif-display").innerHTML = `NHIF deduction =  ${nhif.toFixed(1)}`;
            document.getElementById("nssf-display").innerHTML = `NSSF deduction: ${nssf.toFixed(1)}`;
            document.getElementById("net-display").innerHTML = `Net pay: ${(salary-paye-nssf-nhif).toFixed(1)}`;
        } catch(err) {
            document.getElementById("gross-display").innerHTML =`${err}`;
        }
    } else {
        document.getElementById("gross-display").innerHTML ="Error: Invalid input, try again...";
    }
  }