
module.exports = {
  register (res, req) {
    res.send({
      message: `Hello ${req.body.email}! Your user was register! have fun!`
    })
  }
}
