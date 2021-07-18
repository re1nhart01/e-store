import React from 'react';
import './App.css';
import context from './context';
import {Component, Routing} from "./Routing";


interface IProps {}
interface IState {
    name: string,
    surname: string,
    id: number,
    token: string
}

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {id: 0, name: "", surname: "", token: ""}
    }


  render(): JSX.Element {
  return (
      <context.Provider value={this.state}>
      <div>
          {Routing(<Component />)}
      </div>
      </context.Provider>
  )
  }
}
export default App;

