import Sequelize, { Model } from 'sequelize'

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                password_hash: Sequelize.STRING,
            },
            {
                sequelize,
                paranoid: true,
            },
        )
    }
}

export default User