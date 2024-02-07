import Accordion from "../components/Accordion";

function App() {
  const items = [
    {
      id: 'asdf',
      label: 'Can I use React on a Project?',
      content: 'You can use React on Any Project.You can use React on Any Project.You can use React on Any Project.You can use React on Any Project.You can use React on Any Project.'
    },
    {
      id : 'afsadfg',
      label: 'Can I use JavaScript on a Project',
      content: 'You can use React on Any Project.You can use React on Any Project.You can use React on Any Project.You can use React on Any Project.You can use React on Any Project.'
    },
    {
      id: 'hfgcx',
      label: 'Can I use CSS on a Project',
      content: 'You can use React on Any Project.You can use React on Any Project.You can use React on Any Project.You can use React on Any Project.You can use React on Any Project.'
    }
  ]
  
  return <Accordion items={items}/>;
}

export default App;