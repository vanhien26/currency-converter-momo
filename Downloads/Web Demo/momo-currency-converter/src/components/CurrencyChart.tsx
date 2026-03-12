'use client';

import { useState, useMemo, useEffect } from 'react';

interface Props {
    fromCode: string;
    toCode: string;
    baseRate: number;
}

type Timeframe = '1d' | '1w' | '1m' | '3m' | '6m' | '1y' | '6y' | 'All';

interface DataPoint {
    label: string;
    value: number;
    timestamp: number;
}

export default function CurrencyChart({ fromCode, toCode, baseRate }: Props) {
    const [timeframe, setTimeframe] = useState<Timeframe>('1m');
    const [hoveredPoint, setHoveredPoint] = useState<DataPoint | null>(null);
    const [chartWidth, setChartWidth] = useState(0);

    // Generate mock historical data
    const data = useMemo(() => {
        const points: DataPoint[] = [];
        let count = 30;
        let step = 86400000; // 1 day

        switch (timeframe) {
            case '1d': count = 24; step = 3600000; break;
            case '1w': count = 7; step = 86400000; break;
            case '1m': count = 30; step = 86400000; break;
            case '3m': count = 90; step = 86400000; break;
            case '6m': count = 180; step = 86400000; break;
            case '1y': count = 365; step = 86400000; break;
            case '6y': count = 365 * 6; step = 86400000 * 30; break;
            case 'All': count = 365 * 10; step = 86400000 * 30; break;
        }

        const now = Date.now();
        let currentVal = baseRate;

        // Generate backwards
        for (let i = 0; i < count; i++) {
            const timestamp = now - (count - 1 - i) * step;
            const date = new Date(timestamp);
            let label = '';

            if (timeframe === '1d') label = `${date.getHours()}:00`;
            else if (timeframe === '1w' || timeframe === '1m') label = `${date.getDate()}/${date.getMonth() + 1}`;
            else label = `${date.getMonth() + 1}/${date.getFullYear()}`;

            // Random walk simulation
            const volatility = 0.002; // 0.2%
            const change = 1 + (Math.random() - 0.5) * volatility;
            currentVal = currentVal * change;

            points.push({
                label,
                value: currentVal,
                timestamp
            });
        }

        return points;
    }, [timeframe, baseRate]);

    const minVal = Math.min(...data.map(d => d.value));
    const maxVal = Math.max(...data.map(d => d.value));
    const padding = (maxVal - minVal) * 0.1 || baseRate * 0.01;
    const rangeMin = minVal - padding;
    const rangeMax = maxVal + padding;

    const chartHeight = 300;
    const svgPadding = { top: 20, right: 20, bottom: 40, left: 60 };

    const getX = (index: number) => (index / (data.length - 1)) * (chartWidth - svgPadding.left - svgPadding.right) + svgPadding.left;
    const getY = (value: number) => chartHeight - svgPadding.bottom - ((value - rangeMin) / (rangeMax - rangeMin)) * (chartHeight - svgPadding.top - svgPadding.bottom);

    // Cubic Bezier Path
    const pathData = useMemo(() => {
        if (data.length < 2) return '';
        let d = `M ${getX(0)} ${getY(data[0].value)}`;

        for (let i = 0; i < data.length - 1; i++) {
            const x1 = getX(i);
            const y1 = getY(data[i].value);
            const x2 = getX(i + 1);
            const y2 = getY(data[i + 1].value);
            const cx1 = x1 + (x2 - x1) / 2;
            const cx2 = x1 + (x2 - x1) / 2;
            d += ` C ${cx1} ${y1}, ${cx2} ${y2}, ${x2} ${y2}`;
        }
        return d;
    }, [data, chartWidth, rangeMin, rangeMax]);

    const areaData = useMemo(() => {
        if (!pathData) return '';
        return `${pathData} L ${getX(data.length - 1)} ${chartHeight - svgPadding.bottom} L ${getX(0)} ${chartHeight - svgPadding.bottom} Z`;
    }, [pathData, data.length, chartWidth]);

    useEffect(() => {
        const updateWidth = () => {
            const el = document.getElementById('currency-chart-container');
            if (el) setChartWidth(el.clientWidth);
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
        if (!chartWidth) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const chartX = x - svgPadding.left;
        const width = chartWidth - svgPadding.left - svgPadding.right;

        const index = Math.round((chartX / width) * (data.length - 1));
        if (index >= 0 && index < data.length) {
            setHoveredPoint(data[index]);
        }
    };

    const timeframes: Timeframe[] = ['1d', '1w', '1m', '3m', '6m', '1y', '6y', 'All'];

    return (
        <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6" id="currency-chart-container">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Biến động tỷ giá {fromCode}/{toCode}</h3>
                    <p className="text-sm text-gray-500">Dữ liệu mô phỏng dựa trên tỷ giá MoMo</p>
                </div>
                <div className="flex flex-wrap gap-1 bg-gray-50 p-1 rounded-xl">
                    {timeframes.map((tf) => (
                        <button
                            key={tf}
                            onClick={() => setTimeframe(tf)}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${timeframe === tf
                                    ? 'bg-white text-[#A50064] shadow-sm ring-1 ring-black/5'
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
                                }`}
                        >
                            {tf.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative h-[300px] w-full select-none">
                {chartWidth > 0 && (
                    <svg
                        width={chartWidth}
                        height={chartHeight}
                        className="overflow-visible"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setHoveredPoint(null)}
                    >
                        <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#A50064" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#A50064" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Grid lines */}
                        <line x1={svgPadding.left} y1={getY(rangeMin)} x2={chartWidth - svgPadding.right} y2={getY(rangeMin)} stroke="#F3F4F6" strokeWidth="1" />
                        <line x1={svgPadding.left} y1={getY(rangeMax)} x2={chartWidth - svgPadding.right} y2={getY(rangeMax)} stroke="#F3F4F6" strokeWidth="1" />
                        <line x1={svgPadding.left} y1={getY((rangeMax + rangeMin) / 2)} x2={chartWidth - svgPadding.right} y2={getY((rangeMax + rangeMin) / 2)} stroke="#F3F4F6" strokeWidth="1" strokeDasharray="4 4" />

                        {/* Y axis labels */}
                        <text x={svgPadding.left - 10} y={getY(rangeMax)} textAnchor="end" alignmentBaseline="middle" className="text-[10px] fill-gray-400 font-medium">
                            {rangeMax.toLocaleString('vi-VN', { maximumFractionDigits: (rangeMax < 1 ? 4 : 2) })}
                        </text>
                        <text x={svgPadding.left - 10} y={getY(rangeMin)} textAnchor="end" alignmentBaseline="middle" className="text-[10px] fill-gray-400 font-medium">
                            {rangeMin.toLocaleString('vi-VN', { maximumFractionDigits: (rangeMax < 1 ? 4 : 2) })}
                        </text>

                        {/* Area & Path */}
                        <path d={areaData} fill="url(#chartGradient)" />
                        <path d={pathData} fill="none" stroke="#A50064" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                        {/* Hover point */}
                        {hoveredPoint && (
                            <>
                                <line
                                    x1={getX(data.indexOf(hoveredPoint))}
                                    y1={svgPadding.top}
                                    x2={getX(data.indexOf(hoveredPoint))}
                                    y2={chartHeight - svgPadding.bottom}
                                    stroke="#A50064"
                                    strokeWidth="1"
                                    strokeDasharray="4 4"
                                />
                                <circle
                                    cx={getX(data.indexOf(hoveredPoint))}
                                    cy={getY(hoveredPoint.value)}
                                    r="5"
                                    fill="white"
                                    stroke="#A50064"
                                    strokeWidth="2.5"
                                />
                            </>
                        )}

                        {/* Timeline labels (selected) */}
                        <text x={svgPadding.left} y={chartHeight - 10} textAnchor="start" className="text-[10px] fill-gray-400 font-medium">
                            {data[0].label}
                        </text>
                        <text x={chartWidth - svgPadding.right} y={chartHeight - 10} textAnchor="end" className="text-[10px] fill-gray-400 font-medium">
                            {data[data.length - 1].label}
                        </text>
                    </svg>
                )}

                {/* Tooltip */}
                {hoveredPoint && (
                    <div
                        className="absolute pointer-events-none z-10 bg-gray-900 text-white rounded-lg px-3 py-2 text-xs shadow-xl transform -translate-x-1/2 -translate-y-[120%]"
                        style={{
                            left: getX(data.indexOf(hoveredPoint)),
                            top: getY(hoveredPoint.value)
                        }}
                    >
                        <div className="font-bold mb-0.5">{hoveredPoint.value.toLocaleString('vi-VN', { maximumFractionDigits: (hoveredPoint.value < 1 ? 6 : 2) })}</div>
                        <div className="opacity-70">{new Date(hoveredPoint.timestamp).toLocaleString('vi-VN', {
                            day: '2-digit', month: '2-digit', year: timeframe.includes('y') || timeframe === 'All' ? 'numeric' : undefined,
                            hour: timeframe === '1d' ? '2-digit' : undefined,
                            minute: timeframe === '1d' ? '2-digit' : undefined
                        })}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
