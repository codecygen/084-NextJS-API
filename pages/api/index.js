const postSubmitHandler = async (req, res) => {
    if (req.method = 'POST') {
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newSubmitData = {
            id: new Date().toISOString(),
            email,
            text: feedbackText
        };

        res.status(200).json({ message: 'Data Sent!' });
    }
};

export default postSubmitHandler;