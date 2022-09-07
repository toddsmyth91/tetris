function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Shape {
    constructor(colour = '#ff0000', cells, height, width, rotation = 0, startRow = 0, startCol = 0){
        this.colour = colour;
        this.cells = cells;
        this.height = height;
        this.width = width;
        this.rotation = rotation;
        this.startRow = startRow;
        this.startCol = startCol;
    }

    returnCells() {
        return this.cells;
    }

    returnRotation() {
        return this.rotation;
    }

    returnStartRow() {
        return this.startRow;
    }

    returnStartCol() {
        return this.startCol;
    }

    returnHeight() {
        return this.height;
    }

    returnWidth() {
        return this.width;
    }

    returnColour() {
        return this.colour;
    }
}

function drawShape(shape, startRow, startCol, show){
    // console.log('drawing shape');
    if(shape.returnRotation() == 0){
        // rotation = 0 
        // -- rows 0 -> 9
        // -- width = row
        // -- height = col
        var currentRow = 0;
        var currentCol = 0;
        for(var x = 0; x < shape.returnWidth(); x++){
            for(var y = 0; y < shape.returnHeight(); y++){
                // var currentRow = x + shape.returnStartRow();
                // var currentCol = y + shape.returnStartCol();
                var currentRow = x + startRow;
                var currentCol = y + startCol;
                // console.log('colour in at '+currentRow+'-'+currentCol);
                // console.log('cell value: ' + shape.returnCells()[x][y]);
                if(!!shape.returnCells()[x][y] && currentRow < 10 && currentCol < 10){
                    if(show){
                        document.getElementById(currentRow+'-'+currentCol).style.backgroundColor = shape.returnColour();
                    } else {
                        document.getElementById(currentRow+'-'+currentCol).style.backgroundColor = '#fff';
                    }
                } else if(currentRow == 10 || currentCol == 10) {
                    console.error('Error trying to draw shape at '+currentRow+'-'+currentCol);
                }
            }
        }
    } else if(shape.returnRotation() == 90){
        // rotation = 90 -- cols 9 -> 0
        // -- width = col
        // -- height = row
        var currentRow = 0;
        var currentCol = 0;
        for(var x = 0; x < shape.returnWidth(); x++){
            for(var y = 0; y < shape.returnHeight(); y++){
                // var currentRow = x + shape.returnStartRow();
                // var currentCol = y + shape.returnStartCol();
                var currentRow = shape.returnWidth() - x + startRow;
                var currentCol = shape.returnHeight() - y + startCol;
                // console.log('colour in at '+currentCol+'-'+currentRow);
                // console.log('cell value: ' + shape.returnCells()[x][y]);
                if(!!shape.returnCells()[x][y] && currentRow < 10 && currentCol < 10){
                    if(show){
                        document.getElementById(currentCol+'-'+currentRow).style.backgroundColor = shape.returnColour();
                    } else {
                        document.getElementById(currentCol+'-'+currentRow).style.backgroundColor = '#fff';
                    }
                } else if(currentRow == 10 || currentCol == 10) {
                    console.error('Error trying to draw shape at '+currentRow+'-'+currentCol);
                }
            }
        }
    } else if(shape.returnRotation() == 180){
        // rotation = 180 -- rows 9 -> 0
        // -- width = row
        // -- height = col
        var currentRow = 0;
        var currentCol = 0;
        for(var x = 0; x < shape.returnWidth(); x++){
            for(var y = 0; y < shape.returnHeight(); y++){
                // var currentRow = x + shape.returnStartRow();
                // var currentCol = y + shape.returnStartCol();
                var currentRow = shape.returnWidth() - x + startRow;
                var currentCol = shape.returnHeight() - y + startCol;
                // console.log('colour in at '+currentRow+'-'+currentCol);
                // console.log('cell value: ' + shape.returnCells()[x][y]);
                if(!!shape.returnCells()[x][y] && currentRow < 10 && currentCol < 10){
                    if(show){
                        document.getElementById(currentRow+'-'+currentCol).style.backgroundColor = shape.returnColour();
                    } else {
                        document.getElementById(currentRow+'-'+currentCol).style.backgroundColor = '#fff';
                    }
                } else if(currentRow == 10 || currentCol == 10) {
                    console.error('Error trying to draw shape at '+currentRow+'-'+currentCol);
                }
            }
        }
        
    } else if(shape.returnRotation() == 270){
        // rotation = 270 -- cols 0 -> 9
        // -- width = col
        // -- height = row
        var currentRow = 0;
        var currentCol = 0;
        for(var x = 0; x < shape.returnWidth(); x++){
            for(var y = 0; y < shape.returnHeight(); y++){
                // var currentRow = x + shape.returnStartRow();
                // var currentCol = y + shape.returnStartCol();
                var currentRow = x + startRow;
                var currentCol = y + startCol;
                // console.log('colour in at '+currentRow+'-'+currentCol);
                // console.log('cell value: ' + shape.returnCells()[x][y]);
                if(!!shape.returnCells()[x][y] && currentRow < 10 && currentCol < 10){
                    if(show){
                        document.getElementById(currentCol+'-'+currentRow).style.backgroundColor = shape.returnColour();
                    } else {
                        document.getElementById(currentCol+'-'+currentRow).style.backgroundColor = '#fff';
                    }
                } else if(currentRow == 10 || currentCol == 10) {
                    console.error('Error trying to draw shape at '+currentRow+'-'+currentCol);
                }
            }
        }

    }
}

