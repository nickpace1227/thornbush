import {createGlobalStyle} from "styled-components";
import BadScriptRegular from "./badScript/BadScriptRegular.ttf";
import QuicksandRegular from "./quicksand/QuicksandRegular.ttf";
import LilyScriptOneRegular from "./lilyScript/LilyScriptOneRegular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'BadScriptRegular';
        font-family: 'QuicksandRegular';
        font-family: 'LilyScriptOneRegular';
        src: local('BadScriptRegular'), local('QuicksandRegular'), local('LilyScriptOneRegular'),
        url(${QuicksandRegular}),
        url(${BadScriptRegular})
        url(${LilyScriptOneRegular});
    }
`;