import app from "./server.js";

app.get("/",(req,res) => {
  res.json({"message":"helo"})
})
app.listen(5500, () => {
  console.log("Server Sarted at 5500");
});
