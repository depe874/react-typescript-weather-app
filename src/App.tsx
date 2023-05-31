import { useState } from "react";
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

// 型定義
type ResultsStateType = {
  country:string;
  cityName:string;
  temperature:string;
  conditionText:string;
  icon:string;
}

function App() {
  // cityにはユーザが入力した都市名(state)
  // setCityはcity内のデータを操作する
  // useStateの()内は初期データ
  // cityはstring型
  const [city, setCity] = useState<string>("");

  // 複数のデータを保管するため，入れ子構造
  const [results, setResults] = useState<ResultsStateType>({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  });
  
  // 型が分からないときはanyを指定
  // このeはTypeScriptの型ではなくReactが定義している型
  const getWeather = (e:React.FormEvent<HTMLFormElement>) => {
    // buttonを押してもリロードが発生しない
    e.preventDefault();
    // fetchはAPIをコールする
    // バッククオートと$を使ってcityを代入する
    fetch(`https://api.weatherapi.com/v1/current.json?key=f7a17ad90d344eae8ff50010233005&q=${city}&aqi=no`)
    // resはAPIから送られてくる気象データ
    // console.log()はデータをコンソールに表示させる
    //.then(res => console.log(res))

    // resをjson形式のデータに変換
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(data => {
      setResults({
        country:data.location.country,
        cityName:data.location.name,
        temperature:data.current.temp_c,
        conditionText:data.current.condition.text,
        icon:data.current.condition.icon
      })
    })
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Title/>
        {/*タグの中に渡すものとその名前を書くと，
         そのコンポーネントにpropsを渡せる */}
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results results={results}/>
      </div>
    </div>
  );
}

export default App;
