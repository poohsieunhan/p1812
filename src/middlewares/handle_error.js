import createdError from 'http-errors'

export const badRequest = (err,res)=>{
    const error = createdError.BadRequest(err)
    return res.status(error.status).json({
        error: 1,
        mes: error.message
    })
}

export const internalServerError = (res)=>{
    const error = createdError.InternalServerError()
    return res.status(error.status).json({
        error: 1,
        mes: error.message
    })
}

export const notFound = (req,res)=>{
    const error = createdError.NotFound('this route is not exist!')
    return res.status(error.status).json({
        error: 1,
        mes: error.message
    })
}
