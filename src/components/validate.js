 export const validate = (data,type) =>{
 
    const errors = {} 

    //login errors
    //email errors
    if( !data.email){
        errors.email=" Email required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "your email is incorrect"
    }else{
        delete errors.email
    }

    //password errors
    if(!data.password){
        errors.password ="password required"
    }else if(data.password.length < 8){
        errors.password = " password must be 8 or more characters "
    }else{
        delete errors.password
    }

    
    //signup errors
    if(type ==="signup" ){
    //name errors
     if(!data.name.trim()){
    errors.name = " Name required"
    }else{
    delete errors.name
    }

    //confirmPassword errors
    if(!data.confirmPassword){
        errors.confirmPassword =" Confirm the password "
    }else if( data.confirmPassword !== data.password){
        errors.confirmPassword = " password is not match "
    }else{
        delete errors.confirmPassword
    }

    //Accepted errors
    if(data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted ="accpet our regulations "
    }

    
    }

    return errors;
}