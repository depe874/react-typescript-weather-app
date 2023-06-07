const Title = () =>{
    return(
        <h1>React World Weather</h1>
    );
};
// returnを省略することもできる
// ただし｛｝が（）に変わる
const Title1 = () =>(
    <h1>React World Weather</h1>
);

// returnの中に要素が一つしかない場合は（）まで省略できる
const Title3 = () => <h1>React World Weather</h1>

export default Title;