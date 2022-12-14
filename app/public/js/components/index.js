function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */

include('./js/components/chat.js');
include('./js/constants.js');
include('./js/components/cardsCarousel.js');
include('./js/components/botTyping.js');
include('./js/components/charts.js');
include('./js/components/collapsible.js');
include('./js/components/dropDown.js');
include('./js/components/location.js');
include('./js/components/pdfAttachment.js');
include('./js/components/quickReplies.js');
include('./js/components/suggestionButtons.js');
