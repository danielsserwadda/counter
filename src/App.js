import Header from './components/Header'
import Counter from './components/Counter'

const App = () => {
  return (
    <div style={container}>
      <Header />
      <Counter />
    </div>
  );
}

const container = {
  width: '30%',
  margin: 'auto',
  textAlign: 'center',
  padding: '25px',
  marginTop: '12px',
  backgroundColor: '#f3f3f3',

}

export default App;
