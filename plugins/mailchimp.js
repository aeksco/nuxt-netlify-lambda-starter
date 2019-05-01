// Doc: https://nuxtjs.org/faq/google-analytics/

/* eslint-disable */

export default ({ app }) => {
  // Only run on client-side and only in production mode
  if (process.env.NODE_ENV !== 'production') return;

  // Short circuit if the required env variables aren't available
  if (!process.env.MAILCHIMP_BASE_URL || !process.env.MAILCHIMP_UUID || !process.env.MAILCHIMP_LID) return;

  /* eslint-disable */

  // Add Mailchimp popup loader script
  const chimpPopupLoader = document.createElement("script");
  chimpPopupLoader.type = 'text/javascript'
  chimpPopupLoader.src = '//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js';
  chimpPopupLoader.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false');

  // // Load Mailchimp signup form script
  const chimpPopup = document.createElement("script");
  chimpPopup.type = 'text/javascript'
  chimpPopup.appendChild(document.createTextNode('window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl": "' +  process.env.MAILCHIMP_BASE_URL + '", "uuid": "' + process.env.MAILCHIMP_UUID + '", "lid": "' + process.env.MAILCHIMP_LID + '", "uniqueMethods":true})});'));

  // Add the Mailchimp loader when the page loads
  chimpPopupLoader.onload = function() {
    document.body.appendChild(chimpPopup);
  }

  // Add the Mailchimp popup loader to the body
  document.body.appendChild(chimpPopupLoader);
}
