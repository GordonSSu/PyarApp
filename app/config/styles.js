import { Dimensions } from 'react-native';

import colors from '../config/colors';

const { width } = Dimensions.get('window')

function fontSizer1() {
    if (width >= 700) {
        return 22;
    } else if (width >= 400) {
        return 22;
    } else if (width >= 350) {
        return 22;
    } else {
        return 22;
    }
}

function fontSizer2() {
    if (width >= 700) {
        return 20;
    } else if (width >= 400) {
        return 20;
    } else if (width >= 350) {
        return 20;
    } else {
        return 20;
    }
}

function fontSizer3() {
    if (width >= 700) {
        return 18;
    } else if (width >= 400) {
        return 18;
    } else if (width >= 350) {
        return 18;
    } else {
        return 18;
    }
}

function fontSizer4() {
    if (width >= 700) {
        return 16;
    } else if (width >= 400) {
        return 16;
    } else if (width >= 350) {
        return 16;
    } else {
        return 16;
    }
}

function fontSizer5() {
    if (width >= 700) {
        return 14;
    } else if (width >= 400) {
        return 14;
    } else if (width >= 350) {
        return 14;
    } else {
        return 14;
    }
}

function fontSizer6() {
    if (width >= 700) {
        return 12;
    } else if (width >= 400) {
        return 12;
    } else if (width >= 350) {
        return 12;
    } else {
        return 12;
    }
}

function fontSizer7() {
    if (width >= 700) {
        return 11;
    } else if (width >= 400) {
        return 11;
    } else if (width >= 350) {
        return 11;
    } else {
        return 11;
    }
}

function fontSizer8() {
    if (width >= 700) {
        return 10;
    } else if (width >= 400) {
        return 10;
    } else if (width >= 350) {
        return 10;
    } else {
        return 10;
    }
}

export default {
    colors,
    text1: {
        color: colors.black,
        fontSize: fontSizer1()
    }, 
    text2: {
        color: colors.darkGray,
        fontSize: fontSizer2()
    },
    text3: {
        color: colors.darkGray,
        fontSize: fontSizer3()
    },
    text4: {
        color: colors.darkGray,
        fontSize: fontSizer4()
    },
    text5: {
        color: colors.darkGray,
        fontSize: fontSizer5()
    },
    text6: {
        color: colors.mediumGray,
        fontSize: fontSizer6()
    },
    text7: {
        color: colors.mediumGray,
        fontSize: fontSizer7()
    },
    text8: {
        color: colors.mediumGray,
        fontSize: fontSizer8()
    },
    menuCardName: {
        color: 'white',
        fontWeight: '400',
        lineHeight: 16,
        textAlign: 'center',
        width: '86%'
    },
    menuCardPrice: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 6,
        width: '86%'
    },
    text9: {
        fontWeight: 'bold',
        color: 'black',
        fontSize:20,
        textAlign: 'left',
        marginTop: 10,
        padding: 5
    },
    text10: {
        color: 'black',
        fontSize:18,
        textAlign: 'left',
        marginTop: 10,
        padding: 5  
    },
    managerScreenButton: {
        color: 'white',
        fontSize: 18
    }
}