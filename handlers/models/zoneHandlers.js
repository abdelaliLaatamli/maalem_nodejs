// handle errors
const zoneHandleErrors = (err) => {

    let errors = { };

  
    // incorrect password
    if (err.message === 'Zone Not found') {
        errors['skill'] = err.message ;
    }
  
    // duplicate email error
    if (err.code === 11000) {
        errors['name'] = 'zone name already existe';
    }
  
    // validation errors
    if (err.message.includes('Zone validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
   
    // TODO: ... add more handlers
    errors['err'] = err.message;
    // console.log()
    return errors;
}

module.exports = zoneHandleErrors; 