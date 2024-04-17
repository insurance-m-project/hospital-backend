const express = require('express');
const app = express();
const cors = require('cors');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:9500'));
const CounterContract = require('../src/contracts/MedicalRecord.json');

class RequestData {
    constructor(from, name, RRN, KCD, date, receiptNumber, totalOop, totalPcc, totalFoop, nonReimbursement, treatments) {
        this.from = from;
        this.name = name;
        this.RRN = RRN;
        this.KCD = KCD;
        this.date = date;
        this.receiptNumber = receiptNumber;
        this.totalOop = totalOop;
        this.totalPcc = totalPcc;
        this.totalFoop = totalFoop;
        this.nonReimbursement = nonReimbursement;
        this.treatments = treatments;
    }
}

class Treatment {
    constructor(category, date, treatCode, description, price, oop, pcc, foop, nonReimbursement) {
        this.category = category;
        this.date = date;
        this.treatCode = treatCode;
        this.description = description;
        this.price = price;
        this.oop = oop;
        this.pcc = pcc;
        this.foop = foop;
        this.nonReimbursement = nonReimbursement;
    }
}


// cors 설정
app.use(
    cors({
        origin: true,
        credentials: true,
    }),
);

app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

app.post('/api/increment', async (req, res) => {
    const requestData = req.body;

    // RequestData 객체 생성
    const request = new RequestData(
        requestData.from,
        requestData.name,
        requestData.RRN,
        requestData.KCD,
        requestData.date,
        requestData.receiptNumber,
        requestData.totalOop,
        requestData.totalPcc,
        requestData.totalFoop,
        requestData.nonReimbursement,
        requestData.treatments.map(treatment => new Treatment(
            treatment.category,
            treatment.date,
            treatment.treatCode,
            treatment.description,
            treatment.price,
            treatment.oop,
            treatment.pcc,
            treatment.foop,
            treatment.nonReimbursement
        ))
    );

    console.log('Received RRN:', request.RRN);
    // abi 파일
    // increment().encodeABI() : 원본데이터로 변환 (바이트 코드로 변환)
    // const deployed = new web3.eth.Contract(abi, CA);
    // const data = await deployed.methods.addMedicalRecord().encodeABI();
    //
    // let txObject = {
    //     nonce,
    //     from,
    //     to: CA,
    //     data,
    // };

    // res.json(txObject);
    res.send('Data received successfully!');
    /**
     * data 부분에 들어가는 값
     * Smart Contract 함수에 대한 내용
     * 스마트 컨트랙트 함수를 실행시킬 수 있는 어떠한 값
     * 함수를 실행시킬 수 있는 메세지 작성
     */
});

app.listen(4000, () => {
    console.log('back server onload');
});
