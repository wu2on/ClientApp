import React from "react";

import "./App.css";
import { Row, Col } from "antd";
import { store } from "./store/reducer";
import { Provider } from "react-redux";
import Header from "./component/Header";
import ListNotes from "./component/ListNotes";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header></Header>
            <Row justify="center">
        <Col span={18}>
          <ListNotes></ListNotes>
                </Col>
      </Row>
    </div>
  </Provider>
);

export default App;
