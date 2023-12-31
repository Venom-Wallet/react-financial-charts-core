import * as React from "react";
import { shallowEqual } from "./shallowEqual";
export class PureComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (!shallowEqual(this.props, nextProps) ||
            !shallowEqual(this.state, nextState) ||
            !shallowEqual(this.context, nextContext));
    }
}
//# sourceMappingURL=PureComponent.js.map