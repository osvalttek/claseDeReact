import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuotes } from "../../store/slices/quotesSlice";
import Quote from "./Quote";

const QuotesList = () => {
  const quotes = useSelector((state) => state.quotes.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllQuotes());
  }, [dispatch]);

  return quotes.map((quote, key) => <Quote quote={quote} key={key} />);
};
export default QuotesList;
