'use strict';

const co = require('co'),
    bankDetailsModel = require(process.cwd() + '/models/bankDetails.js');

const getBankDetailUsingIFSC = function (req, res) {
    var bankDetails = {                                                    
        ifsc: '',                                                             
        bank_id: '',                                                                   
        branch: '',                                                               
        address: '', 
        city: '',                                                                  
        district: '',                                                      
        state: '',                                                            
        bank_name: '' 
      };                                
    var ifsc = req.query.ifsc;
    co(function*(){
        var tmpBankDetails = yield bankDetailsModel.findOne({ifsc:ifsc});
        if(tmpBankDetails){
            bankDetails.ifsc = tmpBankDetails.ifsc;
            bankDetails.bank_id = tmpBankDetails.bank_id;
            bankDetails.branch = tmpBankDetails.branch;
            bankDetails.address = tmpBankDetails.address;
            bankDetails.city = tmpBankDetails.city;
            bankDetails.district = tmpBankDetails.district;
            bankDetails.state = tmpBankDetails.state;
            bankDetails.bank_name = tmpBankDetails.bank_name;
            return bankDetails;
        } else{
            res.status(400).json({statusCode:"400",payload:{message:"No product found"}});
            return res;
        }
    }).then(function (response) {
        res.status(200).json({statusCode:"200",payload:{response:response}});
        return res;
    })
};

const getBankDetails = function(req, res){
    var bankName =req.query.name;
    var bankCity = req.query.city; 
    var page = req.query.page;
    co(function*(){
       return yield bankDetailsModel.find({ bank_name: bankName, city : bankCity }).skip(page*10).limit(10).exec();
    }).then(function(bankDetails){
        if (bankDetails) {
                res.status(200).json({ statusCode: "200", payload: { bankDetails: bankDetails } });
            } else {
                res.status(400).json({ statusCode: "400", payload: { message: "No Banks for required data found" } });
            }
    });
}

module.exports = {
    'getBankDetailUsingIFSC': getBankDetailUsingIFSC,
    'getBankDetails':getBankDetails
};
