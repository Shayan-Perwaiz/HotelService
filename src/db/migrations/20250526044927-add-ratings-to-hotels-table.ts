import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`ALTER TABLE hotels
      ADD COLUMN ratings DECIMAL(3,2) DEFAULT NULL
      `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE hotels
      DROP COLUMN ratings;
    `);
  },
};
