/**
 * the code checks Local Storage for user item. If there is a logged in user with accessToken (JWT),
 *  return HTTP Authorization header. Otherwise, return an empty object.
 */

export default authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user, 'user')
    if (user && user.accessToken) {
     return {'x-access-token': + user.accessToken };
    } else {
      return {}
  }
  
}