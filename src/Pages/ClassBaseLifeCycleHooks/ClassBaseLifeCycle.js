import React from 'react';
import TodoContainer from './TodoContainer';

const ClassBaseLifeCycle = () =>{
    return(
        <section className="py-5 border-bottom">
            <div className="container px-5 my-5 px-5">
            <div className="text-center mb-5">
            <h1>"The only think that counts is a satisfied customer"</h1>
            </div>
            <TodoContainer/>
            </div>
            </section>
       
    )
}

export default ClassBaseLifeCycle;