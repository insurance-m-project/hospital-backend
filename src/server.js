require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETHEREUM_NODE_URL));
const MedicalRecord = require('../src/contracts/MedicalRecord.json');
// cors 설정
app.use(
    cors({
        origin: true,
        credentials: true,
    }),
);

// request mapping
app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

app.post('/api/transaction', async (req, res) => {
    const requestData = req.body;
    const from = requestData.from;

    const nonce = await web3.eth.getTransactionCount(from);
    const networkId = await web3.eth.net.getId();
    const CA = MedicalRecord.networks[networkId].address;
    const abi = MedicalRecord.abi;

    const deployed = new web3.eth.Contract(abi, CA);
    const data = await deployed.methods.addMedicalRecord(
        requestData.name,
        requestData.RRN,
        requestData.KCD,
        requestData.date,
        requestData.receiptNumber,
        requestData.totalOop,
        requestData.totalPcc,
        requestData.totalFoop,
        requestData.nonReimbursement,
        requestData.treatments.map(treatment => [
            treatment.category,
            treatment.date,
            treatment.treatCode,
            treatment.description,
            treatment.price,
            treatment.oop,
            treatment.pcc,
            treatment.foop,
            treatment.nonReimbursement
        ])).encodeABI();


    let txObject = {
        nonce,
        from,
        to: CA,
        data,
    };

    res.json(txObject);
});

app.listen(4000, () => {
    console.log('back server onload');
});
