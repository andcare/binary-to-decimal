import InputComponent from '../components/inputComponent.jsx'
import OutputComponent from '../components/outputComponent.jsx'
import ButtonComponent from '../components/buttonComponent.jsx'
import './index.css'

const Homepage = () => {
  return (
    <>
      <div className='header'>
        <h1> Binary to Decimal Converter </h1>
      </div>
      <div className='container'>
        <InputComponent />
        <OutputComponent result={101010} />
        <ButtonComponent />
      </div>
    </>
  )
}

export default Homepage
