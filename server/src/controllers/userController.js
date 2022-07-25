const { userModel } = require("../models");
const { getJSONWebToken, decodeToken } = require("../helpers/handleJWT");

const getAllUsers = async (request,response)=>{
    
    const users = await userModel.find();

    return response.json({
        message: "List of avatars in the database",
        body: users
    });
};

const getUser = async (request,response)=>{

    const token = request.query.token;
    
    if(!token)
    {
        console.log("Parameter token is null");
    }

    try{
        const decodeUser = decodeToken(token);


        if(!decodeUser)
        {
            return response.json({
                error: "Incorrect token"
            });
        }

        const users = await userModel.find();

        const foundUser = users.filter(user => (
            decodeUser.id == user.id
            ));
        
        if(foundUser.length == 0)
        {
            return response.json({
                error: "Incorrect token"
            });
        }
        return response.json({
            message: "All information of user profile",
            body: foundUser
        });

    }catch(error){
                
        console.log(error);
        response.status(400);
        return response.json({
            error: "Incorrect token"
        });
    }
};


module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;
