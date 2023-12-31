export type strokeDashTypes = "Solid" | "ShortDash" | "ShortDash2" | "ShortDot" | "ShortDashDot" | "ShortDashDotDot" | "Dot" | "Dash" | "LongDash" | "DashDot" | "LongDashDot" | "LongDashDotDot";
export declare const getStrokeDasharrayCanvas: (type?: strokeDashTypes) => number[];
export declare const getStrokeDasharray: (type?: strokeDashTypes) => "none" | "6, 2" | "6, 3" | "2, 2" | "6, 2, 2, 2" | "6, 2, 2, 2, 2, 2" | "2, 6" | "4, 6" | "16, 6" | "8, 6, 2, 6" | "16, 6, 2, 6" | "16, 6, 2, 6, 2, 6";
