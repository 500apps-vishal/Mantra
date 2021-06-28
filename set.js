const ordersSet = new Set([      //set using remove the the duplicate values and used strings,arrays
    'Ram',
    'Virat',
    'Dhoni',
    'Jaddu',
    'Ram',
    'Virat',
    'Jaddu',
]);
console.log(ordersSet);
console.log(new Set ('vishal'));    //passing the string and iterable string values
console.log(ordersSet.size);
ordersSet.add('lallu');              //add the values
ordersSet.add('killa');
ordersSet.delete('killa');
console.log(ordersSet);              //delete the values

