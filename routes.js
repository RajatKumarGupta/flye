'use strict';

const bankDetailsController = require('./controllers/bankDetails.js');

module.exports.initRoutes = function(router) {
    router.route('/api/v1/bankDetailsUsingIFSC').get(bankDetailsController.getBankDetailUsingIFSC);
    router.route('/api/v1/bankDetails').get(bankDetailsController.getBankDetails);
   };
