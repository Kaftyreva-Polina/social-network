import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {ActionsPropsType} from "./redux/store";
import {AppRootReducerType} from "./redux/redux-store";


export type AppPropsType = {
    state: AppRootReducerType,
    dispatch: (action: ActionsPropsType) => void
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile"
                       render={() => <Profile profilePage={props.state.profile} dispatch={props.dispatch}/>}/>
                <Route path="/dialogs"
                       render={() => <Dialogs dialogsPage={props.state.dialogs} dispatch={props.dispatch}/>}/>
                <Route path="/news" render={News}/>
                <Route path="/music" render={Music}/>
                <Route path="/settings" render={Settings}/>
            </div>
        </div>
    );
}
export default App;



