// observer
import Observer from '../common/observer'

// library
import html2canvas from '../../lib/html2canvas'
import Pickr from '@simonwep/pickr'

// modules
import selectCategory from './selectCategory'
import selectVariation from './selectVariation'

// observer pattern modules
import tab from './tab'
import frame from './frame'
import createButton from './createButton'
import result from './result'
import selectParts from './selectParts'
import selectBackgroundColor from './selectBackgroundColor'

export default () => {
    const observer = new Observer

    frame(observer)
    result(observer)
    tab(observer)
    selectBackgroundColor(observer, Pickr)
    selectCategory(observer)
    selectVariation(observer)
    selectParts(observer)
    createButton(observer, html2canvas)
}
