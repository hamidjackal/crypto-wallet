import * as tw from "@trustwallet/wallet-core";

tw.initWasm().then((core) => {
  const wallet = core.HDWallet.create(256, "password");
  // let new_wallet = StoredKey.importHDWallet(
  //   wallet.mnemonic(),
  //   "hamid",
  //   Buffer.from("password"),
  //   "tron" as unknown as CoinType
  // );

  // const jsonData = new_wallet.exportJSON();
  // const json = JSON.parse(Buffer.from(jsonData).toString());
  // console.log("JSON: ", json);
  const mnemonic = wallet.mnemonic();

  const tron_address = wallet.getAddressForCoin(core.CoinType.tron);

  const storedKey = core.StoredKey.importHDWallet(
    mnemonic,
    "hamid",
    Buffer.from("password"),
    core.CoinType.tron
  );

  let key = wallet.getKeyForCoin(core.CoinType.tron);
  console.log("Key: ", key);

  let expoertedkey = storedKey.exportJSON();
  const jsonKey = JSON.parse(Buffer.from(expoertedkey).toString());
  console.log("Exported Key: ", jsonKey);

  console.log("Wallet Address: ", tron_address);
  wallet.delete();
});
