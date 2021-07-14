import { UxpPersonaData } from '../_helpers/uxppersonadata';



export const UxpImageUtils = {

   /**
    * The UXPin logo, black filled style
    */
   uxpinLogoBlack: "https://raw.githubusercontent.com/uxpin-merge/fluent-ui-uxpin-merge/master/src/components/_helpers/_images/uxpin_logo_black.png",

   /**
    * The UXPin logo, white filled style
    */
   uxpinLogoWhite: "https://raw.githubusercontent.com/uxpin-merge/fluent-ui-uxpin-merge/master/src/components/_helpers/_images/uxpin_logo_white.png",

   /**
    * Unsplash: https://unsplash.com/photos/1kf69eE7VR4
    */
   goldenGateBridge: "https://raw.githubusercontent.com/uxpin-merge/fluent-ui-uxpin-merge/master/src/components/_helpers/_images/golden_gate_bridge.jpg",



   /**
   * The user may invoke an image by its token, as indicated
   * @param {string} token The token for an image. 
   * @returns {string} If found, returns a URL string. If not found, returns undefined.
   */
   getImageUrlByToken: function (token) {

      if (token && token.length) {
         let t = token.trim().toLowerCase().replaceAll(" ", "");

         //Let's return common URLs
         if (t.startsWith("http")) {
            return token;
         }

         if (t.startsWith("www")) {
            return "http://" + token;
         }

         if (t.startsWith("person")) {
            let persona = UxpPersonaData.getPersonaByToken(t);
            if (persona) {
               return persona?.imageUrl;
            }
         }

         switch (t) {
            case "woman":
            case "female":
               return UxpPersonaData.personaFemaleUrl;
            case "man":
            case "male":
               return UxpPersonaData.personaMaleUrl;
            case "uxpin":
            case "logo":
            case "uxpinlogo":
            case "uxpinlogoblack":
            case "logoblack":
            case "blacklogo":
            case "blacklogouxpin":
               return this.uxpinLogoBlack;
            case "uxpinlogowhite":
            case "whitelogo":
            case "logowhite":
            case "whitelogouxpin":
               return this.uxpinLogoWhite;
            case "bridge":
            case "goldengate":
            case "goldengatebridge":
               return this.goldenGateBridge;
            default:
               return undefined;
         }
      }

      return undefined;
   },

};




