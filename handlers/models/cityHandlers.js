// handle errors
const zoneHandleErrors = (err) => {

    let errors = { };

  
    // incorrect password
    if (err.message === 'City Not found') {
        errors['skill'] = err.message ;
    }
  
    // duplicate email error
    if (err.code === 11000) {
        errors['name'] = 'city name already existe';
    }
  
    // validation errors
    if (err.message.includes('City validation failed')) {
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