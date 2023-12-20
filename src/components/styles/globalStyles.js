import styled from "styled-components";
import CardStockBackground from "../../assets/images/CardStockBackground.jpg";
import BadScriptRegular from "../../assets/fonts/badScript/BadScriptRegular.ttf";
import QuicksandRegular from "../../assets/fonts/quicksand/QuicksandRegular.ttf";
import LilyScriptOneRegular from "../../assets/fonts/lilyScript/LilyScriptOneRegular.ttf";

export const GlobalStyles = styled.div `
height: 100%;
position: relative;
padding-top: 144px;
padding-bottom: 80px;
min-height: 100vh;
background-image: url(${CardStockBackground});

@font-face {
    font-family: 'BadScriptRegular';
    src: 
    local("BadScriptRegular"),
    url(${BadScriptRegular}),
}    

@font-face {
    font-family: 'QuicksandRegular';
    src:
    local("QuicksandRegular"),
    url(${QuicksandRegular}),
}

@font-face {
    font-family: 'LilyScriptOneRegular';
    src:
    local('LilyScriptOneRegular'),
    url(${LilyScriptOneRegular})
}

* {
    font-family: "QuicksandRegular";
}
`;