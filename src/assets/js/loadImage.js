import store from '../../vuex/store'

const publicPath = process.env.BASE_URL

const imgArr = {
    //首页
    FM1: {
        url: `${publicPath}static/FM-1.jpg`,
        imgSrc: new Image()
    },
    FM2: {
        url: `${publicPath}static/FM-2.jpg`,
        imgSrc: new Image()
    },
    FM3: {
        url: '../img/FM-3.png',
        imgSrc: new Image()
    },
    FM4: {
        url: '../img/FM-4.png',
        imgSrc: new Image()
    },
    FM5: {
        url: '../img/FM-5.png',
        imgSrc: new Image()
    },
    FM6: {
        url: '../img/FM-6.png',
        imgSrc: new Image()
    },
    FM7: {
        url: '../img/FM-7.png',
        imgSrc: new Image()
    },
    FM8: {
        url: '../img/FM-8.png',
        imgSrc: new Image()
    },
    FM9: {
        url: '../img/FM-9.png',
        imgSrc: new Image()
    },
    // 第二页
    FM21: {
        url: '../img/FM2-1.jpg',
        imgSrc: new Image()
    },
    FM22: {
        url: '../img/FM2-2.png',
        imgSrc: new Image()
    },
    // 第三页
    p0011: {
        url: '../img/p001-1.jpg',
        imgSrc: new Image()
    },
    p0012: {
        url: '../img/p001-2.png',
        imgSrc: new Image()
    },
    p0013: {
        url: '../img/p001-3.png',
        imgSrc: new Image()
    },
    // 第四页
    p0021: {
        url: '../img/p002-1.jpg',
        imgSrc: new Image()
    },
    p0022: {
        url: '../img/p002-2.png',
        imgSrc: new Image()
    },
    p0023: {
        url: '../img/p002-3.png',
        imgSrc: new Image()
    },
    // 第五页
    p0031: {
        url: '../img/p003-1.jpg',
        imgSrc: new Image()
    },
    p0032: {
        url: '../img/p003-2.png',
        imgSrc: new Image()
    },
    p0033: {
        url: '../img/p003-3.png',
        imgSrc: new Image()
    },
    p0034: {
        url: '../img/p003-4.png',
        imgSrc: new Image()
    },
    // 第六页
    p0041: {
        url: '../img/p004-1.jpg',
        imgSrc: new Image()
    },
    p0042: {
        url: '../img/P004-2.png',
        imgSrc: new Image()
    },
    // 第七页
    p0051: {
        url: '../img/P005-1.jpg',
        imgSrc: new Image()
    },
    // 第八页
    p006: {
        url: '../img/P006.jpg',
        imgSrc: new Image()
    },
}
const loadImg = () => {
    let keys = Object.keys(imgArr), count = 1
    for(let key in keys) {
        let val = imgArr[keys[key]]
        val.imgSrc.onload = function() {
            console.log('11')
            store._actions.toAddCount(count++)
        }
        val.imgSrc.src = imgArr[keys[key]].url;
    }
}

export default {
    imgs: imgArr,
    loadImg: loadImg
}