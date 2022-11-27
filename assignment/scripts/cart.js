console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    console.log('in addItem, added', item);
    basket.push(item);
    return true;
}

console.log(addItem('blueberries'));
console.log(addItem('peaches'));

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);


function listItems(basket) {
    for (let i=0; i<basket.length; i++){
    console.log(basket[i]);
    } 
}

console.log(listItems(basket));

//function empty(basket){
    //console.log('start empty', basket);
    //while (basket.length > 0){
        //console.log('in empty', basket);
        //basket.pop();
    //}
    //return true;
//}

function empty(basket){
    basket = [];
 return (basket);
}
console.log("Basket is empty", empty(basket));