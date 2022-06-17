import './App.css';
import { TreeView } from './TreeView';
/*  [ {
    id: 1,
    text: "Root",
    icon: "folder",
    expanded: false,
    children: [ {
      id: 3,
      selected: true,
      checked: false,
      text: "Child 1",
      iconObj: {
        name: 'rocket',
        size: '2x',
        spin: true,
        style: { color: 'red' }
      },
      children: [ { id: 5, text: "Grandchild 1" } ]
    }
    ]
  }],*/
function App() {
let data = {
    lorem: {
      ipsum: "dolor sit",
      amet: {
        consectetur: "adipiscing",
        elit: [
          "duis",
          "vitae",
          {
            semper: "orci"
          },
          {
            est: "sed ornare"
          },
          "etiam",
          [ "laoreet", "tincidunt" ],
          [ "vestibulum", "ante" ]
        ]
      },
      ipsum: "primis"
    }
  };
  return (
    <div className="App">
      <TreeView data={ data } name='data' />
    </div>
  );
}

export default App;
