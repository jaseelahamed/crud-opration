const db=require('./db')


// get employee
const allEmployees=()=>{
    return db.Emplooye.find().then(
        (result)=>{
            console.log(result+"hai")
            if(result){
                return {
                    StatusCode:200,
                    employee:result
                }
            }
            else{
                return{
                StatusCode:404,
                message:'NO data Available'
                }
            }
        }
    )
}

const createEmployees=(id,name,age,desig,salary)=>{
    return db.Emplooye.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
            statusCode:404,
            message:"Employee with same ID already Exist"
            }
        }
        else{
            const newEMP=new db.Emplooye({
                id,
                name,
                age,
                desig,
                salary
            })
            newEMP.save()
            return{
                statusCode:200,
                message:"NEW employee Registerd"
            }
        }
    })
}


const removeEmployee=(id)=>{
    return db.Emplooye.deleteOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"Employee Removed"
            }
        }
        else{
            return{
                statusCode:404,
                message:"Employee Removal Failed"
            }
        }
    })
}


const getEmployee=(id)=>{
    return db.Emplooye.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"Invalid Employee ID !!"
            }
        }
    })
}


const updateEmployee=(id,name,age,desig,salary)=>{
    return db.Emplooye.findOne({
        id
    }).then((result)=>{
        if(result){
            result.name=name
            result.age=age 
            result.desig=desig
            result.salary=salary
            result.save()
            return{
                statusCode:200,
                message:"Employee Details Update !!"
            }
        }
        else{
            return{
                statusCode:404,
                message:"Employee not valid !!"
            }
        }
    })
    
}






module.exports={
    allEmployees,
    createEmployees,
    removeEmployee,
    getEmployee,
    updateEmployee
}