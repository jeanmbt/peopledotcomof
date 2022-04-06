import "reflect-metadata";
import { ApolloServer } from 'apollo-server-micro'
import { resolvers } from '../../../prisma/generated/type-graphql'
import * as tq from "type-graphql";
import Cors from 'micro-cors'
import { context } from "./context";

const cors = Cors()

const schema = await tq.buildSchema({
  resolvers: [...resolvers],
});

const apolloServer = new ApolloServer({ schema, introspection: true, context })

const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}