// handle errors
const resourcesHandleErrors = (err) => {

    let errors = { };

  
    // incorrect password
    if (err.message === 'Resource Not found') {
        errors['resource'] = err.message ;
    }
  
    // duplicate email error
    if (err.code === 11000) {
        errors['name'] = 'resource name already existe';
    }
  
    // validation errors
    if (err.message.includes('Resource validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
   
    // TODO: ... add more handlers
    errors['err'] = err.message;
    // console.log()
    return errors;
}

module.exports = resourcesHandleErrors; 