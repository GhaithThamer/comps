import PropTypes from 'prop-types'
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({blue,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...pr}) {
    // console.log(pr)
    const classes = twMerge(classNames('flex items-center border-solid border-2 m-1 px-2 py-1', {
        'border-blue-500 bg-blue-400 text-yellow-100': primary,
        'border-gray-500 bg-gray-400 text-yellow-100': secondary,
        'border-green-500 bg-green-400 text-yellow-100': success,
        'border-yellow-500 bg-yellow-400 text-yellow-100': warning,
        'border-red-500 bg-red-400 text-yellow-100': danger,
        'bg-white text-blue-500': outline && primary,
        'bg-white text-black-500': outline && secondary,
        'bg-white text-green-500': outline && success,
        'bg-white text-yellow-500': outline && warning,
        'bg-white text-red-500': outline && danger,
        'rounded-xl': rounded,
    },pr.className,))
    return (<button {...pr} className={classes}>{pr.children}</button>)
}

// Button.propTypes = {
//     namelength: PropTypes.string
// }

export default Button;