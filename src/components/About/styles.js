import styled from "styled-components";

export const Wrapper = styled.div`
  .about-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
  }

  .about-words {
    width: 50%;
    max-width: 600px;
    backdrop-filter: blur(2px);
    padding: 8px;
    border-radius: 4px; 
  }
`;
