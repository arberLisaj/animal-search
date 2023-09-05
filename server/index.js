import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
// automatically parse any json sent to the server
app.use(express.json());

// generate fake data with chance
import Chance from "chance";
const chance = new Chance();

const users = [...Array(250).keys()].map((id) => {
  return {
    id,
    name: chance.name(),
    city: chance.city(),
  };
});

app.get("", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const result = users.filter((user) => user.name.toLowerCase().includes(q));
  res.send(result);
});

const port = 8080;
app.listen(port, () => console.log("Listening on port http://localhost:8080"));
