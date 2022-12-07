import Quote from "./Quote";
import { useGetAllQuotesQuery } from "../../store/api/quoteApi";

const QuotesList = () => {
  const { isLoading, data: quotes = [] } = useGetAllQuotesQuery();
  return isLoading ? (
    <h2>Cargando</h2>
  ) : (
    quotes.map((quote, key) => <Quote quote={quote} key={key} />)
  );
};
export default QuotesList;
