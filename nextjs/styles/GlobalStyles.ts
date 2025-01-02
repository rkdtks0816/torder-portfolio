import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "HakgyoansimByeolbichhaneul";
    src: url("/fonts/Hakgyoansim Byeolbichhaneul TTF B.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "HakgyoansimByeolbichhaneul";
    src: url("/fonts/Hakgyoansim Byeolbichhaneul TTF L.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "HakgyoansimSantteutdotum";
    src: url("/fonts/HakgyoansimSantteutdotumM.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "HakgyoansimSantteutdotum";
    src: url("/fonts/HakgyoansimSantteutdotumL.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  body, #__next {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: "HakgyoansimSantteutdotum", "HakgyoansimByeolbichhaneul", sans-serif;
  }
`;

export default GlobalStyles;
