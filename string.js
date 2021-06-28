const apps = 'mantra technologies';
const name = '500 apps.com';

console.log(apps[0]);
console.log(apps[1]);
console.log(apps[2]);
console.log(apps[3]);
const app = (apps.replace('m','M').replace('a','A')); //replace the values 
console.log(app);

console.log(name.length);
console.log(apps.indexOf('h'));
console.log(name.lastIndexOf('p'));
console.log(apps.slice(5));
console.log(apps.slice(6,15));
console.log(apps.slice(-3));


const middleseat = function (seat){
    //B and E are middle seats
    const s = seat.slice(-1);
    if (s ==='b'|| s ==='e')
    console.log('middles class seat');
    else
    console.log('next middle class seat avialable');

};
middleseat('11b');                  //calling method
middleseat('342');

console.log(new String('vishal'));
console.log(typeof new String('vishal'));

