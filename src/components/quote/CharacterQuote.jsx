import { useParams } from "react-router-dom";
import { useGetQuoteByNameQuery } from "../../store/api/quoteApi";

const CharacterQuote = () => {
  const { name } = useParams();
  const { data: quote = [], isLoading } = useGetQuoteByNameQuery(name);
  return isLoading ? (
    <h2>Cargando</h2>
  ) : (
    <div>
      <h3>{quote[0]?.character}</h3>
      <img src={`${quote[0]?.image}`} alt={quote.character} />
      <p>{quote[0]?.quote}</p>
    </div>
  );
};
export default CharacterQuote;
