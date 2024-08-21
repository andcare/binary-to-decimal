import InputComponent from '../components/inputComponent.jsx'
import OutputComponent from '../components/outputComponent.jsx'
import ButtonComponent from '../components/buttonComponent.jsx'
import { UserInputContextProvider } from '../context/UserInputContext.jsx'
import { DecimalResultContextProvider } from '../context/DecimalResultContext.jsx'
import './index.css'

const Homepage = () => {
	return (
		<>
			<UserInputContextProvider>
				<DecimalResultContextProvider>
					<div className='header'>
						<h1> Binary to Decimal Converter </h1>
					</div>
					<div className='container'>
						<InputComponent />
						<OutputComponent />
						<ButtonComponent />
					</div>
				</DecimalResultContextProvider>
			</UserInputContextProvider>
		</>
	)
}

export default Homepage
