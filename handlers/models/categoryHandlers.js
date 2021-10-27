// handle errors
const categoryHandleErrors = (err) => {

    let errors = { };

  
    // incorrect password
    if (err.message === 'Category Not found') {
        errors['category'] = 'Category Not found';
    }
  
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