const mongoose = require('mongoose');

// We need to define  Schema
const todoSchema = new mongoose.Schema({
 title: { type: String, required: true, index: true },
  description: { type: String, required: false },
  completed: { type: Boolean, default: false }
});

// We hsve to create Indexes
todoSchema.index({ completed: 1 });

todoSchema.index({ title: 1, completed: -1 }); // 1 for ascending, -1 for descending

// We need unique titles for each todo item
todoSchema.index({ title: 1 }, { unique: true });


// We need to Create Model
const Todo = mongoose.model('Todo', todoSchema);



module.exports = Todo;
