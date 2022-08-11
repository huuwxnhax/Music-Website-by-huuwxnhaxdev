var listAlbum = [
    {
        background: "./assets/img/album/album_1.png",
        title: "Golden Hour",
    },

    {
        background: "./assets/img/album/album_2.png",
        title: "Boycold (Mini Album)",
    },

    {
        background: "./assets/img/album/album_3.png",
        title: "Red",
    },

    {
        background: "./assets/img/album/album_4.png",
        title: "Katty Perry",
    },

    {
        background: "./assets/img/album/album_5.png",
        title: "The Album",
    },

    {
        background: "./assets/img/album/album_6.png",
        title: "Justin Bieber",
    },
]

const ALBUM_STORAGE_KEY = 'VIK_ALBUM';
localStorage.setItem(ALBUM_STORAGE_KEY, JSON.stringify(listAlbum));