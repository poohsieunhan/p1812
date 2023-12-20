const getUser =(req,res)=>{
    return res.send("User Controller");
}
const addUser = ()=>{
    return res.send("User Add")
}

module.exports ={
    getUser,
    addUser
}