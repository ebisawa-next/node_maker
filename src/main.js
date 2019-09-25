import './scss/style.scss'
import html2canvas from './js/lib/html2canvas'
import createButton from './js/pages/maker/createButton'
import frame from './js/pages/maker/frame'
import result from './js/pages/maker/result'
import tab from './js/pages/maker/tab'

createButton(html2canvas);
frame();
result();
tab();