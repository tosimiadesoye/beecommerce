exports.Validatesignup = ()=>{
    let errors = {}
    if (!values.username) {
        errors.username = "Username is required"
    }
    if (!values.email) {
        errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Enter a valid Email address"
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters long"
    }
    return errors
}