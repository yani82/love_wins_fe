//use switch case 
// S = "" 
// access each case properly 
// https://www.hackerrank.com/challenges/one-month-preparation-kit-simple-text-editor/problem

function textEditor(ops) {

    let S = ""

    for (let i = 0; i < ops.length; i++) {
        // evaluating one at a time 
        let operation = parseInt(ops[i].charAt(0))
        let arguement = ops[i].split(" ")[1]

        switch(operation) {
            case 1: 
            S += arguement 
            // "APPEND"
                console.log(S)
                break;
            case 2: 
                console.log("DELETE")
                break; 
            case 3: 
                console.log("PRINT")
                break; 
            case 4: 
                console.log("UNDO")
                break;    
        }

    }

}

textEditor(["1 fg", "3 6", "2 5", "4", "3 7", "4", "3 4"])
