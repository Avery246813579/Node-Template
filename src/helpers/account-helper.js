import Accounts from "./../tables/account/Accounts";

export async function loginTest() {
  let account = await Accounts.findOne({ID: 1});
  if (account === null) {
    return Promise.reject("BAD DAY");
  }

  return account;
}
