import { log } from "console";
import { PromiseOrValue } from "../typechain-types/common";

export function getString(a: PromiseOrValue<string>) {
  console.log("N");
  console.log(a);

  let str = "";
  (async () => {
    return await a;
  })();
  return str;
}
