import React from "react";
export { default as zipper } from "./zipper";
export { default as slidingWindow } from "./slidingWindow";
export * from "./closestItem";
export * from "./identity";
export * from "./noop";
export * from "./shallowEqual";
export { default as accumulatingWindow } from "./accumulatingWindow";
export * from "./barWidth";
export * from "./strokeDasharray";
export * from "./PureComponent";
export declare const sign: (x: any) => number;
export declare const path: (loc?: never[]) => (obj: any, defaultValue?: any) => any;
export declare const functor: (v: any) => any;
export declare function getClosestValue(inputValue: any, currentValue: any): any;
export declare function d3Window(node: any): any;
export declare const MOUSEENTER = "mouseenter.interaction";
export declare const MOUSELEAVE = "mouseleave.interaction";
export declare const MOUSEMOVE = "mousemove.pan";
export declare const MOUSEUP = "mouseup.pan";
export declare const TOUCHMOVE = "touchmove.pan";
export declare const TOUCHEND = "touchend.pan touchcancel.pan";
export declare function getTouchProps(touch: any): {
    pageX: any;
    pageY: any;
    clientX: any;
    clientY: any;
};
export declare function head(array: any[], accessor?: any): any;
export declare const first: typeof head;
export declare function last(array: any[], accessor?: any): any;
export declare const isDefined: <T>(d: T) => d is NonNullable<T>;
export declare function isNotDefined<T>(d: T): boolean;
export declare function isObject(d: any): boolean;
export declare function touchPosition(touch: {
    clientX: number;
    clientY: number;
}, e: React.TouchEvent): [number, number];
export declare function mousePosition(e: React.MouseEvent, defaultRect?: {
    height: number;
    width: number;
    left: number;
    top: number;
}): [number, number];
export declare function clearCanvas(canvasList: CanvasRenderingContext2D[], ratio: number): void;
export declare function mapObject(object?: {}, iteratee?: (x: any) => any): any[];
