const sequelize = require('../config/connection');
const { User, Product  } = require('../models');

const UserSeedData = [
    {
        name: "lanay",
        credit_card: 1111111111,
    },
    {
        name: "mike",
        credit_card: 2222222222,
    },
    {
        name: "caitlin",
        credit_card: 3333333333,
    }
];

const ProductSeedData = [
    {
         name: "pikachu card",
         price: 100,
         user_id: 1

     },
     {
         name: "almonds",
         price: 5,
         user_id: 2
     },
     {
         name: "coffee",
         price: 500,
         user_id: 3
     }
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(UserSeedData);

  const products = await Product.bulkCreate(ProductSeedData);

//   for (const { id } of users) {
//     const newProduct = await Product.create({
//       user_id: id,
//     });
//   }

//   for (const product of ProductSeedData) {
//     const newProd = await Product.create({
//       ...Product,
//     });
//   }

  process.exit(0);
};

seedDatabase();
