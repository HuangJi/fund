import ReactDOM from 'react-dom';
import React from 'react';

const fundData = {
  EDR20: {
    fundChineseName: '愛德蒙得洛希爾基金-全球新興市場基金(A)-歐元',
    fundEnglishName: 'Edmond de Rothschild Fund — Global Emerging(A)-EUR (LU1103293855)',
    currencyType: 'EUR',
    isinCode: 'LU1103293855',
    generalAgentId: 'A0027',
    generalAgentName: '宏利證券投資信託股份有限公司',
    offshoreInstitutionId: '113',
    offshoreInstitutionName: '愛德蒙得洛希爾資產管理公司(盧森堡)/ EDMOND DE ROTHSCHILD ASSET MANAGEMENT (LUXEMBOURG)',
  },
  EDR21: {
    fundChineseName: '愛德蒙得洛希爾基金-美國價值收益基金(A)-歐元',
    fundEnglishName: 'Edmond de Rothschild Fund — US Value & Yield(A)-EUR (LU1103303167)',
    currencyType: 'EUR',
    isinCode: 'LU1103303167',
    generalAgentId: 'A0027',
    generalAgentName: '宏利證券投資信託股份有限公司',
    offshoreInstitutionId: '113',
    offshoreInstitutionName: '愛德蒙得洛希爾資產管理公司(盧森堡)/ EDMOND DE ROTHSCHILD ASSET MANAGEMENT (LUXEMBOURG)',
  },
  EDR22: {
    fundChineseName: '愛德蒙得洛希爾基金-全球新興市場基金(A)-美元',
    fundEnglishName: 'Edmond de Rothschild Fund — Global Emerging(A)-USD (LU1103293939)',
    currencyType: 'USD',
    isinCode: 'LU1103293939',
    generalAgentId: 'A0027',
    generalAgentName: '宏利證券投資信託股份有限公司',
    offshoreInstitutionId: '113',
    offshoreInstitutionName: '愛德蒙得洛希爾資產管理公司(盧森堡)/ EDMOND DE ROTHSCHILD ASSET MANAGEMENT (LUXEMBOURG)',
  },
  EDR23: {
    fundChineseName: '愛德蒙得洛希爾基金-美國價值收益基金(A)-美元',
    fundEnglishName: 'Edmond de Rothschild Fund — US Value & Yield(A)-USD (LU1103303241)',
    currencyType: 'USD',
    isinCode: 'LU1103303241',
    generalAgentId: 'A0027',
    generalAgentName: '宏利證券投資信託股份有限公司',
    offshoreInstitutionId: '113',
    offshoreInstitutionName: '愛德蒙得洛希爾資產管理公司(盧森堡)/ EDMOND DE ROTHSCHILD ASSET MANAGEMENT (LUXEMBOURG)',
  },
  EEMAAU: {
    fundChineseName: '摩根基金 - 新興歐洲、中東及非洲基金 - JPM 新興歐洲、中東及非洲（美元） - A股(累計)',
    fundEnglishName: 'JPMorgan Funds — Emerging Europe、 Middle East and Africa Equity Fund - JPM Emerging Europe、 Middle East and Africa Equity A(acc) - USD',
    currencyType: 'USD',
    isinCode: 'LU0210529573',
    generalAgentId: 'A0011',
    generalAgentName: '摩根證券投資信託股份有限公司',
    offshoreInstitutionId: '007',
    offshoreInstitutionName: '摩根資產管理(歐洲)有限公司/JPMORGAN ASSET MANAGEMENT (EUROPE) S.A.R.L.',
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      red: 0,
      green: 0,
      blue: 0,
      data: 'yo data',
      fundId: 'EDR20',
      fundChineseName: '愛德蒙得洛希爾基金-全球新興市場基金(A)-歐元',
      fundEnglishName: 'Edmond de Rothschild Fund — Global Emerging(A)-EUR (LU1103293855)',
      currencyType: 'EUR',
      isinCode: 'LU1103293855',
      generalAgentId: 'A0027',
      generalAgentName: '宏利證券投資信託股份有限公司',
      offshoreInstitutionId: '113',
      offshoreInstitutionName: '愛德蒙得洛希爾資產管理公司(盧森堡)/ EDMOND DE ROTHSCHILD ASSET MANAGEMENT (LUXEMBOURG)',
    };
    this.update = this.update.bind(this);
    console.log('construct!!!');
  }
  update(e) {
    this.setState({
      txt: e.target.value,
      fundId: e.target.value,
      fundChineseName: fundData[e.target.value].fundChineseName,
      fundEnglishName: fundData[e.target.value].fundEnglishName,
      currencyType: fundData[e.target.value].currencyType,
      isinCode: fundData[e.target.value].isinCode,
      generalAgentId: fundData[e.target.value].generalAgentId,
      generalAgentName: fundData[e.target.value].generalAgentName,
      offshoreInstitutionId: fundData[e.target.value].offshoreInstitutionId,
      offshoreInstitutionName: fundData[e.target.value].offshoreInstitutionName,
      // red: ReactDOM.findDOMNode(this.refs.red).value,
      // green: ReactDOM.findDOMNode(this.refs.green).value,
      // blue: ReactDOM.findDOMNode(this.refs.blue).value,
    });
  }
  render() {
    // let txt = this.props.txt;
    return (
      <div>
        <FundDataTable />
      </div>
    );
    // return React.creatElement('')
  }
}