// function hideShape(shape, startRow, startCol){
//     // console.log('drawing shape');
//     if(shape.returnRotation() == 0){
//         // rotation = 0 
//         // -- rows 0 -> 9
//         // -- width = row
//         // -- height = col
//         var currentRow = 0;
//         var currentCol = 0;
//         for(var x = 0; x < shape.returnWidth(); x++){
//             for(var y = 0; y < shape.returnHeight(); y++){
//                 // var currentRow = x + shape.returnStartRow();
//                 // var currentCol = y + shape.returnStartCol();
//                 var currentRow = x + startRow;
//                 var currentCol = y + startCol;
//                 // console.log('colour in at '+currentRow+'-'+currentCol);
//                 // console.log('cell value: ' + shape.returnCells()[x][y]);
//                 if(!!shape.returnCells()[x][y]){
//                     document.getElementById(currentRow+'-'+currentCol).style.backgroundColor = '#fff';
//                 }
//             }
//         }

//     } else if(shape.returnRotation()  == 90){
//         // rotation = 90 -- cols 9 -> 0

//     } else if(shape.returnRotation()  == 180){
//         // rotation = 180 -- rows 9 -> 0
        
//     } else if(shape.returnRotation()  == 270){
//         // rotation = 270 -- cols 0 -> 9
        
//     }
// }

async function randomRedSquares(){
    var randomRow = 0;
    var randomCol = 0;
    for(var i = 0; i < 50; i++){
        if(i > 0){
            document.getElementById(randomRow+'-'+randomCol).style.backgroundColor = '#fff';
        }
        randomRow = Math.floor(Math.random() * 10);
        randomCol = Math.floor(Math.random() * 10);
        document.getElementById(randomRow+'-'+randomCol).style.backgroundColor = '#ff0000';
        await sleep(500);

        if(i == 49){
            document.getElementById(randomRow+'-'+randomCol).style.backgroundColor = '#fff';
        }
    }
}

// async function allTetrisShapes(){
//     // constructor(cells, height, width, rotation = 0, startRow = 0, startCol = 0){
//     var square = new Shape('#F6F743', [[1,1],[1,1]], 2, 2);
//     // console.log(square.returnCells());  
//     // console.log(square.returnRotation());  
//     // drawShape(square);  

//     var tbar = new Shape('#F740F7', [[1,1,1],[0,1,0]], 3, 2, 0, 0, 3);
//     // console.log(tbar.returnCells());  
//     // console.log('Rotation:' + tbar.returnRotation());  
//     // console.log('Start Row:' + tbar.returnStartRow());  
//     // console.log('Start Col:' + tbar.returnStartCol());  
//     // drawShape(tbar);  

//     var zbar = new Shape('#43F640', [[1,1,0],[0,1,1]], 3, 2, 0, 0, 7);
//     // console.log(zbar.returnCells());  
//     // console.log('Rotation:' + zbar.returnRotation());  
//     // console.log('Start Row:' + zbar.returnStartRow());  
//     // console.log('Start Col:' + zbar.returnStartCol());  
//     // drawShape(zbar);   

//     var lbar = new Shape('#F68201', [[1,1,1],[1,0,0]], 3, 2, 0, 3, 0);
//     // console.log(lbar.returnCells());  
//     // console.log('Rotation:' + lbar.returnRotation());  
//     // console.log('Start Row:' + lbar.returnStartRow());  
//     // console.log('Start Col:' + lbar.returnStartCol());  
//     // drawShape(lbar);   

//     var bar = new Shape('#43F6F6', [[1,1,1, 1],[]], 4, 1, 0, 3, 4);
//     // console.log(bar.returnCells());  
//     // console.log('Rotation:' + bar.returnRotation());  
//     // console.log('Start Row:' + bar.returnStartRow());  
//     // console.log('Start Col:' + bar.returnStartCol());  
//     // drawShape(bar);   
// }

async function randomTetrisShapes(){
// constructor(cells, height, width, rotation = 0, startRow = 0, startCol = 0){
    var randomRow = 0;
    var randomCol = 0;
    var square = new Shape('#F6F743', [[1,1],[1,1]], 2, 2);
    var tbar = new Shape('#F740F7', [[1,1,1],[0,1,0]], 3, 2);
    var zbar = new Shape('#43F640', [[1,1,0],[0,1,1]], 3, 2);
    var lbar = new Shape('#F68201', [[1,1,1],[1,0,0]], 3, 2);
    var bar = new Shape('#43F6F6', [[1,1,1, 1],[]], 4, 1);
    var shape = square;
    // these only work if there is no rotation
    var maxRow = 0;
    var maxCol = 0;
    switch(shape.returnRotation()){
        case 0: 
        case 270:
            maxRow = 11 - shape.returnWidth();
            maxCol = 11 - shape.returnHeight();
            break;
        case 90:
        case 180:
            maxCol = 11 - shape.returnWidth();
            maxRow = 11 - shape.returnHeight();
            break;
        default:
            maxRow = 0;
            maxCol = 0;
    }
    for(var i = 0; i < 10; i++){
        if(i > 0){
            drawShape(shape, randomRow, randomCol, false);
        }
        randomRow = Math.floor(Math.random() * maxRow);
        randomCol = Math.floor(Math.random() * maxCol);
        drawShape(shape, randomRow, randomCol, true);
        await sleep(500);
    }
}

// randomRedSquares();
// allTetrisShapes();
randomTetrisShapes();

