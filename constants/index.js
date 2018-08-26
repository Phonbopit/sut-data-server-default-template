require('dotenv').config()

module.exports = {
  DATABASE_URL:
    process.env.MONGODB_URL || 'mongodb://localhost/sut_data_server_workshop_2',
  PORT: process.env.PORT || 9999
}
