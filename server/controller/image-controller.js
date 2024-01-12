import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: 'AKIAXYKJTKCZXHNE66TC',
    secretAccessKey: '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',
    region: 'ap-south-1',
});

const s3 = new AWS.S3();

export const uploadImage = async (request, response) => {
    if (!request.file) {
        return response.status(404).json("File not found");
    }

    const params = {
        Bucket: 'merni-blog',
        Key: request.file.filename,
        Body: request.file.buffer,
    };

    try {
        await s3.upload(params).promise();
        const imageUrl = `https://YOUR_S3_BUCKET_NAME.s3.YOUR_AWS_REGION.amazonaws.com/${request.file.filename}`;
        response.status(200).json(imageUrl);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
};

export const getImage = (request, response) => {
    const params = {
        Bucket: 'merni-blog',
        Key: request.params.filename,
    };

    const readStream = s3.getObject(params).createReadStream();
    readStream.pipe(response);
};
