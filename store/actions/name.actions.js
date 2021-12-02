export const SUMA = 'SUMA';
export const RESTA = 'RESTA'
export const AUMENTAR_EN = 'AUMENTAR_EN'

export const suma = () => ({
    type: SUMA,
    payload: 1
})
export const resta = () => ({
    type: RESTA,
    payload: 1
})

export const aumentaUsuario = (x) => ({
    type:AUMENTAR_EN,
    payload: x
})

