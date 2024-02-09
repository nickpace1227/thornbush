import styled from "styled-components";
import CardStockBackground from "../../assets/images/CardStockBackground.jpg";
import BadScriptRegular from "../../assets/fonts/BadScriptRegular.ttf";
import QuicksandRegular from "../../assets/fonts/QuicksandRegular.ttf";

export const GlobalStyles = styled.div`
  height: 100%;
  position: relative;
  padding-top: 144px;
  padding-bottom: 48px;
  min-height: 100vh;
  background-image: url(${CardStockBackground});

  @font-face {
    font-family: "BadScriptRegular";
    src: local("BadScriptRegular"), url(${BadScriptRegular});
  }

  @font-face {
    font-family: "QuicksandRegular";
    src: local("QuicksandRegular"), url(${QuicksandRegular});
  }

  * {
    font-family: "QuicksandRegular";
  }
`;
