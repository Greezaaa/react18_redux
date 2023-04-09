import { Counter } from "./counter/counter";
import { Msg } from "./msg/msg";
import { Worker } from "./Worker/worker";
import { TranslatorApp } from "./translator/translator";
import { Header } from "./header/header";

function App() {
  return (
<>  
    <Header />
    <Counter/>
    <Msg/>
    <hr />
    <Worker />
    <hr />
    <TranslatorApp />
</ >  );
}

export default App;
