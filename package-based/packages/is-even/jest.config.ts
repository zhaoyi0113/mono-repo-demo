import path from 'path';

/* eslint-disable */
process.env.JEST_DYNAMODB_CONFIG = path.resolve(__dirname, './jest-dynamodb-config');

console.log('JEST_DYNAMODB_CONFIG:', process.env.JEST_DYNAMODB_CONFIG);

export default {
  displayName: 'is-even',
  preset: '../../jest.preset.js',
};
