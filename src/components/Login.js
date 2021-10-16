import React ,{ useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { validate } from './validate';
import {notify} from './toastify';
import styles from './Signup.module.css';
import {Link} from 'react-router-dom';

function Login() {

const[data, setData]=useState({
    email:"",
    password:"",
})

  //for errors handler
const [errors , setErrors]=useState({});
const[touched,setTouched]= useState({});

useEffect (()=>{
  setErrors(validate(data,"login"))
},[data ,touched])

const changeHandler = event =>{
        setData({...data,[event.target.name]:event.target.value})
    }


//if we focuced on input show errors

const focusHandler = event => {
  setTouched({...touched, [event.target.name]: true } )
}

const submitHandler = event =>{
 event.preventDefault();             //submit btn default reload everytime our page, this code prevent from that.
  if( !Object.keys(errors).length) { //if we click on btn sign up and our input was empty show us errors
  notify("your login is successfully","success")                //khate bala yani age tole error hamon 0 bud(vaghti errori nadashtim delet mikard va tolesh 0 mishod)
  }else{
    notify("invalid data","error")
       setTouched({                  //un sharte touch bud ke jelogiri karde bud az show shodn errors vagrna error ha default show budn
         password:true,
         email:true,
        
       })
  }
}

return(

    <div className={styles.container}>

     <form onSubmit={submitHandler} className={styles.formcontainer}>
       
      <h2 className={styles.header}>Login</h2>
         
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

         
          <div className={styles.formbuttons}>
             <Link to="/signup">signup</Link>
              <button type="submit">login</button>
          </div>
          
     </form>
     <ToastContainer />
    </div>
);
};
export default Login;
