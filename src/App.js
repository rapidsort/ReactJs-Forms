import React, { Component } from 'react';
import './App.css';
import FormField from './components/ui/FormFields/FormField';

class App extends Component {
  state={
    createForm:{
      first_name:{
        type:'text',
        label: 'no',
        value:'',
        attributes:{
          placeholder: 'First Name',
          className:'input',
          name:'first_name',
          value:''
        },
        validation:{
          min:3,
          max:10,
          required:"required",
        }
      },

      address:{
        type:'textarea',
        label: 'no',
        attributes:{
          placeholder: 'Address',
          className:'input',
          name:'address',
          value:''
        },
        validation:{
          min:3,
          max:10,
          required:"required",
        }
      },


      education:{
        type:'select',
        label: 'no',
        attributes:{
          placeholder: 'Education',
          className:'input',
          name:'education',
          value:'Inter'
        },
        options:[
          {label: "10th", value:"10th"},
          {label: "Inter", value:"Inter"},
          {label: "Degree", value:"Degree"}
        ],
        validation:{
          required:"required",
        }
      },


      gender:{
        type:'radio',
        label: 'no',
        attributes:{
          placeholder: 'Gender',
          className:'input',
          name:'gender',
          value:'male'
        },
        options:[
          {label: "Male", value:"male"},
          {label: "Female", value:"female"}
        ],
        validation:{
          required:"required",
        }
      },

      languages:{
        type:'checkbox',
        label: 'no',
        attributes:{
          placeholder: 'Languages',
          className:'input',
          name:'languages',
          value:''
        },
        options:[
          {label: "Telugu", value:"Telugu", selected:true},
          {label: "English", value:"English", selected:false},
          {label: "Hindi", value:"Hindi", selected:false}
        ],

        validation:{
          required:"required",
        }
      },




    }
  }



  inputChangedHandler = (event,key)=>{
    let oldFormData= {...this.state.createForm};
    // console.log(event.target.checked, event.target.value , key);
    if(oldFormData[key].type ==='checkbox'){
      oldFormData[key].options.forEach(single=>{
        if(event.target.value === single.value){
          single.selected=!single.selected;
        }
      });
      let finalSelectedOptions=[];
      oldFormData[key].options.forEach(single=>{
        if(single.selected){
              finalSelectedOptions.push(single.value);
          }
      });
      oldFormData[key].attributes.value = finalSelectedOptions;

    }else{
      oldFormData[key].attributes.value = event.target.value;
    }

    this.setState({createForm:oldFormData},()=>{
      console.log(this.state.createForm);
    })
  }

  buildForm= ()=>{
    let finalFields=[];
    for (let field in this.state.createForm){
      finalFields.push({key:field, fieldValues: this.state.createForm[field]});
      // console.log(field);
    }
    let finalForm=finalFields.map(item=>{
      return(<FormField fieldValues={item.fieldValues} inputChangedHandler={(event)=>this.inputChangedHandler(event,item.key)} key={item.key} />);
    });

    return finalForm;

  }

  render() {
    return (
      <div className="App">
        <form>
        
          {this.buildForm()}
       
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
