const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.save = (name,data,callback) => {
    let params = {
        Bucket: 'pizza-luvrs-mads-hansen',
        Key: `pizzas/${name}.png`,
        Body: new Buffer(data,'base64'),
        ContentEncoding: 'base64',
        ContentType: 'image/png'
    };

    s3.putObject(params, (err,data) => {
        callback(err, `//pizza-luvrs-mads-hansen.s3.eu-central-1.amazonaws.com/${params.Key}`);
    });
};