class FundDataTable extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      red: 0,
      green: 0,
      blue: 0,
      data: 'yo data',
      fundId: 'EDR20',
      fundChineseName: '愛德蒙得洛希爾基金-全球新興市場基金(A)-歐元',
      fundEnglishName: 'Edmond de Rothschild Fund — Global Emerging(A)-EUR (LU1103293855)',
      currencyType: 'EUR',
      isinCode: 'LU1103293855',
      generalAgentId: 'A0027',
      generalAgentName: '宏利證券投資信託股份有限公司',
      offshoreInstitutionId: '113',
      offshoreInstitutionName: '愛德蒙得洛希爾資產管理公司(盧森堡)/ EDMOND DE ROTHSCHILD ASSET MANAGEMENT (LUXEMBOURG)',
    };
    this.update = this.update.bind(this);
    console.log('construct!!!');
  }
  update(e) {
    this.setState({
      txt: e.target.value,
      fundId: e.target.value,
      fundChineseName: fundData[e.target.value].fundChineseName,
      fundEnglishName: fundData[e.target.value].fundEnglishName,
      currencyType: fundData[e.target.value].currencyType,
      isinCode: fundData[e.target.value].isinCode,
      generalAgentId: fundData[e.target.value].generalAgentId,
      generalAgentName: fundData[e.target.value].generalAgentName,
      offshoreInstitutionId: fundData[e.target.value].offshoreInstitutionId,
      offshoreInstitutionName: fundData[e.target.value].offshoreInstitutionName,
      // red: ReactDOM.findDOMNode(this.refs.red).value,
      // green: ReactDOM.findDOMNode(this.refs.green).value,
      // blue: ReactDOM.findDOMNode(this.refs.blue).value,
    });
  }
  render() {
    return (
      <div>
        <h2>請輸入基金代碼查詢</h2>
        <input type="text" onChange={this.update} />
        <hr />
        <table>
          <tbody>
            <tr>
              <th>中文欄位</th>
              <th>資料</th>
            </tr>
            <tr>
              <td>基金代碼</td>
              <td>{this.state.fundId}</td>
            </tr>
            <tr>
              <td>基金中文名稱</td>
              <td>{this.state.fundChineseName}</td>
            </tr>
            <tr>
              <td>基金英文名稱</td>
              <td>{this.state.fundEnglishName}</td>
            </tr>
            <tr>
              <td>基金種類</td>
              <td>{this.state.fundEnglishName}</td>
            </tr>
            <tr>
              <td>幣別</td>
              <td>{this.state.currencyType}</td>
            </tr>
            <tr>
              <td>ISIN代碼</td>
              <td>{this.state.isinCode}</td>
            </tr>
            <tr>
              <td>總代理機構代碼</td>
              <td>{this.state.generalAgentId}</td>
            </tr>
            <tr>
              <td>總代理機構名稱</td>
              <td>{this.state.generalAgentName}</td>
            </tr>
            <tr>
              <td>總代理機構簡稱</td>
              <td>{this.state.fundEnglishName}</td>
            </tr>
            <tr>
              <td>境外基金機構代碼</td>
              <td>{this.state.offshoreInstitutionId}</td>
            </tr>
            <tr>
              <td>境外基金機構名稱</td>
              <td>{this.state.offshoreInstitutionName}</td>
            </tr>
            <tr>
              <td>是否為境外基金</td>
              <td>true</td>
            </tr>
            <tr>
              <td>投資地區</td>
              <td>區域/已開發歐洲</td>
            </tr>
            <tr>
              <td>日期淨值</td>
              <td>999</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// var Slider = React.createClass({
//   render() {
//     return (
//       <input
//         type="range"
//         min="0"
//         max="255"
//         onChange={this.props.update} />
//     )
//   }
// }
// const App = () => <h1>Hello Eggheads</h1>
// const Widget = (props) => {
//   return (
//     <div>
//       <input type="text" onChange={props.update} />
//       <h1>{props.txt}</h1>
//     </div>
//   );
// }

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired,
};

App.defaultProps = {
  txt: 'this is default txt',
};

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
);
