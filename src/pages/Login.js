import cognitoUserPool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column', rowGap: 15}}>
      <form onSubmit={(event) => {
        event.preventDefault();
        const data = {}
        Object.values(event.target).forEach((item) => {
          if(item.localName === 'input') {
            data[item.name] = item.value
          }
        })
        const user = new CognitoUser({
          Username: data.email,
          Pool: cognitoUserPool
        })
        const authDetails = new AuthenticationDetails({
          Username: data.email,
          Password: data.password
        })

        user.authenticateUser(authDetails, {
          onSuccess: (data) => {
            localStorage.setItem('@awsToken', data.accessToken.jwtToken)
            navigate('../')
          },
          onFailure: (err) => {
            console.log(err)
          }
        })
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 15,
        width: 300,
      }}
      >
      <input placeholder="Email" name='email'/>
      <input type='password' placeholder="Password" name="password"/>
      <button type="submit">Login</button>
      </form>
      <button style={{width: 300}} onClick={() => navigate('../registration')}>to registr</button>
    </div>
  )
}

export default Login;