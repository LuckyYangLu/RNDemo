import * as type from './MathType'
export function increase() {
    return {
        type: type.INCREASE
    }
};

export function decrease() {
    return {
        type: type.DECREASE
    }
};

export function reset() {
    return {
        type: type.RESET
    }
};