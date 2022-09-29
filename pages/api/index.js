import fs from 'fs';
import path from 'path';

export const getFeedbackPath = () => {
    return path.join(process.cwd(), 'data', 'database.json');
};

export const extractFeedback = (filePath) => {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    return data;
};

const postSubmitHandler = async (req, res) => {
    if (req.method === 'POST') {
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newSubmitData = {
            id: new Date().toISOString(),
            email,
            text: feedbackText
        };

        const filePath = getFeedbackPath();
        const databaseData = extractFeedback(filePath);

        databaseData.push(newSubmitData);

        fs.writeFileSync(filePath, JSON.stringify(databaseData));
        // 201 stands for created
        // A 201 status code indicates that a request was successful and as a result, a resource has been created (for example a new page).
        res.status(201).json({ message: 'Success!', newData: newSubmitData });
    } else {
        const filePath = getFeedbackPath();
        const databaseData = extractFeedback(filePath);
        // 200 stands for OK.
        // It means, simply, that the request was received and understood and is being processed.
        res.status(200).json({ allDatabase: databaseData });
    }
};

export default postSubmitHandler;