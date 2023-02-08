import React from 'react';
import { FormErrors } from './FormErrors';

class ContactUs extends React.Component{
    constructor(props){
        super(props);
            this.state={
                name:'',
                email:'',
                phone:'',

               nameValid:false,
                emailaddresValid:false,
                phoneValid:false,
                formValid:false,
            
            formErrors: {

                name:"",
                email:"",
                phone:""
                        }
            }
    }
            handelUserInput = (event) =>{
                const fieldName = event.target.name;
                const fieldValue= event.target.value;

                this.setState({[fieldName]:fieldValue}, () =>{
                    this.validateField(fieldName,fieldValue)
                })
            }

            validateField(fieldName,fieldValue)
            {
                let fieldValidationErrors = this.state.formErrors;
                let nameValid = this.state.nameValid;
                let emailaddresValid = this.state.emailaddresValid; 
                let phoneValid = this.state.phoneValid;
                

                switch(fieldName){
                    case "name":
                        nameValid= fieldValue.match(/^[a-zA-Z\s]{5,8}$/);
                        fieldValidationErrors.name = nameValid ? "" : "is invalid";

                        break; 
                    case "email":
                        emailaddresValid= fieldValue.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
                        fieldValidationErrors.email = emailaddresValid ?"" : "is invalid" ;

                        break;
                    case "phone":
                        phoneValid = fieldValue.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
                        fieldValidationErrors.phone = phoneValid  ? "" : "is invalid" ;
                    default:
                    break;

                }

                this.setState({formErrors: fieldValidationErrors,nameValid:nameValid, emailaddresValid:emailaddresValid, phoneValid:phoneValid }, this.validForm);
               
            
            }   

            validForm()
            {
                this.setState({
                    formValid: this.state.nameValid && this.state.emailaddresValid && this.state.phoneValid
                })
            }
    
   


    render(){
        return(
            <section className="bg-light py-5">
            <div className="container px-5 my-5 px-5">
            <div className="text-center mb-5">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                <h2 className="fw-bolder">Get in touch</h2>
                <p className="lead mb-0">We'd love to hear from you</p>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-6">
                  
                    <form id="contactForm">
                     
                     <div className='form-floating mb-3 row'>
                        <div className='col-12'>
                        <FormErrors formErrors= {this.state.formErrors}/>
                        </div>
                     </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" id="name" type="text" placeholder="Enter your name..." value={this.state.name} onChange={this.handelUserInput} />
                            <label>Full name</label>
                          
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input className="form-control" id="email" type="email" placeholder="name@example.com" value={this.state.email}  onChange={this.handelUserInput} />
                            <label>Email address</label>
                          
                        </div>
                       
                        <div className="form-floating mb-3">
                            <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" value={this.state.phone}  onChange={this.handelUserInput} />
                            <label>Phone number</label>
                           
                        </div>
                       
                       
                        <div className="d-grid"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit" disabled={!this.state.formValid}>Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
        )
    }
}


export default ContactUs;