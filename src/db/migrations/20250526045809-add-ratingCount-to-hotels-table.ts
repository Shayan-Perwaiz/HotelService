import { QueryInterface } from "sequelize";
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE hotels
      ADD COLUMN ratingCount INT DEFAULT NULL;
    `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE hotels
      DROP COLUMN ratingCount;
    `);
  },
};
