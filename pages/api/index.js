import fs from 'fs';
import path from 'path';

const postSubmitHandler = async (req, res) => {
    if (req.method = 'POST') {
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newSubmitData = {
            id: new Date().toISOString(),
            email,
            text: feedbackText
        };

        const filePath = path.join(process.cwd(), 'data', 'database.json');
        // First we need to read the content of the file inside
        const fileData = fs.readFileSync(filePath);
        const data = JSON.parse(fileData);
        data.push(newSubmitData);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({ message: 'Success!', feedback: newSubmitData });
    } else {
       res.status(200).json({ message: 'Data Sent!' }); 
    }
};

export default postSubmitHandler;