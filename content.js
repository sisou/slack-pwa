/**
 * insert PWA manifest JSON
 */
const metaLink = document.createElement("link");
metaLink.setAttribute("rel", "manifest");
metaLink.setAttribute(
  "href",
  "https://raw.githubusercontent.com/sisou/slack-pwa/sisou/rounded-icons/pwa/pwa-manifest.json"
);
document.head.appendChild(metaLink);
