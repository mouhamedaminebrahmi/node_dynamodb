const axios = require("axios");
const { addOrUpdateCharacter } = require("./config/dynamo");

const seedData = async () => {
  const url = "https://hp-api.onrender.com/api/characters";
  try {
    const { data: characters } = await axios.get(url);
    //console.log(characters);
    const characterPromises = characters.map((character, i) => addOrUpdateCharacter({ ...character, id: i + "" }));
    await Promise.all(characterPromises);
  } catch (err) {
    console.error(err);
    console.log("AHHHHHHHHHHH");
  }
};

seedData();
