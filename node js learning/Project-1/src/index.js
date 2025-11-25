const express = require("express")
const users = require("../mock-data.json")

const app = express();
const PORT = 8000;

app.get('/users', (req, res) => {
  return res.json(users);  
});

app.get('/api/users', (req, res) => {
     const htmldata = `<ul>
${users.map((user)=>
     `<li>${user.first_name}</li>`
     ).join(" ")}
 </ul>`
  return res.send(htmldata);  
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
