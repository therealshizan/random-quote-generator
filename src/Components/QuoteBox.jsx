import { useEffect, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import "../assets/index";
import AuthorBox from "./AuthorBox";
import QuoteText from "./QuoteText";
import RandomBtn from "./RandomBtn";

const QuoteBox = () => {
  const [apiUrl, setApiUrl] = useState(
    "https://quote-garden.onrender.com/api/v3/quotes/random"
  );
  const [quote, setQuote] = useState([]);
  const [randomCount, setRadnomCount] = useState(0);
  const [authorMode, setAuthorMode] = useState(false);
  const [currentAuthor, setCurrentAuthor] = useState("");

  // Callback function to update parentState
  const updateApiUrl = (data, authorName) => {
    setApiUrl(data);
    setAuthorMode(true);
    setCurrentAuthor(authorName);
  };

  const disableAuthorMode = () => {
    setAuthorMode(false);
    setApiUrl("https://quote-garden.onrender.com/api/v3/quotes/random");
  };

  useEffect(() => {
    console.log(currentAuthor);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setQuote(data.data));
  }, [randomCount, apiUrl, currentAuthor]);
  return (
    <>
      <RandomBtn
        onClick={() => setRadnomCount(randomCount + 1)}
        randomCount={randomCount}
      />
      <div className="quoteBox">
        {authorMode && (
          <h1 className="currentAuthor">
            <>
              {`Quotes By ${currentAuthor}`} <LiaTimesSolid onClick={disableAuthorMode} />
            </>
          </h1>
        )}
        {quote.map((q) => (
          <div className="quoteContainer" key={q.id}>
            <QuoteText quoteText={q.quoteText} />
            {!authorMode && (
              <AuthorBox
                updateApiUrl={updateApiUrl}
                author={q.quoteAuthor}
                genre={q.quoteGenre}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default QuoteBox;
