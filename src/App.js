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
        <Route path="/result" element={<Result />} />
        <Route path="/testing/:linkid" element={<QnA />} />
      </Routes> 

    </>
  );
}

export default App;
