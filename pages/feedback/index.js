import { useState } from "react";

// Since this is a backend stuff, it will not be 
// included in the client side bundle.
import { getFeedbackPath, extractFeedback } from "../api";

const FeedbackPage = (props) => {

    const [loadedEmail, setLoadedEmail] = useState();

    const loadTextHandler = (id) => {
        fetch(`/api/${id}`).then(res => res.json()).then(data => setLoadedEmail(data.requestedData.email));
    };

    const allTextList = props.data.map(list =>
        <li key={list.id}>
            {list.text}
            <button onClick={loadTextHandler.bind(null, list.id)}>Show Details</button>
        </li>
    );

    return (
        <>
            {loadedEmail && <p>{loadedEmail}</p>}
            <ul>{allTextList}</ul>
        </>
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