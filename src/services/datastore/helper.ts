import axios from "axios";
const dotenv = require("dotenv");

dotenv.config();

const post = async (collection: string, document: any) => {
  const response = await axios.post(
    process.env.DATASOURCE_URL! + "/action/insertOne",
    {
      collection: collection,
      database: process.env.DATABASE_NAME,
      dataSource: process.env.DATASOURCE_NAME,
      document,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": process.env.API_KEY,
      },
    }
  );
  return response;
};

const get = async (collection: string, filter: any, sort: any) => {
  const response = await axios.post(
    process.env.DATASOURCE_URL! + "/action/find",
    {
      collection: collection,
      database: process.env.DATABASE_NAME,
      dataSource: process.env.DATASOURCE_NAME,
      filter,
      sort,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": process.env.API_KEY,
      },
    }
  );
  return response;
};

export default {
  post,
  get,
};
