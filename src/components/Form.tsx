// 型定義
type FormPropsType={
    city:string;
    setCity: React.Dispatch<React.SetStateAction<string>>
    getWeather: (e:React.FormEvent<HTMLFormElement>) => void
}

// propsとして渡すものにも型を設定する必要がある
const Form = ({city, setCity, getWeather}:FormPropsType) =>{
    // // cityにはユーザが入力した都市名(state)
    // // setCityはcity内のデータを操作する
    // // useStateの()内は初期データ
    // // cityはstring型
    // const [city, setCity] = useState<string>("");
    
    // // 型が分からないときはanyを指定
    // const getWeather = (e:any) => {
    //     // buttonを押してもリロードが発生しない
    //     e.preventDefault();
    //         // fetchはAPIをコールする
    //         fetch("https://api.weatherapi.com/v1/current.json?key=f7a17ad90d344eae8ff50010233005&q=London&aqi=no")
    //         // resはAPIから送られてくる気象データ
    //         // console.log()はデータをコンソールに表示させる
    //         //.then(res => console.log(res))

    //         // resをjson形式のデータに変換
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }
    // ↑この部分をApp.tsxに移す

    return(
        <form onSubmit={getWeather}>
            {/* onChangeハンドラーは入力されたデータをsetCityに渡す
                eはevent parameter/event object
                入力された情報はeの中のtargetの中のvalueに格納されている
                setCityでe.target.valueのデータをcityに保管する */}
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} value={city}/>
            {/*onClickハンドラーを使ってbuttonを押すときにgetWeatherを呼び出す
            <button type="submit" onClick={props.getWeather}>Get Weather</button>
            ただしブラウザによっては正しく動作しない場合があるのでonSubmitに置き換える*/}
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;