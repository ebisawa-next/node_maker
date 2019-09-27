// scss
import './scss/style.scss';

// library
import html2canvas from './js/lib/html2canvas'
import Pickr from '@simonwep/pickr'

// modules
import createButton from './js/pages/maker/createButton'
import frame from './js/pages/maker/frame'
import result from './js/pages/maker/result'
import tab from './js/pages/maker/tab'
import selectBackgroundColor from './js/pages/maker/selectBackgroundColor'
import selectCategory from './js/pages/maker/selectCategory'
import selectVariation from './js/pages/maker/selectVariation'

createButton(html2canvas)
frame()
result()
tab()
selectBackgroundColor(Pickr)
selectCategory()
selectVariation()
