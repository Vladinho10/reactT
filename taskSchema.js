const mongoose = require('mongoose')
, Schema = mongoose.Schema
, taskScheme = new Schema({
  toDo: String,
}, {
  versionKey:false
});

taskScheme.statics.insertTask = function (taskData, res) {
  let task = new this(taskData);
  console.log('added task: ', task);
  task.save().then((addedData) => {
    res.json(addedData)
  });
}

taskScheme.statics.getAllData = function (res) {
  this.find({}).then((dataArr) => {
    res.json(dataArr);
  })
}

taskScheme.statics.getByIdAndUpdate = function (id, newToDo, res) {
   // this.findByIdAndUpdate(id, {toDo: newToDo}, () => {
   //   this.getAllData(res)
   // });
   this.findById(id, (err, doc) => {
     if(err) console.log(err);
     doc.toDo = newToDo;
     doc.save().then(res.json(doc))
   })
}

taskScheme.statics.getByIdAndDelete = function (id, res) {
   this.findByIdAndRemove(id, () => {
     // this.getAllData(res)
     res.json({_id: id})
   });
}

module.exports = mongoose.model("Task", taskScheme);
