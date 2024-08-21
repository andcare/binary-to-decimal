import PropTypes from 'prop-types'

const OutputComponent = ({ result }) => {
  return (
    <div className='output-container'>
      <p className='result-component'>Result: <span className='value'>{result}</span></p>
    </div>
  )
}

OutputComponent.propTypes = {
  result: PropTypes.number
}

export default OutputComponent
