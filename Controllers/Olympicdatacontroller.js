const olympicdata = require("../Models/OlympicModel");

const addolympicdatacontroller = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const savedata = new olympicdata(data);
    const save = await savedata.save();
    //console.log(save);
    res.status(201);
    res.send({ "data save successfully": save });
  } catch (error) {
    res.status(400);
    res.send({ message: error.message });
  }
};

const updateolympicdatacontroller = async (req, res) => {
  const _id = req.params.id;
  const updatedta = req.body;
  try {
    const queryupdatedata = await olympicdata.findByIdAndUpdate(
      _id,
      updatedta,
      { new: true }
    );
    res.status(200).send({ "data updates successfully": queryupdatedata });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addolympicdatacontroller, updateolympicdatacontroller };
