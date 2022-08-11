var listPlaylist = [
    {
        background: './assets/img/playlist/playlist_1.png',
        title: 'V-Pop: The A-List',
        subtitle: 'Zing MP3'
    },
    {
        background: './assets/img/playlist/playlist_2.png',
        title: 'Rồi tới luôn',
        subtitle: 'Nal'
    },
    {
        background: './assets/img/playlist/playlist_3.png',
        title: 'US-UK',
        subtitle: 'Zing MP3'
    },
    {
        background: './assets/img/playlist/playlist_4.png',
        title: 'Chúng ta của hiện tại',
        subtitle: 'Sơn Tùng MTP'
    },
    {
        background: './assets/img/playlist/playlist_5.png',
        title: 'Em hát ai nghe',
        subtitle: 'ORANGE'
    },
    {
        background: './assets/img/playlist/playlist_6.png',
        title: 'Thế giới V-Pop',
        subtitle: 'Zing MP3'
    }
];

const PLAYLIST_STORAGE_KEY = 'VIK_PLAYLIST';

localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(listPlaylist));