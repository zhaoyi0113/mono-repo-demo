// import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb';

export const isEven = (x: number) => x % 2 === 0;
// const dynamodbClient = new DynamoDBClient({
//   endpoint: 'localhost:8000',
//   region: 'local-env',
//   credentials: {
//     accessKeyId: 'fakeMyKeyId',
//     secretAccessKey: 'fakeSecretAccessKey',
//   },
// });

export const notCoverage = async () => {
  // const output = await dynamodbClient.send(
  //   new QueryCommand({
  //     TableName: 'Entities',
  //     KeyConditionExpression: 'id = :id',
  //     ExpressionAttributeValues: { ':id': { S: 'posinterface.pair.site' } },
  //   })
  // );
  // console.log('xxx:', output);
};
