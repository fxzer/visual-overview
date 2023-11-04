import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  EffectScatterChart,
  LinesChart,
  MapChart,
  PieChart,
} from 'echarts/charts'
import {
  GeoComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  MapChart,
  EffectScatterChart,
  LinesChart,
  GeoComponent,
])
