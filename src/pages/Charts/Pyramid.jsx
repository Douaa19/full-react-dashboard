import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  Inject,
  PyramidSeries,
  AccumulationSelection
} from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../context/ContextProvider';

const Pyramid = () => {
const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pyramid" title="Food Comparison Chart" />
      <div className='w-full'>
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{ background: 'white' }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          tooltipe={{ enable: true }}
        >
          <Inject services={[AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Food'
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width='45%'
              height='80%'
              neckWidth='15%'
              gapRatio={0.03}
              explode
              amptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visibie: true,
                name: 'text',
                position: 'Inside',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid