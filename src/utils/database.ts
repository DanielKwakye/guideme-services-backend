import { Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('tests-db', 'clickkapps', '28465dan', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize