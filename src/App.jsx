import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import PanelLayout from "./components/layouts/PanelLayout";
import UsersTablePartial from "./components/partials/UsersTablePartial";
import ContentPartial from "./components/partials/ContentPartial";
import AwardsPartial from "./components/partials/AwardsPartial";
import QuestionPartial from "./components/partials/QuestionPartial";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <PanelLayout>
              <ContentPartial />
            </PanelLayout>
          </Route>

          <Route exact path="/Offer">
            <PanelLayout>
              <ContentPartial />
            </PanelLayout>
          </Route>
          <Route exact path="/Blog">
            <PanelLayout>
              <ContentPartial />
            </PanelLayout>
          </Route>

          <Route exact path="/Question">
            <PanelLayout>
              <QuestionPartial />
            </PanelLayout>
          </Route>

          <Route exact path="/Users">
            <PanelLayout>
              <UsersTablePartial />
            </PanelLayout>
          </Route>

          <Route exact path="/Awards">
            <PanelLayout>
              <AwardsPartial />
            </PanelLayout>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
