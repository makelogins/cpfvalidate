import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";


function App() {
  
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [mask, setMask] = useState("");
  const[messagem,setmessagem]=useState("");


  function an(t){
    
    const um=Number(t.charAt(0));
    const dois=Number(t.charAt(1));
    const tres=Number(t.charAt(2));
    const quatro=Number(t.charAt(4));
    const cinco=Number(t.charAt(5));
    const seis=Number(t.charAt(6));
    const oito=Number(t.charAt(8));
    const nove=Number(t.charAt(9));
    const dez=Number(t.charAt(10));
    const doze =Number(t.charAt(12))
    let soma=um*10+dois*9+tres*8+quatro*7+cinco*6+seis*5+oito*4+nove*3+dez*2;
    soma=soma*10;
    const resto=soma%11;
    if (resto==10){
      resto=0
    }
     
    if(resto===doze){
      setmessagem('=================>  CPF Válido <=================')
    }else{
      setmessagem('==================>  CPF Inválido <===============')
    }

     
  


  }

  return (
    <div>
      <p>Digite um CPF:</p>
      <CpfCnpj
        value={cpfCnpj}
        onChange={(event, type) => {
          setCpfCnpj(event.target.value);
          setMask(type === "CPF");




          if(event.target.value === "000.000.000-00" ||event.target.value === "111.111.111-11" ||event.target.value ==="222.222.222-22" ||event.target.value ==="333.333.333-33" ||event.target.value ==="444.444.444-44" ||event.target.value ==="555.555.555-55" ||event.target.value ==="666.666.666-66" ||event.target.value ==="777.777.777-77" ||event.target.value ==="888.888.888-88" ||event.target.value ==="999.999.999-99"){
          
		  setmessagem('==================>  CPF Inválido <===============')
		  return false;
          }
          if(event.target.value.length==14){
            an(event.target.value)
          }
          
        }}
      />

      <p>{messagem}</p>
    </div>
  );
}

export default App;