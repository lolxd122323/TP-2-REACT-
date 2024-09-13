function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingrese un texto: 
          <input type="text" name="texto" />
        </p>
        <p>
          <input type="submit" value="Enviar" />
        </p>
      </form>
    </div>
  );
}

function presion(e) {
  e.preventDefault();
  alert('El texto que ingreso es: '+ e.target.texto.value);
}

export default App;