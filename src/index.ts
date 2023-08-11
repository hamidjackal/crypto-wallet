import * as tw from "@trustwallet/wallet-core";

tw.initWasm().then(() => {
  console.log("WASM loaded");
});
