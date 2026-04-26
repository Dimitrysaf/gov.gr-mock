import './styles.scss'
import { initAll } from 'govuk-frontend'
import { initLayout } from './components/layout.js'
import { initHome } from './pages/home.js'

initLayout()
initHome()
initAll()