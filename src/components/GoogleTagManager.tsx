import Script from "next/script";

export function GoogleTagManager() {
  const id = process.env.NEXT_PUBLIC_GTM_ID;
  if (process.env.VERCEL_ENV !== "production" || !id || !/^GTM-[A-Z0-9]+$/.test(id)) return null;
  return <Script id="kinetic-tag-manager" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id=${id}';document.head.appendChild(s);`}</Script>;
}
