/**
 * the code checks Local Storage for user item. If there is a logged in user with accessToken (JWT), return HTTP Authorization header. Otherwise, return an empty object.
 */

export default authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user.accessToken) {
      // for Spring Boot back-end
     return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return{}
}
}