// handle errors
const zoneHandleErrors = (err) => {

    let errors = { };

  
    // incorrect password
    if (err.message === 'User not found') {
        errors['portfolio'] = err.message ;
    }

    // incorrect password
    if (err.message === 'User already have a portFolio') {
        errors['portfolio'] = err.message ;
    }

    // incorrect password
    if (err.message === 'PortFolio Not Created') {
        errors['portfolio'] = err.message ;
    }

    // incorrect password
    if (err.message.includes('PortFolio Objects') ) {
        errors['portfolio'] = err.message ;
    }

        // incorrect password
    if (err.message.includes('Portfolio Not found') ) {
        errors['portfolio'] = err.message ;
    }

    
    // validation errors
    if (err.message.includes('Portfolio validation failed')) {
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