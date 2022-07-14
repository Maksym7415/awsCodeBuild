import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: 'us-east-2_Lw3pTIJsa',
  ClientId: '3gqf29i8kntaik6eg9g306vdd1'
}

const cognitoUserPool = new CognitoUserPool(poolData)

export default cognitoUserPool