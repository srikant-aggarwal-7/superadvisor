# Super Advisor Interview Exercise

The repository implements a node.js service for SuperAdvisor's interview exercise. It provides following three APIs:

**1. POST /event**: The method adds an event to the database.

```
  Request:
  {
    "userId": "user-123",
    "eventType": "purchase",
    "amount": 40,
    "bondId": "bond-356"
  }

  Response:
  64bb4d836ba86275d73408eb
```

**2. GET /event/eventType**: The method gets all events in the database of type `eventType` sorted by the order in which they got created.

```
  Request:
  url: /event/purchase

  Response:
  [
    {
        "_id": "64bb307d6c5981c8e70048c6",
        "userId": "user-123",
        "eventType": "purchase",
        "amount": 10,
        "bondId": "bond-346",
        "createdAt": "2023-07-22T01:27:09.923Z"
    },
    {
        "_id": "64bb3369cbca1e4c46736253",
        "userId": "user-123",
        "eventType": "purchase",
        "amount": 40,
        "bondId": "bond-356",
        "createdAt": "2023-07-22T01:27:25.258Z"
    }
  ]
```

**3. GET /event**: The method returns all events that got created so far sorted by their time of creation.

```
  Request:
  url: /event

  Response:
  [
    {
        "_id": "64bb307d6c5981c8e70048c6",
        "userId": "user-123",
        "eventType": "purchase",
        "amount": 10,
        "bondId": "bond-346",
        "createdAt": "2023-07-22T01:27:09.923Z"
    },
    {
        "_id": "64bb3369cbca1e4c46736253",
        "userId": "user-123",
        "eventType": "purchase",
        "amount": 40,
        "bondId": "bond-356",
        "createdAt": "2023-07-22T01:27:25.258Z"
    },
    {
        "_id": "64bb306e6d00d06001939e2f",
        "userId": "user-123",
        "eventType": "sell",
        "amount": 20,
        "bondId": "bond-345",
        "createdAt": "2023-07-22T01:39:53.375Z"
    }
]
```

Use `npm run build` to build the code and generate corresponding js files. Once corresponding js code is generated, one can use `npm run start` to start the server which is hosted at `http://localhost:6000`.

For the purpose of this exercise, we have created a **MongoDB Atlas Database**. Collection **superAdvisor.events** is used to persist the data.

Postman Collection to test the API is at: https://cloudy-space-495758.postman.co/workspace/New-Team-Workspace~9b9c1e1d-c43e-4220-9de5-90bc0437c44f/collection/28678487-27071e71-5942-4cff-abf1-982c9dd91aa2?action=share&creator=28678487
