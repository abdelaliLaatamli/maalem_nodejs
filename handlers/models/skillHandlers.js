// handle errors
const skillHandleErrors = (err) => {

    let errors = { };

  
    // incorrect password
    if (err.message === 'Skill Not found') {
        errors['skill'] = err.message ;
    }
  
    // duplicate email error
    if (err.code === 11000) {
        errors['name'] = 'skill name already existe';
    }
  
    // validation errors
    if (err.message.includes('skill validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
   
    // TODO: ... add more handlers
    errors['err'] = err.message;
    // console.log()
    return errors;
}

module.exports = skillHandleErrors; 