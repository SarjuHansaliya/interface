import React, { useState, useEffect } from 'react'
import { Pair, Token } from '@pangolindex/sdk'
import { createChart, CrosshairMode, IChartApi, ISeriesApi } from 'lightweight-charts'
import { useMeasure } from 'react-use'
import { useDarkModeManager } from 'src/state/user/hooks'
import { TIMEFRAME, TimeFrameType } from 'src/constants'
import { usePairHourlyRateData, useHourlyPairTokensChartData } from 'src/state/pair/hooks'
import { CustomLightSpinner } from 'src/theme'
import Circle from 'src/assets/images/blue-loader.svg'
import { Box, ToggleButtons } from '@pangolindex/components'
import { ChartWrapper, ChartContainer, OptionsWrapper } from './styleds'
import dayjs from 'dayjs'

type Props = { pair?: Pair | null; tokenB?: Token; tokenA?: Token }

const PairChart: React.FC<Props> = ({ pair, tokenA, tokenB }) => {
  const [ref, { width, height }] = useMeasure()

  const [chartCreated, setChartCreated] = useState<IChartApi>()
  const [chartLoading, setChartLoading] = useState(false)
  const [chartSeries, setChartSeries] = useState<ISeriesApi<'Candlestick'>>()
  const [isDark] = useDarkModeManager()

  let defaultTimeFrame = TIMEFRAME.find(t => t.label === '1D') || ({} as TimeFrameType)
  const [timeWindow, setTimeWindow] = useState(defaultTimeFrame || ({} as TimeFrameType))

  const { loading, chartData: pairChartData } = usePairHourlyRateData(
    (pair?.liquidityToken?.address || '').toLowerCase(),
    timeWindow?.momentIdentifier,
    timeWindow.interval,
    timeWindow.momentIdentifier
  )

  const chartData =
    pairChartData && pair?.token0 === tokenB ? pairChartData[0] : pairChartData ? pairChartData[1] : undefined

  const pairTokensChartData = useHourlyPairTokensChartData(
    tokenA?.address || '',
    tokenB?.address || '',
    timeWindow?.momentIdentifier,
    timeWindow.interval,
    timeWindow.momentIdentifier
  )

  const chartData1 =
    pairTokensChartData && pair?.token0 === tokenB
      ? pairTokensChartData[0]
      : pairTokensChartData
      ? pairTokensChartData[1]
      : undefined

  const formattedData = !chartData || (chartData || []).length > 0 ? chartData : chartData1

  // if no chart created yet, create one with options and add to DOM manually
  useEffect(() => {
    let chart
    if (!chartCreated) {
      const htmlElement = document.getElementById('chart-container-id')!
      chart = createChart(htmlElement, {
        layout: {
          backgroundColor: 'transparent',
          textColor: '#fff',
          fontSize: 12,
          fontFamily: "'Poppins',sans-serif"
        },
        leftPriceScale: {
          visible: true
        },
        rightPriceScale: {
          visible: false,
          borderVisible: false
        },
        timeScale: {
          borderVisible: true
          // timeVisible: true,
          // secondsVisible: false
        },
        grid: {
          horzLines: {
            color: '#707070',
            visible: true,
            style: 2
          },
          vertLines: {
            color: '#707070',
            visible: true,
            style: 2
          }
        },
        crosshair: {
          mode: CrosshairMode.Normal,
          horzLine: {
            visible: true,
            labelVisible: true
          },
          vertLine: {
            visible: true,
            style: 1,
            width: 2,
            color: 'rgba(32, 38, 46, 0.5)',
            labelVisible: true
          }
        },
        localization: {
          // dateFormat: 'yyyy-MM-dd hh:mm:ss',
          timeFormatter: (time: any) => dayjs.utc(dayjs.unix(Number(time))).format('YYYY-MM-DD hh:mm:ss')
        }
      })

      const series = chart.addCandlestickSeries({
        upColor: '#4bffb5',
        downColor: '#ff4976',
        borderDownColor: '#ff4976',
        borderUpColor: '#4bffb5',
        wickDownColor: '#838ca1',
        wickUpColor: '#838ca1'
      })

      if (formattedData) {
        series.setData([...formattedData])
      }
      setChartSeries(series)

      let toolTip = document.createElement('div')
      toolTip.setAttribute('id', 'tooltip-id')
      if (htmlElement) htmlElement.appendChild(toolTip)
      toolTip.style.display = 'block'
      toolTip.style.fontWeight = '400'
      toolTip.style.left = -4 + 'px'
      toolTip.style.top = '-' + 8 + 'px'
      toolTip.style.backgroundColor = 'transparent'

      chart.timeScale().fitContent()

      setChartCreated(chart)
    }
  }, [chartCreated, formattedData])

  useEffect(() => {
    if (chartCreated && formattedData) {
      chartSeries?.setData([...formattedData])
      chartCreated.timeScale().fitContent()
    }
  }, [formattedData, chartCreated, chartSeries])

  useEffect(() => {
    if (chartCreated) {
      chartCreated.applyOptions({
        layout: {
          textColor: isDark ? '#707070' : 'black'
        }
      })
    }
  }, [isDark, chartCreated])

  useEffect(() => {
    if (loading || !chartData) {
      setChartLoading(true)
    } else {
      setChartLoading(false)
    }
  }, [formattedData, loading, chartData])

  useEffect(() => {
    chartCreated?.applyOptions({
      width,
      height
    })
  }, [width, height, chartCreated])

  return (
    <ChartWrapper>
      <OptionsWrapper>
        <ToggleButtons
          options={TIMEFRAME.map(item => item.label)}
          value={timeWindow.label}
          onChange={val => {
            const nextTimeFrame = TIMEFRAME.find(t => t.label === val) as TimeFrameType
            setTimeWindow(nextTimeFrame)
          }}
        />
      </OptionsWrapper>

      <ChartContainer id="chart-container-id" ref={ref as any}>
        {chartLoading && (
          <Box
            position={'absolute'}
            top={0}
            left={0}
            bottom={0}
            right={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CustomLightSpinner src={Circle} alt="loader" size={'50px'} />
          </Box>
        )}
      </ChartContainer>
    </ChartWrapper>
  )
}

export default PairChart
