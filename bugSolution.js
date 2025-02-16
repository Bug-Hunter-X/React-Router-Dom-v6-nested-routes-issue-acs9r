```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutLayout/>} >
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <div>Home</div>;}

function AboutLayout() {
  return (
    <div>
      <h1>About</h1>
      <Outlet/>
    </div>
  )
}

function Contact() { return <div>Contact</div>;}
export default App;
```