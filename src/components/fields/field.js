import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default class Field extends Component {

     fieldParams = ["name", "type", "required"]


handleClick = ()=>{
    let functionArray = []
let newObj = {}
    for(let i = 0;i<this.props.count;i++){
        let name = document.querySelectorAll('.name')[i].value
        let type = document.querySelectorAll('.type')[i].value
        let required = document.querySelectorAll('.required')[i].value
        
        newObj[name] = {};
        newObj[name][this.fieldParams[1]] = (type);
        newObj[name][this.fieldParams[2]] = required ;
        let payman = document.querySelectorAll('.payman')[i].value
        let err = document.querySelectorAll('.error')[i].value
        if(payman!==undefined && err !==undefined){
        newObj[name].validator = `(value){ if(${payman}){throw new Error ('${err}')}}`
        }
    }
    console.log(newObj)
    console.log(functionArray)
    fetch('/main',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(newObj)
    })
}

    render() {

      let field = []
            for (let i = 0; i < this.props.count; i++) {
                field.push(
                    <div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">{this.fieldParams[0]}</label>
                        <input type="text" className="form-control name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">{this.fieldParams[1]}</label>
                        <input type="text" className="form-control type" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">{this.fieldParams[2]}</label>
                        <input type="text" className="form-control required" />
                    </div>
                    <div>
                <p>if (<input type="text" className="payman"/>) throw new error <input type="text" className = "error"/> </p>
                    </div>
                    <hr/>
                    </div>
            )
            
        }
        console.log(this.props.count)
        return (
            <div>
                {field}
                <Link className="btn btn-success" onClick={()=>{this.handleClick()}} to='/createData'>success</Link>
            </div>
        )
    }
}