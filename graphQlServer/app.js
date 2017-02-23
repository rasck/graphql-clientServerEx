const express = require('express');
const graphqlHTTP = require('express-graphql');

const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'helloWorldRoot',
        fields: {
            // define a hello field
            hello: {
                // of type string
                type: GraphQLString,
                resolve() {
                    // could resolve a call to mongodb
                    // could also resolve a call to a rest service
                    // or delegate to some business logic.
                    // but we just return hardcoded string...
                    // it will not be graphQL that will be responsible for
                        // authentication and authorization. 
                    return 'world!';
                }
            }
        }
    })
})

const app = express();

app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true
})));

const server = app.listen(8080, () => {
    console.log('listening on', server.address().port);
})