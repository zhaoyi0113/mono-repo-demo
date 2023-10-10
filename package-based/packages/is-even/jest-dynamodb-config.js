/* eslint-disable */
module.exports = {
  port: 8001,
  tables: [
    {
      TableName: 'SessionCache',
      KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' },
        { AttributeName: 'type', KeyType: 'RANGE' },
      ],
      AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'S' },
        { AttributeName: 'type', AttributeType: 'S' },
        { AttributeName: 'entityUuid', AttributeType: 'S' },
        { AttributeName: 'accessToken', AttributeType: 'S' },
        { AttributeName: 'entityModelSerial', AttributeType: 'S' },
        { AttributeName: 'modelSerial', AttributeType: 'S' },
      ],
      BillingMode: 'PAY_PER_REQUEST',
      GlobalSecondaryIndexes: [
        {
          IndexName: 'accessTokenGsi',
          KeySchema: [
            {
              AttributeName: 'accessToken',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'type',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
        {
          IndexName: 'entityCacheGsi',
          KeySchema: [
            {
              AttributeName: 'entityUuid',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'type',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
        {
          IndexName: 'cacheModelSerialGsi',
          KeySchema: [
            {
              AttributeName: 'modelSerial',
              KeyType: 'HASH',
            },
          ],
          Projection: {
            NonKeyAttributes: ['model', 'serial', 'id'],
            ProjectionType: 'INCLUDE',
          },
        },
        {
          IndexName: 'entityModelSerialGsi',
          KeySchema: [
            {
              AttributeName: 'entityModelSerial',
              KeyType: 'HASH',
            },
          ],
          Projection: {
            NonKeyAttributes: ['model', 'serial', 'id'],
            ProjectionType: 'INCLUDE',
          },
        },
      ],
    },
    {
      TableName: 'Smscodes',
      KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
      BillingMode: 'PAY_PER_REQUEST',
    },
    {
      TableName: 'Entities',
      KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' },
        { AttributeName: 'type', KeyType: 'RANGE' },
      ],
      AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'S' },
        { AttributeName: 'type', AttributeType: 'S' },
        { AttributeName: 'entityUuid', AttributeType: 'S' },
        { AttributeName: 'siteUuid', AttributeType: 'S' },
        { AttributeName: 'cardholderUuid', AttributeType: 'S' },
        { AttributeName: 'siteNameSortKey', AttributeType: 'S' },
        { AttributeName: 'status', AttributeType: 'S' },
        { AttributeName: 'serial', AttributeType: 'S' },
        { AttributeName: 'model', AttributeType: 'S' },
        { AttributeName: 'entityTransactionTotal200', AttributeType: 'S' },
        { AttributeName: 'sortKey', AttributeType: 'S' },
        { AttributeName: 'shortId', AttributeType: 'S' },
      ],
      BillingMode: 'PAY_PER_REQUEST',
      GlobalSecondaryIndexes: [
        {
          IndexName: 'entityGsi',
          KeySchema: [
            {
              AttributeName: 'entityUuid',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'type',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
        {
          IndexName: 'entityTransactionTotal200Gsi',
          KeySchema: [
            {
              AttributeName: 'entityTransactionTotal200',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'type',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            NonKeyAttributes: [
              'id',
              'tipAmount',
              'refundAmount',
              'surchargeAmount',
              'status',
              'timestamp',
              'amount',
              'transactionType',
              'taxAmounts',
              'siteUuid',
              'deviceUuid',
            ],
            ProjectionType: 'INCLUDE',
          },
        },
        {
          IndexName: 'typeGsi',
          KeySchema: [
            {
              AttributeName: 'type',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'id',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
        {
          IndexName: 'typeGsiV2',
          KeySchema: [
            {
              AttributeName: 'type',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'id',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
        {
          IndexName: 'sortKeyGsi',
          KeySchema: [
            {
              AttributeName: 'id',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'sortKey',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
        {
          IndexName: 'deviceSerialModelGsi',
          KeySchema: [
            {
              AttributeName: 'serial',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'model',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
        {
          IndexName: 'depositsPendingGsi',
          KeySchema: [
            {
              AttributeName: 'status',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'type',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
        {
          IndexName: 'siteGsi',
          KeySchema: [
            {
              AttributeName: 'siteUuid',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'type',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
        {
          IndexName: 'siteNameGsi',
          KeySchema: [
            {
              AttributeName: 'entityUuid',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'siteNameSortKey',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
        {
          IndexName: 'cardholderGsi',
          KeySchema: [
            {
              AttributeName: 'cardholderUuid',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'type',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
        {
          IndexName: 'shortIdGsi',
          KeySchema: [
            {
              AttributeName: 'shortId',
              KeyType: 'HASH',
            },
            {
              AttributeName: 'type',
              KeyType: 'RANGE',
            },
          ],
          Projection: {
            ProjectionType: 'ALL',
          },
        },
      ],
    },
    {
      TableName: 'DeviceKeys',
      KeySchema: [{ AttributeName: 'tcuid', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'tcuid', AttributeType: 'S' }],
      BillingMode: 'PAY_PER_REQUEST',
    },
  ],
};
