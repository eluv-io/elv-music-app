import {configure, flow, makeAutoObservable} from "mobx";
import {ElvWalletClient} from "@eluvio/elv-client-js/src/walletClient";
import {ElvClient} from "@eluvio/elv-client-js";

// Force strict mode so mutations are only allowed within actions.
configure({
  enforceActions: "always"
});

class RootStore {
  client = undefined;
  walletClient = undefined;
  loggedIn = false;

  constructor() {
    makeAutoObservable(this);

    this.Initialize();
  }

  Initialize = flow(function * () {
    this.client = yield ElvClient.FromConfigurationUrl({
      configUrl: EluvioConfiguration["config-url"],
      assumeV3: true
    });

    this.walletClient = new ElvWalletClient({
      client: this.client,
      network: EluvioConfiguration["network"],
      mode: EluvioConfiguration["mode"]
    });
  });

  Authenticate = flow(function * () {
    try {
      this.loggedIn = false;
      yield this.walletClient.LogIn({
        method: "redirect",
        callbackUrl: "http://localhost:8099/#/content"
      });

      this.loggedIn = true;
    } catch(error) {
      console.error(error);
    }
  });

}

export const rootStore = new RootStore();

window.rootStore = rootStore;
