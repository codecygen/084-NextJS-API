// Since this is a backend stuff, it will not be 
// included in the client side bundle.
import { getFeedbackPath, extractFeedback } from "../api";

const FeedbackPage = (props) => {
    console.log(props.data);

    const allTextList = props.data.map(list => <li key={list.id}>{list.text}</li>);

    return (
        <ul>{allTextList}</ul>
    );
};

export const getStaticProps = async () => {
    const filePath = getFeedbackPath();
    const databaseData = extractFeedback(filePath);

    // we don't need to send an http request here

    return {
        props: {
            data: databaseData
        }
    }
};

export default FeedbackPage;