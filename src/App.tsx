import Header from './components/Header'
import MainContent from "./components/MainContent"
import Rightbar from './components/Rightbar'
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.mainApp}>
      <Header/>
      <MainContent />
      <Rightbar />
    </div>
  )
}

export default App
