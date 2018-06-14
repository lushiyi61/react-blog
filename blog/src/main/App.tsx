import * as React from 'react';
import { background, portrait } from '../image/index';
import './App.css';

const sectionStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
};
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header" style={sectionStyle}>
          <img src={portrait} className="App-logo" alt="logo" />
          <h1 className="App-title">路过历史的长河，拾取祖先的遗训</h1>
          <h1 className="App-title">——路拾遗</h1>
        </header>
        <p className="App-intro">尝试用react开发一个静态Blog</p>
        <p className="App-intro">尝试使用typescript开发react项目</p>
        <p className="App-intro">——最新更新日期</p>
        <p className="App-intro">2018年6月14日</p>
        <footer className="App-footer">
          <p>湘ICP备15015794号</p>
        </footer>
      </div>
    );
  }
}

export default App;
