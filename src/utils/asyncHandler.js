const asyncHandler = (func) => async (req, res, next) => {
    try{
        await func(req, res, next)
    }catch(error){
        res.status(500 || error.code).json({
            success: false,
            message: error.message
        })
    }
}

export {asyncHandler}