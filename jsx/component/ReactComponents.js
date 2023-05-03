class MyFirstComponent extends React.Component{
    render(){
        return(
            <div>
                <h2 className="class-highlight">Hello world from a compoment!</h2>
            </div>
        );
    }
}

class MyFruitList extends React.Component {
    render(){
        const orage_str = "Orange";
        const apple_str = "Apple";
        const banana_str = "Banana";

        const imagesrc = "../images/fruit.jpg";
        const img_el = <img src={imagesrc} />

        var items = ['JackFruite', 'Mango', 'Strawberry', 'Grapes', 'Peach']
        var item = items[Math.floor(Math.random()*items.length)];

        const fruit_list = (
            <div>
                <div key="el-key" >Some of my favoutie frutes</div>
                <ol>
                    <li key="O-key">{orage_str}</li>
                    <li key="B-key">{apple_str}</li>
                    <li key="A-key">{banana_str}</li>                        
                    <li key="N-key" className="my-list">{item}</li>
                </ol>
                {img_el}
            </div>
        );

        return fruit_list;

    }
}

ReactDOM.render(<MyFirstComponent/>, document.getElementById("my-first-component"));

function on_tick(){
    ReactDOM.render(<MyFruitList/>, document.getElementById("my-fruit-list"));
}

setInterval( on_tick, 2000);