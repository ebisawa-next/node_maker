
// library
import html2canvas from '../../lib/html2canvas'
import Pickr from '@simonwep/pickr'

// modules
import createButton from './createButton'
import frame from './frame'
import result from './result'
import tab from './tab'
import selectBackgroundColor from './selectBackgroundColor'
import selectCategory from './selectCategory'
import selectVariation from './selectVariation'

export default () => {
    createButton(html2canvas)
    frame()
    result()
    tab()
    selectBackgroundColor(Pickr)
    selectCategory()
    selectVariation()
}
