import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Background from "./components/Background"
import Footer from "./sections/Footer"
import Navbar from "./sections/Navbar"
import Wrapper from "./sections/Wrapper"
import PokeDex from "./pages/PokeDex"
import About from "./pages/About"
import Compare from "./pages/Compare"
import Pokemon from "./pages/Pokemon"
import { ToastContainer, toast } from "react-toastify"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"

function App() {

  const {toasts} = useAppSelector(({app})=>app);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    if(toasts.length){
      toasts.forEach((message:string)=>{
        toast(message)
      })
    }
  },[toasts,dispatch])

  return (
    <>
      <div className="relative max-w-screen overflow-hidden h-screen m-0 p-0 box-border">
        <Background />
        <BrowserRouter>
          <div className="z-[1] bg-[rgba(4,6,20,0.85)] h-screen w-screen shadow-[0_8px_32px_0_rgba(6,8,28,0.37)] backdrop-blur-[50px] border border-[rgba(23,20,20,0.18)] grid grid-rows-[10vh_auto_10vh] grid-cols-1">
            <Navbar />
            <Routes>
              <Route element={<PokeDex />} path="/search" />
              <Route element={<About />} path="/about" />
              <Route element={<Compare />} path="/compare" />
              <Route element={<Pokemon />} path="/pokemon/:id" />
              <Route element={<Navigate to="/pokemon/1" />} path="*" />
            </Routes>
            <Footer />
            <ToastContainer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
