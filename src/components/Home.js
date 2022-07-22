import React from "react";
import {rootStore} from "../stores";
import {observer} from "mobx-react";

const Home = observer(() => {
  return (
    <div>
      <button type="button" onClick={() => rootStore.Authenticate()}>Login</button>
    </div>
  );
});

export default Home;
