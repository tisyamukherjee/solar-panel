'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { DeckGL } from '@deck.gl/react';
import Map from 'react-map-gl/mapbox';
import { ColumnLayer } from '@deck.gl/layers';
import { scaleLinear } from 'd3-scale';
import 'mapbox-gl/dist/mapbox-gl.css';

interface BuildingData {
    Address: string;
    Cost_Electric: number;
    GSF: number;
    Reading_Total_Electric: number;
    building_id: string;
    latitude: number;
    longitude: number;
}

interface ProcessedBuilding extends BuildingData {
    position: [number, number];
    normalizedEnergy: number;
}

interface ViewState {
    longitude: number;
    latitude: number;
    zoom: number;
    pitch: number;
    bearing: number;
    minZoom?: number;
    maxZoom?: number;
    transitionDuration?: number;
}

interface EnergyMap3DProps {
    buildingsData: BuildingData[];
    className?: string;
}

const EnergyMap3D: React.FC<EnergyMap3DProps> = ({
                                                     buildingsData,
                                                     className = ''
                                                 }) => {
    const [mounted, setMounted] = useState(false);
    const [viewState, setViewState] = useState<ViewState>({
        longitude: -83.7382,
        latitude: 42.2808,
        zoom: 12,
        pitch: 45,
        bearing: 0,
        minZoom: 10,
        maxZoom: 18,
    });

    // Ensure component is mounted on client
    useEffect(() => {
        setMounted(true);
    }, []);

    // Process and normalize the data
    const processedData = useMemo<ProcessedBuilding[]>(() => {
        if (!buildingsData || buildingsData.length === 0) return [];

        const validData = buildingsData.filter(
            (building): building is BuildingData =>
                Boolean(building.latitude) &&
                Boolean(building.longitude) &&
                building.Reading_Total_Electric > 0
        );

        if (validData.length === 0) return [];

        // Linear normalization for COLOR
        const maxEnergy = Math.max(
            ...validData.map((d) => d.Reading_Total_Electric)
        );

        // Log normalization for ELEVATION
        const logValues = validData.map(d => Math.log(d.Reading_Total_Electric + 1));
        const minLog = Math.min(...logValues);
        const maxLog = Math.max(...logValues);

        return validData.map((building, idx) => ({
            ...building,
            position: [building.longitude, building.latitude] as [number, number],
            normalizedEnergy: building.Reading_Total_Electric / maxEnergy, // for color
        }));
    }, [buildingsData]);

    // Color scale - stable reference
    const colorScale = useMemo(() =>
            scaleLinear()
                .domain([0, 0.25, 0.5, 0.75, 1])
                .range([
                    [46, 213, 115],
                    [241, 242, 72],
                    [255, 165, 0],
                    [255, 87, 51],
                    [192, 57, 43],
                ]),
        []
    );

    // Memoize layers
    const layers = useMemo(() => {
        if (!processedData.length) return [];

        return [
            new ColumnLayer<ProcessedBuilding>({
                id: 'energy-consumption-columns',
                data: processedData,
                diskResolution: 12,
                radius: 20,
                extruded: true,
                pickable: true,
                elevationScale: 20,
                getPosition: (d: ProcessedBuilding) => d.position,
                getFillColor: (d: ProcessedBuilding) => {
                    const color = colorScale(d.normalizedEnergy);
                    return [...color, 200] as [number, number, number, number];
                },
                getLineColor: [255, 255, 255, 100] as [number, number, number, number],
                getElevation: (d: ProcessedBuilding) => Math.min(d.normalizedEnergy * 300, 100),
            }),
        ];
    }, [processedData, colorScale]);

    const formatNumber = useCallback((num: number): string => {
        return new Intl.NumberFormat('en-US').format(Math.round(num));
    }, []);

    const getTooltip = useCallback(({ object }: { object?: ProcessedBuilding }) => {
        if (!object) return null;

        return {
            html: `
        <div class="p-4 min-w-[280px]">
          <div class="text-sm font-semibold text-slate-50 mb-3 pb-3 border-b border-slate-700">
            ${object.Address}
          </div>
          <div class="space-y-2">
            <div class="flex justify-between items-center gap-4">
              <span class="text-xs text-slate-400">Energy Usage:</span>
              <span class="text-sm font-medium text-slate-50 font-mono">${formatNumber(object.Reading_Total_Electric)} kWh</span>
            </div>
            <div class="flex justify-between items-center gap-4">
              <span class="text-xs text-slate-400">Cost:</span>
              <span class="text-sm font-medium text-slate-50 font-mono">$${formatNumber(object.Cost_Electric)}</span>
            </div>
            <div class="flex justify-between items-center gap-4">
              <span class="text-xs text-slate-400">Building Size:</span>
              <span class="text-sm font-medium text-slate-50 font-mono">${formatNumber(object.GSF)} sq ft</span>
            </div>
            <div class="flex justify-between items-center gap-4">
              <span class="text-xs text-slate-400">Energy/sq ft:</span>
              <span class="text-sm font-medium text-slate-50 font-mono">${(object.Reading_Total_Electric / object.GSF).toFixed(2)} kWh/sq ft</span>
            </div>
          </div>
        </div>
      `,
            style: {
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                fontSize: '0.875rem',
                borderRadius: '0.5rem',
                padding: '0',
                border: '1px solid rgba(71, 85, 105, 0.3)',
                backdropFilter: 'blur(12px)',
            },
        };
    }, [formatNumber]);

    // Debounce view state changes to prevent stack overflow
    const handleViewStateChange = useCallback((evt: any) => {
        const newViewState = evt.viewState;
        setViewState(newViewState);
    }, []);

    const togglePitch = useCallback(() => {
        setViewState((prev) => ({
            ...prev,
            pitch: prev.pitch === 0 ? 45 : 0,
            transitionDuration: 300
        }));
    }, []);

    const resetView = useCallback(() => {
        setViewState({
            longitude: -83.7382,
            latitude: 42.2808,
            zoom: 12,
            pitch: 45,
            bearing: 0,
            transitionDuration: 500
        });
    }, []);

    // Don't render until mounted
    if (!mounted) {
        return (
            <div className={`relative w-full h-full min-h-[600px] rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center ${className}`}>
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-slate-700 border-t-emerald-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-400">Initializing map...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative w-full h-full min-h-[600px] rounded-xl overflow-hidden bg-slate-900 ${className}`}>
            <DeckGL
                viewState={viewState}
                onViewStateChange={({ viewState }) => setViewState(viewState)}
                controller={true}
                layers={layers}
                getTooltip={getTooltip}
            >
                <Map
                    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/mapbox/standard"
                />
            </DeckGL>

            {/* Legend */}
            <div className="absolute bottom-8 left-8 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl p-5 min-w-[220px] shadow-2xl z-10">
                <div className="text-xs font-semibold text-slate-100 mb-3 uppercase tracking-wider">
                    Energy Consumption
                </div>
                <div className="mb-2">
                    <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 via-yellow-400 via-orange-500 to-red-600 mb-1.5"></div>
                    <div className="flex justify-between text-[10px] text-slate-400">
                        <span>Low</span>
                        <span>High</span>
                    </div>
                </div>
                <div className="text-[11px] text-slate-500 mt-3 pt-3 border-t border-slate-800">
                    Height represents total electricity usage
                </div>
            </div>

            {/* Controls */}
            <div className="absolute top-8 right-8 flex flex-col gap-2 z-10">
                <button
                    onClick={togglePitch}
                    className="w-11 h-11 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-lg text-slate-100 hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    title="Toggle 3D View"
                    aria-label="Toggle 3D View"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    </svg>
                </button>
                <button
                    onClick={resetView}
                    className="w-11 h-11 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-lg text-slate-100 hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    title="Reset View"
                    aria-label="Reset View"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                        <path d="M21 3v5h-5"></path>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                        <path d="M3 21v-5h5"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default EnergyMap3D;