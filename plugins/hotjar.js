// Doc: https://nuxtjs.org/faq/google-analytics/

/* eslint-disable */

export default ({ app }) => {
  // Only run on client-side and only in production mode
  if (process.env.NODE_ENV !== 'production') return

  // Short-circuit this function if required env variable is undefined
  if (!process.env.HOTJAR_SITE_ID) return

  // Hotjar Tracking Code defined under process.env.HOTJAR_SITE_ID
  (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:process.env.HOTJAR_SITE_ID,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

}

