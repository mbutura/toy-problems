function myFunction() {
    let mark = prompt("Please enter marks", null);
    let grade;
    if (mark != null) {
        try {
            mark = parseInt(mark, 10);
            if (isNaN(mark) || mark < 0 || mark > 100 ) throw "Error: Invalid input, try again...";
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