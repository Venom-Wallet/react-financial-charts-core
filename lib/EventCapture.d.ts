import { ScaleContinuousNumeric, ScaleTime } from "d3-scale";
import * as React from "react";
import { ChartConfig } from "./utils/ChartDataUtil";
interface EventCaptureProps {
    readonly mouseMove: boolean;
    readonly zoom: boolean;
    readonly pan: boolean;
    readonly panSpeedMultiplier: number;
    readonly focus: boolean;
    readonly useCrossHairStyleCursor?: boolean;
    readonly width: number;
    readonly height: number;
    readonly chartConfig: ChartConfig[];
    readonly xAccessor: any;
    readonly xScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>;
    readonly disableInteraction: boolean;
    readonly getAllPanConditions: () => {
        panEnabled: boolean;
        draggable: boolean;
    }[];
    readonly onClick?: (mouseXY: number[], event: React.MouseEvent) => void;
    readonly onContextMenu?: (mouseXY: number[], event: React.MouseEvent) => void;
    readonly onDoubleClick?: (mouseXY: number[], event: React.MouseEvent) => void;
    readonly onDragStart?: (details: {
        startPos: number[];
    }, event: React.MouseEvent) => void;
    readonly onDrag?: (details: {
        startPos: [number, number];
        mouseXY: [number, number];
    }, event: React.MouseEvent) => void;
    readonly onDragComplete?: (details: {
        mouseXY: number[];
    }, event: React.MouseEvent) => void;
    readonly onMouseDown?: (mouseXY: [number, number], currentCharts: string[], event: React.MouseEvent) => void;
    readonly onMouseMove?: (touchXY: [number, number], eventType: string, event: React.MouseEvent | React.TouchEvent) => void;
    readonly onMouseEnter?: (event: React.MouseEvent) => void;
    readonly onMouseLeave?: (event: React.MouseEvent) => void;
    readonly onPinchZoom?: (initialPinch: {
        readonly xScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>;
        readonly touch1Pos: [number, number];
        readonly touch2Pos: [number, number];
        readonly range: number[];
    }, currentPinch: {
        readonly xScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>;
        readonly touch1Pos: [number, number];
        readonly touch2Pos: [number, number];
    }, e: React.TouchEvent) => void;
    readonly onPinchZoomEnd?: (initialPinch: {
        readonly xScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>;
        readonly touch1Pos: [number, number];
        readonly touch2Pos: [number, number];
        readonly range: number[];
    }, e: React.TouchEvent) => void;
    readonly onPan?: (mouseXY: [number, number], panStartXScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>, panOrigin: {
        dx: number;
        dy: number;
    }, chartsToPan: string[], e: React.MouseEvent) => void;
    readonly onPanEnd?: (mouseXY: [number, number], panStartXScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>, panOrigin: {
        dx: number;
        dy: number;
    }, chartsToPan: string[], e: React.MouseEvent | React.TouchEvent) => void;
    readonly onZoom?: (zoomDir: 1 | -1, mouseXY: number[], event: React.WheelEvent) => void;
}
interface EventCaptureState {
    cursorOverrideClass?: string;
    dragInProgress?: boolean;
    dragStartPosition?: [number, number];
    panInProgress: boolean;
    panStart?: {
        panStartXScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>;
        panOrigin: number[];
        chartsToPan: string[];
    };
    pinchZoomStart?: {
        xScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>;
        touch1Pos: [number, number];
        touch2Pos: [number, number];
        range: number[];
        chartsToPan: string[];
    };
}
export declare class EventCapture extends React.Component<EventCaptureProps, EventCaptureState> {
    static defaultProps: {
        mouseMove: boolean;
        zoom: boolean;
        pan: boolean;
        panSpeedMultiplier: number;
        focus: boolean;
        disableInteraction: boolean;
    };
    private clicked?;
    private dx?;
    private dy?;
    private dragHappened?;
    private focus?;
    private lastNewPos?;
    private mouseInside;
    private mouseInteraction;
    private panEndTimeout?;
    private panHappened?;
    private readonly ref;
    constructor(props: EventCaptureProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    readonly handleEnter: (e: any) => void;
    handleLeave: (e: React.MouseEvent) => void;
    handleWheel: (e: React.WheelEvent) => void;
    queuePanEnd(e: any): void;
    handleMouseMove: (e: any) => void;
    handleClick: (e: React.MouseEvent) => void;
    handleRightClick: (e: React.MouseEvent) => void;
    handleDrag: (e: any) => void;
    cancelDrag(): void;
    handleDragEnd: (e: any) => void;
    canPan: () => {
        panEnabled: boolean;
        somethingSelected: boolean;
    };
    handleMouseDown: (e: React.MouseEvent) => void;
    shouldPan: () => boolean | undefined;
    handlePan: (e: any) => void;
    handlePanEnd: (e: any) => void;
    handleTouchMove: (e: React.TouchEvent) => void;
    handleTouchStart: (e: React.TouchEvent) => void;
    handlePinchZoom: (e: any) => void;
    handlePinchZoomEnd: (e: any) => void;
    setCursorClass: (cursorOverrideClass: string | undefined | null) => void;
    render(): JSX.Element;
}
export {};
