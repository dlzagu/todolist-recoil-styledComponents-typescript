import styled from "styled-components";
import { useEffect, useState } from "react";
import quotes from "../dev/quotes";
const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

  useEffect(() => {
    setQuote(todayQuote.quote);
    setAuthor(todayQuote.author);
  }, [quote, author]);

  return (
    <Wrapper>
      <Span>TODAY QUOTE :{quote}</Span>
      <Span>AUTHOR :{author}</Span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.7;
  font-style: italic;
  font-size: 1.2rem;
  position: fixed;
  bottom: 2.5rem;
  left: 2.5rem;
`;

const Span = styled.span`
  color: white;
  margin-bottom: 0.5rem;
`;
export default Quote;
