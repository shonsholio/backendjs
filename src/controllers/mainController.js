const controller = {};

controller.list = (req,res) =>{
  res.render('main')
}

controller.info = (req,res) =>{
  req.getConnection((err, conn) => { 
    conn.query('SELECT * FROM operacion_aseo', (err, data) => {
      if(err){
        res.json(err)
      };
      res.render('info', {
        data: data
      })
    })
  })}




controller.save = (req,res) => {
  const data = req.body;

  req.getConnection((err,conn) => {
    conn.query('INSERT INTO operacion_aseo SET ?', [data], (err, main) => {
    res.redirect('/');
    })
    console.log(data)
  })
}
module.exports = controller;