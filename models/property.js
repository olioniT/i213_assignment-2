const { DataTypes } = require("sequelize")
const sequelize = require("../database")

const Property = sequelize.define("Property", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    address: { type: DataTypes.STRING(255) },
    suburb: { type: DataTypes.STRING(255) },
    town_city: { type: DataTypes.STRING(255) },
    description: { type: DataTypes.TEXT },
    list_price: { type: DataTypes.BIGINT },
    image_name: { type: DataTypes.STRING(7) },
    bedrooms: { type: DataTypes.INTEGER },
    ensuite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    sold: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    featured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    pool: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: "properties",
    underscored: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = Property