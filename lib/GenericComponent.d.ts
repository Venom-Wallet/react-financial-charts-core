import * as React from "react";
import { ICanvasContexts } from "./CanvasContainer";
import { ChartCanvasContext } from "./ChartCanvas";
interface GenericComponentProps {
    readonly svgDraw?: (moreProps: any) => React.ReactNode;
    readonly canvasDraw?: (ctx: CanvasRenderingContext2D, moreProps: any) => void;
    readonly canvasToDraw?: (contexts: ICanvasContexts) => CanvasRenderingContext2D | undefined;
    readonly clip?: boolean;
    readonly disablePan?: boolean;
    readonly drawOn: string[];
    readonly edgeClip?: boolean;
    readonly enableDragOnHover?: boolean;
    readonly interactiveCursorClass?: string;
    readonly isHover?: (moreProps: any, e: React.MouseEvent) => boolean;
    readonly onClick?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onClickWhenHover?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onClickOutside?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onPan?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onPanEnd?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onDragStart?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onDrag?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onDragComplete?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onDoubleClick?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onDoubleClickWhenHover?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onContextMenu?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onContextMenuWhenHover?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onMouseMove?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onMouseDown?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onHover?: (e: React.MouseEvent, moreProps: any) => void;
    readonly onUnHover?: (e: React.MouseEvent, moreProps: any) => void;
    readonly selected?: boolean;
}
interface GenericComponentState {
    updateCount: number;
}
export declare class GenericComponent extends React.Component<GenericComponentProps, GenericComponentState> {
    static defaultProps: {
        svgDraw: any;
        draw: never[];
        canvasToDraw: (contexts: ICanvasContexts) => CanvasRenderingContext2D | undefined;
        clip: boolean;
        edgeClip: boolean;
        selected: boolean;
        disablePan: boolean;
        enableDragOnHover: boolean;
    };
    context: React.ContextType<typeof ChartCanvasContext>;
    moreProps: any;
    private dragInProgress;
    private evaluationInProgress;
    private iSetTheCursorClass;
    private readonly subscriberId;
    constructor(props: GenericComponentProps, context: any);
    updateMoreProps(moreProps: any): void;
    shouldTypeProceed(type: string, moreProps: any): boolean;
    preEvaluate(type: string, moreProps: any, e: any): void;
    listener: (type: string, moreProps: any, state: any, e: any) => void;
    evaluateType(type: string, e: any): void;
    isHover(e: React.MouseEvent): boolean;
    getPanConditions(): {
        draggable: any;
        panEnabled: boolean;
    };
    draw({ trigger, force }: {
        force: boolean;
        trigger: string;
    }): void;
    UNSAFE_componentWillMount(): void;
    componentWillUnmount(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: GenericComponentProps): void;
    UNSAFE_componentWillReceiveProps(nextProps: GenericComponentProps, nextContext: any): void;
    getMoreProps(): any;
    preCanvasDraw(ctx: CanvasRenderingContext2D, moreProps: any): void;
    postCanvasDraw(ctx: CanvasRenderingContext2D, moreProps: any): void;
    drawOnCanvas(): void;
    render(): JSX.Element | null;
}
export declare const getAxisCanvas: (contexts: ICanvasContexts) => CanvasRenderingContext2D | undefined;
export declare const getMouseCanvas: (contexts: ICanvasContexts) => CanvasRenderingContext2D | undefined;
export {};
