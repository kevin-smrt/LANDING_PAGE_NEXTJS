export default {
    colors: {
        text: '#3b3b3b',
        primary: '#FF4019',
        secondary: '#FFF7E6',
        buttonHover: '#B31E00',
        footer: '#FFBF80',
    },
    buttons: {
        primary: {
            cursor: 'pointer',
            color: 'white',
            bg: 'primary',
            transition: 'background .2s',
            '&:hover': {
                bg: 'buttonHover',
            }
        },
        download: {
            cursor: 'pointer',
            color: 'white',
            bg: 'black',
            m: 2,
        }
    },
    images: {
        plateTwo: {
            width: '75px',
            height: 'auto',
        },
        plateThree: {
            width: '80px',
            height: 'auto',
        }
    }
}