import Header from './components/Header.jsx'
import Location from './components/Location.jsx'
import data from '/data'
import './index.css'

function App() {
  const location = data.map(item => {
    return (
      <Location
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <>
      <div className="container">
        <Header />
        <section className='card-list'>
          {location}
        </section>
      </div>
    </>
  )
}

export default App
