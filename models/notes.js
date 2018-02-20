

module.exports = (sequelize, DataTypes) => {
  let notes = sequelize.define('notes', {
    title: DataTypes.STRING,
    note: DataTypes.STRING,
    notesid: DataTypes.INTEGER,
  }, {});
  notes.associate = function (models) {
    // associations can be defined here
  };
  return notes;
};
