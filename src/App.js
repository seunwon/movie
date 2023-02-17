import { Route, Routes } from 'react-router-dom';
import Result from './pages/Result';
import Qpage from './pages/Qpage';
import Start from './pages/Start';
import QnA from './pages/QnA';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/testing" element={<Qpage />} />
        <Route path="/testing/:Id" element={<QnA />} />
        <Route path="/result" element={<Result />} />
      </Routes> 

    </>
  );
}

export default App;
