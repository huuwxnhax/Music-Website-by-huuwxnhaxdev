var mvLists = [
    {
        background: "./assets/img/mv/mv_24gio.png",
        title: "24H",
        subtitle: "LyLy, Magazine",
        thumb: "./assets/img/thumbs/lyly.jpg"
    },

    {
        background: "./assets/img/mv/mv_dalab.png",
        title: "Nước Mắt Em Lau Bằng Tình Yêu Mới",
        subtitle: "Da LAB, Tốc Tiên",
        thumb: "./assets/img/thumbs/toctien.webp"
    },

    {
        background: "./assets/img/mv/mv_amee.png",
        title: "Sao anh chưa về",
        subtitle: "AMEE, Ricky Star",
        thumb: "./assets/img/thumbs/amee.webp"
    }
]

const MV_STORAGE_KEY = 'VIK_MV';
localStorage.setItem(MV_STORAGE_KEY, JSON.stringify(mvLists));