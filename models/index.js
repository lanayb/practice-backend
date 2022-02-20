const User = require('./Users');
const Product = require('./Products');

User.hasMany(Product, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Product.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = {User, Product};