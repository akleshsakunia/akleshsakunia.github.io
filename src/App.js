import "./styles/main.scss";

import Section from "./components/Section";
import SectionalData from "./shared/SectionalData";
import ChipList from "./components/ChipList";
import Profile from "./components/Profile";
import CommonData from "./shared/CommonData";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Profile />
        </div>
      </div>

      {/* <div container>
          <div item xs={12}>
            <div>
              <ChipList data={CommonData.skills} />
            </div>
          </div>
        </div>

        <div container justify="space-evenly">
          <div item xs={11} md={5}>
            <div item xs={12}>
              <div>
                <Section data={SectionalData["WORK EXPERIENCE"]} />
              </div>
            </div>
            <div item xs={12}>
              <div>
                <Section data={SectionalData["EDUCATION"]} />
              </div>
            </div>
            <div item xs={12}>
              <div>
                <Section data={SectionalData["ACHIEVEMENTS"]} />
              </div>
            </div>
          </div>

          <div item xs={11} md={5}>
            <div item xs={12}>
              <div>
                <Section data={SectionalData["PROJECTS"]} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
