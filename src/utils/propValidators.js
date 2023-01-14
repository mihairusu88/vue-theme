export function colorValidator( value = null ) {
    const items = [ 'default', 'primary', 'secondary', 'tertiary', 'link', 'info', 'success', 'warning', 'danger' ];

    if ( value ) {
        return items.includes( value );
    }

    return items;
}

export function buttonColorValidator( value = null ) {
    const items = [
        'primary',
        'secondary',
        'tertiary',
        'link',
        'info',
        'success',
        'warning',
        'danger',
        'white',
        'light',
        'dark',
        'black',
        'text',
        'ghost',
    ];

    if ( value ) {
        return items.includes( value );
    }

    return items;
}

export function sizeValidator( value = null ) {
    const items = [ 'small', 'normal', 'medium', 'large' ];

    if ( value ) {
        return items.includes( value );
    }

    return items;
}

export function fontWeightValidator( value = null ) {
    const items = [ 'light', 'normal', 'medium', 'semibold', 'bold', 'black' ];

    if ( value ) {
        return items.includes( value );
    }

    return items;
}