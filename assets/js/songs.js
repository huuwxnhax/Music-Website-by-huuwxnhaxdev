var songs = [
    {
        name: 'Sugar',
        singer: 'Maroon 5',
        path: './assets/music/song_sugar.mp3',
        image: './assets/img/thumbs/sugar.png'
    },
    {
        name: 'Memories',
        singer: 'Maroon 5',
        path: './assets/music/song_memories.mp3',
        image: './assets/img/thumbs/memories.png'
    },
    {
        name: 'What Lover Do',
        singer: 'Maroon 5',
        path: './assets/music/song_whatloverdo.mp3',
        image: './assets/img/thumbs/whatloverdo.png'
    },
    {
        name: 'Girls Like You',
        singer: 'Maroon 5',
        path: './assets/music/song_girllikeyou.mp3',
        image: './assets/img/thumbs/girllikeyou.jpg'
    },
    {
        name: 'Reality',
        singer: 'Lost Frequencies',
        path: './assets/music/song_reality.mp3',
        image: './assets/img/thumbs/reality.jpg'
    },
    {
        name: 'Way Back Home',
        singer: 'SHAUN',
        path: './assets/music/song_waybackhome.mp3',
        image: './assets/img/thumbs/waybackhome.jpg'
    },
    {
        name: 'At My Worst',
        singer: 'Pink Sweat$',
        path: './assets/music/song_atmyworst.mp3',
        image: './assets/img/thumbs/atmyworst.jpg'
    },
    {
        name: 'Chơi',
        singer: 'HieuThuHai',
        path: './assets/music/song_choi.mp3',
        image: './assets/img/thumbs/choi.jpg'
    },
    {
        name: 'Cua',
        singer: 'HieuThuHai',
        path: './assets/music/song_cua.mp3',
        image: './assets/img/thumbs/cua.jpg'
    },
    {
        name: 'Đắm (Remix)',
        singer: 'Xesi x Ricky Star x Nhựt Trường',
        path: './assets/music/song_dam.mp3',
        image: './assets/img/thumbs/dam.jpg'
    },
    {
        name: 'Bật Nhạc Lên',
        singer: 'HieuThuHai',
        path: './assets/music/song_batnhaclen.mp3',
        image: './assets/img/thumbs/batnhaclen.jpg'
    },
    {
        name: 'Nơi Này Có Anh',
        singer: 'Sơn Tùng - MTP',
        path: './assets/music/song_noinaycoanh.mp3',
        image: './assets/img/thumbs/noinaycoanh.jpg'
    },
    {
        name: 'Em không hiểu',
        singer: 'Changg x Minh Huy',
        path: './assets/music/song_emkhonghieu.mp3',
        image: './assets/img/thumbs/emkhonghieu.webp'
    },
    {
        name: 'Cưới thôi',
        singer: 'Masew',
        path: './assets/music/song_cuoithoi.mp3',
        image: './assets/img/thumbs/cuoithoi.jpg'
    },
    {
        name: 'Tell Ur Mom',
        singer: 'Winno ft. Heily',
        path: './assets/music/song_tellurmom.mp3',
        image: './assets/img/thumbs/tellUrMom.webp'
    },
];

const SONGS_STORAGE_KEY = 'VIK_SONGS';

localStorage.setItem(SONGS_STORAGE_KEY, JSON.stringify(songs));