import fs from "fs";
import path from "path";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://raghul-practice.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  const filePath = path.join(process.cwd(), "todo.json");

  // Read data
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  if (req.method === "GET") {
    return res.status(200).json(data.todos);
  }

  if (req.method === "POST") {
    const { item } = req.body;
    data.todos.push(item);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return res.status(200).json({ message: "Todo added", todos: data.todos });
  }

  if (req.method === "DELETE") {
    const { item } = req.body;
    data.todos = data.todos.filter(t => t !== item);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return res.status(200).json({ message: "Todo deleted", todos: data.todos });
  }

  res.status(405).send("Method Not Allowed");
}
