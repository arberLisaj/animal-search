import Chance from "chance";
import cors from "cors";
import express from "express";

const app = express();
const chance = new Chance();
app.use(cors());
app.use(express.json());

const animals = [...Array(250).keys()].map((id) => {
  return {
    id,
    name: chance.animal(),
    age: chance.age(),
  };
});

app.get("", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const result = animals.filter((a) => a.name.toLowerCase().includes(q));
  res.send(result);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Listening on port http://localhost:8080"));
