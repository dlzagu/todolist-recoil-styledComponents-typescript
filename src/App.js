import { RecoilRoot } from "recoil";
import TodoList from "./pages/TodoList.jsx";
function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
