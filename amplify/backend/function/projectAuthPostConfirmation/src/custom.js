var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
  
  let date = new Date();
  if (event.request.userAttributes.sub){
    console.log(event.request.userAttributes);
    let params = {
      Item : {
        'id' : { S: event.request.userAttributes.sub },
        '__typename' : {S: 'User'},
        'email' : { S: event.request.userAttributes.email },
        'birth_date': { S: event.request.userAttributes.birthdate },
        'name' : { S: event.request.userAttributes.name },
        'createdAt': { S: date.toISOString() },
        'updatedAt': { S: date.toISOString() },
      },
      TableName: process.env.USERTABLE
    }

    try {
      await ddb.putItem(params).promise()
      console.log("Success")
    } catch (error) {
      console.log(error)
      return error;
    }
    
  } else {
    console.log("Error: Nothing was written to DynamoDB");
    context.done(null, event);
  }
};
