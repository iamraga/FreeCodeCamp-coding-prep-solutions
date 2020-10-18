function updateInventory(curInv, newInv) {
    // All inventory must be accounted for or you're fired!
    //Iterating new Items 
    for(let i=0; i<newInv.length; i++) {
        //matching with curInv
        let isFound = false;
        for(let j=0; j<curInv.length; j++) {
            //Checking item name
            if(curInv[j][1] === newInv[i][1]) {
                curInv[j][0] += newInv[i][0];
                isFound = true;
                continue;
            }
        }

        //Adding new item if not available
        if(!isFound) {
            curInv.push(newInv[i]);
        }
    }

    //Sort alphabetically
    curInv.sort((a,b) => {
        if(a[1] < b[1]) return -1;
        else return 1;
    });
    return curInv;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
