import { useNavigate } from 'react-router-dom'
import cognitoUserPool from '../UserPool';

function Registration() {
  
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
        cognitoUserPool.signUp(data.email, data.password, [], null, (err, data) => {
          if(!err) {
            navigate('../login');
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
      <button type="submit">Registr</button>
      </form>
      <button style={{width: 300}} onClick={() => navigate('../login')}>to login</button>
    </div>
  )
}

export default Registration;