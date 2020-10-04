import Colors          from './Components/Colors'
import Grid            from './Components/Grid'
import Elements        from './Components/Elements'
import Styles          from './Components/Styles'
import Width           from './Components/Styles/Width'
import Height          from './Components/Styles/Height'
import Padding         from './Components/Styles/Padding'
import Margin          from './Components/Styles/Margin'
import Border          from './Components/Styles/Border'
import Color           from './Components/Styles/Color'
import Position        from './Components/Styles/Position'
import FontSize        from './Components/Styles/FontSize'
import FontWeight      from './Components/Styles/FontWeight'
import BoxSizing       from './Components/Styles/BoxSizing'
import BackgroundColor from './Components/Styles/BackgroundColor'
import BackgroundImage from './Components/Styles/BackgroundImage'

const routes: any = {
  colors: {
    path: '/colors',
    name: 'COLORS',
    component: Colors,
    layout: '/rme'
  },
  grid: {
    path: '/grid',
    name: 'GRID',
    // icon: DWOIcons.IconDashboard(),
    component: Grid,
    layout: '/rme'
  },
  elements: {
    path: '/elements',
    name: 'ELEMENTS',
    component: Elements,
    layout: '/rme'
  },
  styles: {
    path: '/styles',
    name: 'STYLES',
    component: Styles,
    layout: '/rme',
    children: [
      { path: '/width', name: 'WIDTH', component: Width, layout: '/rme/styles' },
      { path: '/height', name: 'HEIGHT', component: Height, layout: '/rme/styles' },
      { path: '/padding', name: 'PADDING', component: Padding, layout: '/rme/styles' },
      { path: '/margin', name: 'MARGIN', component: Margin, layout: '/rme/styles' },
      { path: '/border', name: 'BORDER', component: Border, layout: '/rme/styles' },
      // {path: '/color', name: 'COLOR', component: Color, layout: '/rme/styles'},
      { path: '/position', name: 'POSITION', component: Position, layout: '/rme/styles' },
      { path: '/fontsize', name: 'FONTSIZE', component: FontSize, layout: '/rme/styles' },
      { path: '/fontweight', name: 'FONTWEIGHT', component: FontWeight, layout: '/rme/styles' },
      { path: '/boxsizing', name: 'BOXSIZING', component: BoxSizing, layout: '/rme/styles' },
      { path: '/background-color', name: 'BACKGROUNDCOLOR', component: BackgroundColor, layout: '/rme/styles' },
      { path: '/background-image', name: 'BACKGROUNDIMAGE', component: BackgroundImage, layout: '/rme/styles' }
    ]
  }
}

export default routes