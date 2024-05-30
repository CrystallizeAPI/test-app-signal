import { signal } from "@crystallize/app-signal";

signal.setDebug(true);

document.querySelector("#send-signal").addEventListener("click", () => {
  const params = new URLSearchParams(window.location.search);

  const itemId = params.get("product-id");
  const itemLanguage = params.get("language");

  console.log({ itemId, itemLanguage });

  try {
    signal.send("refetchItem", { itemId, itemLanguage });
  } catch (e) {
    console.log(e);
  }
});
