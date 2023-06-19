import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter, Navigate} from "react-router-dom";
import {Routes, Route} from "react-router";
import AuthContext from "./tuiter/user/auth-context";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./tuiter/reducers/who-reducer";
import tuitsReducer from "./tuiter/reducers/tuits-reducer";
import authReducer from "./tuiter/reducers/auth-reducer";
import {Provider} from "react-redux";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer,user:  authReducer}});
function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
        <AuthContext>
        <div className="container">
          <Routes>
            <Route path="/"         element={<Navigate to="/labs/a3"/>}/>
            <Route path="/labs/*"   element={<Labs/>}/>
            <Route path="/hello"    element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
          </Routes>
        </div>
        </AuthContext>
        </Provider>
      </BrowserRouter>
  );

}

export default App;
