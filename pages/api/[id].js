import { getFeedbackPath } from ".";
import { extractFeedback } from ".";

const requestedDataHandler = (req, res) => {
  const requestedId = req.query.id;

  const databasePath = getFeedbackPath();
  const databaseData = extractFeedback(databasePath);

  const retrievedData = databaseData.find(datum => datum.id === requestedId);

  res.status(200).json({ requestedData: retrievedData });
};

export default requestedDataHandler;