export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DIRECT_SET = 'DIRECT_SET';
export const RED = 0;
export const GREEN = 1;
export const BLUE = 2;
export const ControlDirection = Object.freeze({"INCREMENT":1, "DECREMENT":2});
export function handleIncrement(channel) {
    return {type: INCREMENT, channel: channel};
}
export function handleDecrement(channel) {
    return {type: DECREMENT, channel: channel};
}

export function handleType(value) {
    return {
        type: DIRECT_SET,
        count: value,
    };
}
