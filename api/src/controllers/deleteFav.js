const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id, userId } = req.body;

  try {
    const fav = await Favorite.findOne({ where: { id: id } });

    await fav.removeUser(userId);

    res.status(200).json({ succes: true });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { deleteFav };
