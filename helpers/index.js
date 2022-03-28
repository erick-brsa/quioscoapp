export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });
}