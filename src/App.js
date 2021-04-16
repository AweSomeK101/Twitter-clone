import "./App.css";
import { GlobalProvider } from "./Global";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Right from "./components/Right";

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Sidebar />

        <Feed />

        <Right />
      </div>
    </GlobalProvider>
  );
}
export default App;
