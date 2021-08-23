export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const userLogin = () => {
    return {
        type: LOG_IN
    }
}

export const userLogout = () => {
    return {
        type: LOG_OUT
    }
}
