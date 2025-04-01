import './App.css'
import data from './data.json'
import Section from './Section'

function App() {

  return (
    <div className='grid'>
      {
        data.map(item => (
          <Section key={item.id} {...item} />
        ))
      }
    </div>
  )
}

export default App
