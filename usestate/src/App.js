import React, {useState, useEffect, useMemo, useCallback} from 'react';

function App() {
  const [ tarefas, setTarefas ] = useState(['Pagar a conta de luz', 'Estudar React Hooks']);
  const [input, setInput] = useState('');

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);
  
  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
    
  }, [input, tarefas]);
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);
  return (
    <div className="App">
    <ul>
    {
      tarefas.map((tarefa) => (
        <li key={tarefa}>{tarefa}</li>
        ))
      }
      </ul>
      <br />
      <strong>Você tem {totalTarefas} tarefas</strong><br />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type='button' onClick={handleAdd} >Adicionar</button>
      </div>
      ); 
    }
    
    export default App;
    
    /* const [contador, setContador] = useState(0);
   
     function handleAdd(){
       setContador(contador + 1);
     }
     return(
       <div>
         <h1>{contador}</h1>
         <button type='button' onClick={handleAdd}>Adicioanar</button>
       </div>
     )*/