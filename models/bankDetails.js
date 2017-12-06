'use strict';

var mongoose = require('mongoose');

var bankSchema = new mongoose.Schema({
    'ifsc': {
        'type': String
    },
    'bank_id': {
        'type': String
    },
    'branch': {
        'type':String
    },
    'address':{
        'type':String
    },
    'city':{
        'type': String 
    },
    'district':{
        'type': String
    },
    'state':{
        'type': String
    },
    'bank_name':{
        'type': String
    }

});

module.exports = mongoose.model('BankDetails', bankSchema);
//ifsc,bank_id,branch,address,city,district,state,bank_name