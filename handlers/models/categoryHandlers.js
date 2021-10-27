// handle errors
const categoryHandleErrors = (err) => {

    let errors = { };
  
    // // incorrect email
    // if (err.message === 'incorrect email') {
    //   errors['email'] = 'That email is not registered';
    // }
  
    // // incorrect password
    // if (err.message === 'incorrect password') {
    //     errors['password'] = 'That password is incorrect';
    // }

    // // incorrect password
    // if (err.message === 'User not Found') {
    //     errors['user'] = 'This user is not found';
    // }
  
    // duplicate email error
    if (err.code === 11000) {
        errors['name'] = 'category name already existe';
    }
  
    // validation errors
    if (err.message.includes('category validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
   
    // TODO: ... add more handlers
    errors['err'] = err.message;
    // console.log()
    return errors;
}

module.exports = categoryHandleErrors; 