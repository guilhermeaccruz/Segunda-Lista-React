function Saudacao(props) {
    return (
      <h1>{props.ehDia ? "Bom dia" : "Boa noite"}</h1>
    );
  }
  
  export default Saudacao;