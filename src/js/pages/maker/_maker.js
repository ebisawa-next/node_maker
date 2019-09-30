// observer
import Observer from '../common/observer'

// library
import html2canvas from '../../lib/html2canvas'
import Pickr from '@simonwep/pickr'

// modules
import selectBackgroundColor from './selectBackgroundColor'
import selectCategory from './selectCategory'
import selectVariation from './selectVariation'

// observer pattern
import tab from './_tab'
import frame from './_frame'
import createButton from './createButton'
import result from './result'
import selectParts from './selectParts'

export default () => {
    const observer = new Observer

    // createButton(html2canvas)
    frame(observer)
    result(observer)
    tab(observer)
    selectBackgroundColor(Pickr)
    selectCategory()
    selectVariation()
    selectParts(observer)

    createButton(observer, html2canvas)
}
