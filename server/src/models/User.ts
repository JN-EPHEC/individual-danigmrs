import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class User extends Model {}

User.init(
  {
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users", // force le nom
    schema: "public", // Evite de tomber sur auth.users côté Supabase
  }
);

export default User;
