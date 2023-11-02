const datefunc = (req, res, next) => {
    let date = new Date();
  
    let h = date.getHours();
  
     if (!(h >= 9 && h <= 17 )) {
       res.send("sakkarna ! ija ghodwa !")
     }
     next()
  }
  module.exports = datefunc;