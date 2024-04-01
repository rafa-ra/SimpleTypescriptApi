import { Router } from "express";

const router = Router();

type Todo = {
  id: string;
  author: string;
  text: string;
};

let todos: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(201).json({
    message: "Get it ?!",
    todos: todos,
  });
});

router.post("/create-post", (req, res, next) => {
  const body = req.body;
  const { id, author, text } = body;

  const newPost: Todo = {
    id: id,
    author: author,
    text: text,
  };

  todos.push(newPost);

  res.status(200).json(newPost);
});

router.put("/todos/:todoId", (req, res, next) => {
  const params = req.params;
  const body = req.body;
  const todoId = params.todoId;

  const todoIndex = todos.findIndex((todoItem) => todoItem.id == todoId);
  if (todoIndex >= 0) {
    todos[todoIndex] = {
      id: todos[todoIndex].id,
      text: body.text,
      author: body.author,
    };
    return res
      .status(200)
      .json({ message: "Todo updated", todo: todos[todoIndex] });
  }

  res.status(404).json({ message: "Todo not found" });
});

router.delete("/todos/:todoId", (req, res, next) => {
  const params = req.params as { todoId: string };
  const todoId = params.todoId;

  todos = todos.filter((todoItem) => todoItem.id !== todoId);
  res.status(200).json({ message: "Todo deleted" });
});

export default router;
