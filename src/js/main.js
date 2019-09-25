import html2canvas from './lib/html2canvas'
import createButton from './pages/maker/createButton'
import frame from './pages/maker/frame'
import result from './pages/maker/result'
import tab from './pages/maker/tab'

createButton(html2canvas);
frame();
result();
tab();