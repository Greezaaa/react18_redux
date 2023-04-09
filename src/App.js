import { Counter } from "./counter/counter";
import { Msg } from "./msg/msg";
import { Worker } from "./Worker/worker";
import { TranslatorApp } from "./translator/translator";

function App() {
  return (
<>
    <Counter/>
    <Msg/>
    <hr />
    <Worker />
    <hr />
    <TranslatorApp />
</ >  );
}

export default App;
