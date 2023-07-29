/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const AuthorBox = ({author, genre, updateApiUrl}) => {
    const [authorHovered, setAuthorHovered] = useState(false);
  // SHow Author Icon
  const showIcon = () => {
    setAuthorHovered(true);
  };

  // Hide Author Icon
  const hideIcon = () => {
    setAuthorHovered(false);
  };

  let authorInLink = author.replace(" ", "%20").toLowerCase()

  // Author Clicked Handle
  const handleClick = ()=>{
    updateApiUrl(`https://quote-garden.onrender.com/api/v3/quotes?author=${authorInLink}`, author)
  }


  useEffect(()=>{
    console.log();
  }, [])

  return (
    <>
      <div onClick={handleClick} onMouseOver={showIcon} onMouseOut={hideIcon} className="quoteInfo">
        <div>
          <p className="quoteAuthor">{author}</p>
          <h5 className="quoteGenre">{genre}</h5>
        </div>
        <span>{authorHovered && <BsArrowReturnRight/>}</span>
      </div>
    </>
  );
};

export default AuthorBox;
