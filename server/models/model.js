const mongoose = require('mongoose')
const fs = require('fs');
const validator = require('validator')



// try{


    // let file = JSON.parse(fs.readFileSync('objects.txt'))
    // for(let [key,value] of Object.entries(file)){
    //     for (let[ckey,cvalue] of Object.entries(value)){
    //         if(ckey==='validator'){
    //         let newValue = cvalue.parseFunction()    
    //         ckey = newValue
    //         }
    //     }
    // }
 

    // console.log(file)
    
    function parseFunction (str) {
        var fn_body_idx = str.indexOf('{'),
            fn_body = str.substring(fn_body_idx+1, str.lastIndexOf('}')),
            fn_declare = str.substring(0, fn_body_idx),
            fn_params = fn_declare.substring(fn_declare.indexOf('(')+1, fn_declare.lastIndexOf(')')),
            args = fn_params.split(',');
      
        args.push(fn_body);
      
        function Fn () {
          console.log(Function.apply(this, args));
        }
        Fn.prototype = Function.prototype;
          
        return new Fn();
      }
     parseFunction('fun=(a,b)=>{return }')

//     const objectSchema = mongoose.Schema(newObject)
    
    

// const objectModel = mongoose.model('Model',objectSchema)
// module.exports = objectModel

// }
// catch(e){
    
// }