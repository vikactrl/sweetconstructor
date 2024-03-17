let button = document.getElementById("ok");

function checkinputs(inputs) {
    let massiv = new Array();
    for (var i = 0; i < inputs.length; i++) {
        console.log(typeof inputs[i]);
        if (inputs[i].checked == true) {
            console.log(inputs[i].value);
            massiv.push(inputs[i].value);
        }
    }
    return massiv
}

function getitem1() {
    let input1 = document.getElementById("product1.1");
    let input2 = document.getElementById("product1.2");
    let input3 = document.getElementById("product1.3");
    let input4 = document.getElementById("product1.4");
    let input5 = document.getElementById("product1.5");
    let input6 = document.getElementById("product1.6");
    let input7 = document.getElementById("product1.7");
    let inputs = new Array(input1, input2, input3, input4, input5, input6, input7);
    let massiv = checkinputs(inputs);
    return massiv
}

function getitem2() {
    let input1 = document.getElementById("product2.1");
    let input2 = document.getElementById("product2.2");
    let input3 = document.getElementById("product2.3");
    let input4 = document.getElementById("product2.4");
    let inputs = new Array(input1, input2, input3, input4);
    let massiv = checkinputs(inputs);
    return massiv
}


button.onclick = function(){
    if (document.title === 'Выбор товара') {
        localStorage.setItem('item1', getitem1());
    }
    else if (document.title === 'Выбор упаковки') {
        localStorage.setItem('item2', getitem2());
    }
}




