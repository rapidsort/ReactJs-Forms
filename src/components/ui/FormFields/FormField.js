import React from 'react';

const FormField = (props) => {
    let returnField=null;

    switch(props.fieldValues.type){

        case ('text'):
        returnField = <input type={props.fieldValues.type} {...props.fieldValues.attributes} {...props.fieldValues.validation} onChange={(event)=>props.inputChangedHandler(event)} />
        break;

        case ('textarea'):
        returnField = <textarea type={props.fieldValues.type} {...props.fieldValues.attributes} {...props.fieldValues.validation} onChange={(event)=>props.inputChangedHandler(event)} />
        break;

        case ('select'):
        returnField = (<select type={props.fieldValues.type} {...props.fieldValues.attributes} {...props.fieldValues.validation} onChange={(event)=>props.inputChangedHandler(event)}>
        <option value=''>Select {props.fieldValues.attributes.placeholder}</option>
        {props.fieldValues.options.map(single=>{
            return <option value={single.value} key={single.value}>{single.label}</option>;
        })}
        </select>)
        break;

        case ('radio'):
        returnField = (<div>
            {props.fieldValues.options.map(single=>{
            return <label key={single.value}><input type={props.fieldValues.type} {...props.fieldValues.attributes} {...props.fieldValues.validation} onChange={(event)=>props.inputChangedHandler(event)} value={single.value} checked={single.value===props.fieldValues.attributes.value} />{single.label}</label>;
        })}
        </div>)
        break;


        case ('checkbox'):
        returnField = (<div>
    

        {props.fieldValues.options.map(single=>{
            return <label key={single.value}><input type={props.fieldValues.type} {...props.fieldValues.attributes} {...props.fieldValues.validation} onChange={(event)=>props.inputChangedHandler(event)} value={single.value} checked={single.selected} />{single.label}</label>;
        })}

        </div>)
        break;

        default:
        returnField = <input type={props.fieldValues.type} {...props.fieldValues.attributes} {...props.fieldValues.validation} onChange={(event)=>props.inputChangedHandler(event)} />

    }
    return returnField;
}

export default FormField;