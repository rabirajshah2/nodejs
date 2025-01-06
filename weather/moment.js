const moment = require("moment");

const dateFormatter = (date) => {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
};

module.exports = { dateFormatter };
