const data=[
    'schem',
    'jonus',
    1991,
     'SoftwareDevoloper',
    ['sam','peter','setev'],true];
    const type=[];


    for (let i = 1;i <= 5; i++)
    {
        console.log(data[i],typeof data[i]);
    type [i] = typeof data[i]
    }

    console.log(type);

    const years=[1999,1998,2000,1997,1995];
    const age=[];
    for (let i=0; i <= years.length; i++)
    {
        age.push (2020-years[i]);
    }
    console.log(age);
    

    //continue and break statement
    


    for (let i = 1;i <= data.length; i++)
    {
        if(typeof data[i] !== 'string') continue;

        console.log(data[i],typeof data[i]);
    }

    //break statement

for (let i = 1;i <= data.length; i++)
    {
        if(typeof data[i] === 'number') break;

        console.log(data[i],typeof data[i]);
    }

//looping statement
    let rep=1;
    while(rep <= 5){
    console.log('hii');
    rep++;
}