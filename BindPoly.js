const person1 = {
    name :"mani",
    lastName : "bharathi"
}
const printName = function(city,state,country){
    console.log(`${this.name} ${this.lastName} ${city}  ${state} ${country}`)
}

//using bind method
const bind1 = printName.bind(person1,"tanjore","tamilNadu")

bind1("india")

Function.prototype.customBind = function(...args){
    const details = args.slice(1)
   /// console.log(args)
   // console.log(details)
    
    const func = this

    return function (...arg1) {
        console.log(arg1)
        func.apply(args[0],[...details,...arg1])
    }
}

const bind2 = printName.customBind(person1,"tanjore","tamilNadu")
bind2("india")