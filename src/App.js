import './App.css';
import { Routes, Route} from 'react-router-dom';
import Boshsahifa from './router/boshsahifa/Boshsahifa';
import Maktabimizhaqida from './router/maktabimizhaqida/Maktabimizhaqida'
import Oqituvchilar from './router/oqituvchilar/oqituvchilar'
import Oquvchilar from './router/oquvchilar/Oquvchilar';
import Boglanish from './router/boglanish/Boglanish'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Darsjadval from './router/darsjadval/Darsjadval';
import Elektrondarslik from './router/elektrondarslik/Elektrondarslik';
import Darsiwlanmalari from './router/darsiwlanmalari/Darsiwlanmalari';
import Galareya from './router/galareya/Galareya'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Boshsahifa/>}>Bosh sahifa</Route>
      <Route path='/maktabimizhaqida' element={<Maktabimizhaqida/>}>Maktabimiz haqida</Route>
      <Route path='/oqituvchilar' element={<Oqituvchilar/>}>O'qituvchilar</Route>
      <Route path='/oquvchilar' element={<Oquvchilar/>}>O'quvchilar</Route>
      <Route path='/boglanish' element={<Boglanish/>}>Bog'lanish</Route>
      <Route path='/darsjadval' element={<Darsjadval/>}> Dars jadvali</Route>
      <Route path='/elektrondarslik' element={<Elektrondarslik/>}>Video darslik</Route>
      <Route path='/darsiwlanmalari' element={<Darsiwlanmalari/>}>Video darslik</Route>
      <Route path='/galareya' element={<Galareya/>}>Video darslik</Route>

      </Routes> 
<br />
      <Footer/>
    </div>
  );
}

export default App;
