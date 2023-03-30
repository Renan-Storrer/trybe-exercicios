const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  (async () => {
    await sequelize.sync({ force: true });
    const sara = await User.create({
      fullName: 'Sara Silva Santos',
      email: 'sara.ss@trybe.com',
    });

    console.log(sara.fullName); 

    sara.fullName = "Jane Doe";

    await sara.save();
  })();
  return User;
};

module.exports = UserModel;