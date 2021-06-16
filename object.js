
const jones={
    firstname:'john',
    lastname:'schem',
    bod:1991,
    job: 'SoftwareDevoloper',
    friends:['sam','peter','setev'],
    hasDriver:false,
    //calcAge: function(bod){
       // return 2032-bod;
    //}
    calcAge:function(){
       //console.log(this);
        return 2032-this.bod;
    },
    getSummary:function(){
        return `${this.firstname} is a ${this.calcAge()} years old 
        ${this.job}, and he has ${this.hasDriver ?'a':'no'} driver license`
    }
};
console.log(jones.calcAge());
//console.log(jones['calcAge'](1991));
console.log(jones.getSummary())

