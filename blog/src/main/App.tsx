import * as React from 'react';
import './App.css';
import { background, portrait } from '../image/index';

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
        <body className="App-body">
          <div className="App-intro">尝试用react开发一个静态Blog</div>
          <div className="App-intro">尝试使用typescript开发react项目</div>
          <div className="App-intro">——最新更新日期</div>
          <div className="App-intro">2018年6月15日</div>
        </body>
        <footer className="App-footer">
          <a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">湘ICP-15015794</a>
          <div>Copyright © 2018 lushiyi.cn All Rights Reserved</div>
        </footer>
      </div>
    );
  }
}

export default App;
