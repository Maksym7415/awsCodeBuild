import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  userPollId: '',
  clientId: ''
}

const cognitoUserPool = new CognitoUserPool(poolData)

export default cognitoUserPool