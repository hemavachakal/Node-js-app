import React from "react";

export const FormErrors= ({formErrors}) => 
<div>

    {Object.keys(formErrors).map((fieldName,index) =>{
        if(formErrors[fieldName].length > 0){
        return(
        <p className="text-denger">{fieldName} {formErrors [fieldName]} </p>
            )
        }
        else{
        return('');
            }       
    })}
    </div>
    
