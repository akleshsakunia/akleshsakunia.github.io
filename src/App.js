import "./styles/main.scss";

import Section from "./components/Section";

import Profile from "./components/Profile";
import CommonData from "./shared/CommonData";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Profile />
        <Section />
      </div>
    </div>
  );
}

export default App;
