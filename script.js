// Going to blog page
document.getElementById('blog-btn').addEventListener('click', function() {
    window.location.href = 'blog.html'
})





// get input value
function getInputValue(id){
    const value = document.getElementById(id).value;
    return parseInt(value);
}


let num = 0;
// Add element to card
function addElement(name, area) {
    const tableBody = document.getElementById('table-body');

    const t_row = document.createElement('tr');

    t_row.innerHTML =`
        <td>${num}. ${name}</td>
        <td>${area}cm<sup>2</sup></td>
        <td> <button class="btn btn-primary ">Convert m<sup>2</sup></button> </td>
    `
    tableBody.appendChild(t_row);
}




// Triangle calculation.
document.getElementById('card1-btn').addEventListener('click', function(){
    num += 1;
    const triangleBase = getInputValue('triangle-base');
    const triangleHeight = getInputValue('triangle-hight');
    const triangleName = getInnerTextValue("card-1-name");
    if(isNaN(triangleBase) && isNaN(triangleHeight)) {
        alert('enter a valid number');

    }

    else{
        // add Element by click

        let triangleArea = parseFloat(0.5 * triangleBase * triangleHeight).toFixed(2);
        addElement(triangleName, triangleArea);
    }

})

// Rectangle calculation.
document.getElementById('card-2-btn').addEventListener('click', function(){
    num+= 1;
    const rectangleWidth = getInputValue('rectangle-width');
    const rectangleLength = getInputValue('rectangle-length');
    const rect_name = getInnerTextValue('card-2-name')

    let rectangleArea = parseFloat(rectangleLength * rectangleWidth).toFixed(2);


    addElement(rect_name, rectangleArea);
})


// get innerText
function getInnerTextValue(id) {
    const text_value = document.getElementById(id).innerText;
    return text_value;
}

// Parallelogram calculation  
document.getElementById('card-3-btn').addEventListener('click', function(){

    num+=1;
    // Add element
    const parallelogramBase = getInnerTextValue('parallelogram-base');
    const parallelogramHeight = getInnerTextValue('parallelogram-height');
    const parallelogramName = getInnerTextValue('card-3-name')
    let parallelogramArea = parseFloat(parallelogramBase * parallelogramHeight).toFixed(2);

    // console.log(parallelogramBase, parallelogramHeight, parallelogramArea);

    // Show element
    addElement(parallelogramName, parallelogramArea);

})

// Rhombus calculation  
document.getElementById('card-4-btn').addEventListener('click', function(){

    num+=1;
    // Add element
    const rhombus_side_1 = getInnerTextValue('sid-1');
    const rhombus_side_2 = getInnerTextValue('sid-2');
    const RhombusName = getInnerTextValue('card-4-name')
    let RhombusArea = parseFloat(0.5 * rhombus_side_1 * rhombus_side_2).toFixed(2);

    // console.log(parallelogramBase, parallelogramHeight, parallelogramArea);

    // Show element
    addElement(RhombusName, RhombusArea);
})



// Pentagon calculation  
document.getElementById('card-5-btn').addEventListener('click', function(){

    num+=1;
    // Add element
    const pentagon_p = getInnerTextValue('pentagon-p');
    const pentagon_b = getInnerTextValue('pentagon-b');
    const pentagonName = getInnerTextValue('card-5-name')
    let pentagonArea = parseFloat(0.5 * pentagon_b * pentagon_p).toFixed(2);

    // console.log(parallelogramBase, parallelogramHeight, parallelogramArea);

    // Show element
    addElement(pentagonName, pentagonArea);
})

// Pentagon calculation  
document.getElementById('card-6-btn').addEventListener('click', function(){

    num+=1;
    // Add element
    const axis_a = getInnerTextValue('axis_a');
    const axis_b = getInnerTextValue('axis_b');
    const ellipseName = getInnerTextValue('card-6-name')
    let ellipseArea = parseFloat(3.1416 * axis_a * axis_b).toFixed(2);

    // console.log(parallelogramBase, parallelogramHeight, parallelogramArea);

    // Show element
    addElement(ellipseName, ellipseArea);
})