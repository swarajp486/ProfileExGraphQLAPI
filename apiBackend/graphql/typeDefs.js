const {gql}=require('apollo-server')

module.exports=gql`
type Profile {
    _id:ID
    name:String
    qualification:String
    createdAt:String
}

input ProfileInput {
    name:String
    qualification:String
}

type Query {
    profile(_id: ID!): Profile!
    getProfile(amount:Int):[Profile]
}

type Mutation {
    createProfile(name:String,qualification:String):Profile!
    deleteProfile(_id:ID!):Boolean
    editProfile(_id:ID!,name:String,qualification:String):Boolean
}

`
