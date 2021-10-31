export default {
    colors: {
        text: '#3b3b3b',
        primary: '#FF4019',
        buttonHover: '#B31E00',
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