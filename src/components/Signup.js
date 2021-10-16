import React ,{ useEffect, useState } from 'react';

import { ToastContainer } from 'react-toastify';
import {notify} from './toastify';

import { validate } from './validate';
import styles from './Signup.module.css';
import {Link} from 'react-router-dom';

function Signup() {

const[data, setData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword : "",
    isAccepted: false,
})
  //for errors handler
const [errors , setErrors]=useState({});
const[touched,setTouched]= useState({});

useEffect (()=>{
  setErrors(validate(data ,"signup"))
},[data ,touched])

const changeHandler = event =>{
    if(event.target.name === "isAccepted"){
        setData({...data, [event.target.name ]: event.target.checked })
    }else{
        setData({...data,[event.target.name]:event.target.value})
    }
}



const focusHandler = event => {                            //if we focuced on input show errors
  setTouched({...touched, [event.target.name]: true } )
}

const submitHandler = event =>{
 event.preventDefault();             //submit btn default reload everytime our page, this code prevent from that.
  if( !Object.keys(errors).length) { //if we click on btn sign up and our input was empty show us errors
  notify("your signed is successfully","success")                //khate bala yani age tole error hamon 0 bud(vaghti errori nadashtim delet mikard va tolesh 0 mishod)
  }else{
    notify("invalid data","error")
       setTouched({                  //un sharte touch bud ke jelogiri karde bud az show shodn errors vagrna error ha default show budn
         name :true,
         password:true,
         email:true,
         confirmPassword:true,
         isAccepted:true,
       })
  }
}

return(

    <div className={styles.container}>

     <form onSubmit={submitHandler} className={styles.formcontainer}>
      <h2 className={styles.header}>sign up</h2>
          <div className={styles.formField}>
            <label>Name</label>
             <input 
              className={errors.name && touched.name ? styles.uncompleted: styles.formInput}
              type="text" 
              name="name" 
              value={data.name} 
              onChange={changeHandler}
              onFocus={focusHandler}>
             
            </input>
              
               {errors.name && touched.name &&  <span>{errors.name}</span>}
          </div>

          <div className={styles.formField}>
            <label>Email</label>
            <input className={errors.email && touched.email ? styles.uncompleted: styles.formInput}
             type="text"
             name="email" 
             value={data.email} 
             onChange={changeHandler} 
             onFocus={focusHandler}>  
            </input>
               {errors.email && touched.email && <span>{errors.email}</span>}
          </div>

          <div className={styles.formField}>
            <label>Password</label>
            <input className={errors.password && touched.password ? styles.uncompleted: styles.formInput}
              type="password"
              name="password" 
              value={data.password} 
              onChange={changeHandler} 
              onFocus={focusHandler}>
            </input>
               {errors.password &&  touched.password && <span>{errors.password}</span>}
          </div>

          <div className={styles.formField}>
            <label>confirmPassword</label>
            <input className={errors.confirmPassword && touched.confirmPassword ? styles.uncompleted: styles.formInput}
             type="password" 
             name="confirmPassword" 
             value={data.confirmPassword}
             onChange={changeHandler} 
             onFocus={focusHandler}>   
            </input>
             {errors.confirmPassword &&  touched.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>

          <div className={styles.formField}>
            <div  className={styles.checkbox}>
            <label>i accept terms of privacy policy</label>
            <input
              type="checkbox" 
              name="isAccepted" 
              value={data.isAccepted} 
              onChange={changeHandler} 
              onFocus={focusHandler}>
            </input>
            </div>
             {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
          </div>

          <div className={styles.formbuttons}>
             <Link to="/login">login</Link>
              <button type="submit">signUp</button>
          </div>
          
     </form>
     <ToastContainer />
    </div>
);
};
export default Signup;
