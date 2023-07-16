const Profile=require('../model/Profile')

module.exports={
    Query:{
        async profile(_,{_id}){
            return await Profile.findById(_id)
        },
        async getProfile(_,{amount}){
            return await Profile.find().sort({createdAt:-1}).limit(amount)
        }
    },
    Mutation:{
        async createProfile(_,{name,qualification}){
            const createdProfile=new Profile({
                name:name,
                qualification:qualification,
                createdAt:new Date().toISOString()

            });
            const res=createdProfile.save()
            console.log(res)
            return res
        },

        async deleteProfile(_,{_id}){
           const wasDeleted= (await Profile.deleteOne({_id:_id})).deletedCount
           return wasDeleted
        },

        async editProfile(_,{_id,name,qualification}){
            const wasEdited=(await Profile.updateOne({_id:_id},{name:name,qualification:qualification})).modifiedCount
            return wasEdited
        }
    }

}