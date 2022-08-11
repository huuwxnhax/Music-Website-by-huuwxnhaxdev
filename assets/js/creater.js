var createrLists = [
    {
        background: "./assets/img/creater/phuongly.png",
        title: "Phương Ly",
        followers: "200K",
    },
    {
        background: "./assets/img/creater/amee.png",
        title: "Amee",
        followers: "126k",
    },
    {
        background: "./assets/img/creater/sontungmtp.png",
        title: "Sơn Tùng MTP",
        followers: "556k",
    },
    {
        background: "./assets/img/creater/junvu.png",
        title: "Jun Vũ",
        followers: "60k",
    },
    {
        background: "./assets/img/creater/taylorswift.jpg",
        title: "Taylor Swift",
        followers: "2M",
    },
]

const CREATER_STORAGE_KEY = 'VIK_CREATER';
localStorage.setItem(CREATER_STORAGE_KEY,JSON.stringify(createrLists));