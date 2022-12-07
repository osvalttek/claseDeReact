import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuoteByName } from "../../store/slices/quotesSlice";

const CharacterQuote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quotes.value);
  console.log("🚀 ~ CharacterQuote ~ quote", quote)

  const { name } = useParams();

  useEffect(() => {
    dispatch(getQuoteByName(name));
  }, [dispatch]);

  return (
    <div>
      <h3>{quote[0]?.character}</h3>
      <img src={`${quote[0]?.image}`} alt={quote.character} />
      <p>{quote[0]?.quote}</p>
    </div>
  );
};
export default CharacterQuote;
