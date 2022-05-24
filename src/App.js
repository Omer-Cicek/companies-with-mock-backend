import './App.css';
import AppRouter from './router/AppRouter';
import { Layout } from 'antd';

function App() {
  return (
    <Layout className="mainLayout">
      <AppRouter>
        <div className="App" />
      </AppRouter>
    </Layout>
  );
}

export default App;
