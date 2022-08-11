'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)

const appContainers = Array.from($$('.app__container'));
const albumList = $('.album__container')
const authors = Array.from($$('.player__song-author'));
const audio = $('#audio');
const btnNavSetting = $('.header__nav-btn.btn__nav-setting')
const btnMenuSetting = $('.setting__menu')
const createrContainer = $('.creater__container')
const durationTimes = Array.from($$('.durationtime'));
const header = $('.header')
const mvContainer = $('.mv__container')
const nextBtns = Array.from($$('.control-btn.btn-next'))
const prevBtns = Array.from($$('.control-btn.btn-prev'))
const playlistSongs = Array.from($$('.playlist__list'))
const playlistList = $('.playlist__container')
const playBtns = $$('.btn-toggle-play')
const player = $('.player')
const playerContainer = $('.player__container-song')
const playerSongInfor = $('.player__song-info')
const progress = Array.from($$('.progress'))
const progressBlocks = Array.from($$('.progress-block'));
const progressTracks = Array.from($$('.progress__track.song--track .progress__track-update'))
const panes = $$('.container__tab')
const sidebarSubnav = $('.sidebar__subnav');
const sidebarSubnavItems = Array.from($$('.sidebar__subnav .subnab--item'));
const sidebarNavItem = $('.sidebar__nav-item')
const songAnimateTitles = Array.from($$('.player__title-animate'));
const slideContainers = Array.from($$('.container__slide'))
const thumbImgs = Array.from($$('.thumb-img'))
const trackTimes = Array.from($$('.tracktime'))
const tabs = $$('.content__navbar-item')
const tabActive = $('.content__navbar-item.active')
const volumes = Array.from($$('.volume__range'))
const volumeBtns = Array.from($$('.player__options-btn.volume.option-btn'))
const volumeTracks = Array.from($$('.progress__track.volume--track .progress__track-update'));
const volumeIcons = Array.from($$('.volume .btn--icon'));

const nextScrolls = Array.from($$('.container__header-button.next--btn'))

const randomBtns = Array.from($$('.control-btn.btn-random'))
const repeatBtns = Array.from($$('.control-btn.btn-repeat'))

const DURATION_STORAGE_KEY = 'VIK_DURATION';

const app = {

    isPlaying: false,
    currentIndex: 0,
    isSeeking: false,
    currentPlaylist: 0,
    isChangeVolume: false,
    isRandom: false,
    isRepeat: false,

    playlists: JSON.parse(localStorage.getItem(PLAYLIST_STORAGE_KEY) || '[]'),
    songlists: JSON.parse(localStorage.getItem(SONGS_STORAGE_KEY) || '[]'),
    ablumLists: JSON.parse(localStorage.getItem(ALBUM_STORAGE_KEY) || '[]'),
    mvlists: JSON.parse(localStorage.getItem(MV_STORAGE_KEY) || '[]'),
    createrlists: JSON.parse(localStorage.getItem(CREATER_STORAGE_KEY) || '[]'),
    durationList: JSON.parse(localStorage.getItem(DURATION_STORAGE_KEY) || `[
        ["3:52","3:15","3:33","4:30","2:38","3:12","2:53","4:15","3:13","2:14","3:20","4:38","3:57","3:01","3:36"]
    ]`),

    html([first, ...string], ...values) {
        return values.reduce(
            (acc, cur) => acc.concat(cur, string.shift())
            , [first]
        )
        .filter(x => x && x !== true || x === 0)
        .join('')       
    },

    renderSong: function() {
        playlistSongs.forEach((playlistSong, index) => {
            playlistSong.innerHTML = app.html`${app.songlists.map(function(songlist, index) {
                return app.html`
                <div class="playlist__list-song media ${app.currentIndex === index ? 'active' : ''}" data-index="${index}">
                <div class="playlist__song-info">
                    <div class="playlist__song-thumb" 
                        style="background: url('${songlist.image}') no-repeat center center / cover;"></div>
                        <div class="playlist__song-body">
                            <span class="song__body-title">${songlist.name}</span>
                            <p class="song__body-artist">${songlist.singer}</p>
                        </div>
                    </div>
                    <span class="playlist__song-time">
                    ${app.durationList[app.currentPlaylist][index]}
                    </span>
                    <div class="playlist__song-options">
                        <div class="playlist__song-btn option-btn song__micro-icon">
                            <i class="btn--icon song__icon bi bi-mic-fill"></i>
                        </div>
                        <div class="playlist__song-btn option-btn song__heart-icon">
                            <i class="btn--icon icon--heart bi bi-heart-fill primary"></i>
                        </div>
                        <div class="playlist__song-btn option-btn song__option-icon">
                            <i class="btn--icon bi bi-three-dots"></i>
                        </div>
                    </div>
            </div>`
            })}`
        })
    },

    renderPlaylist: function() {  
            const htmlPlaylist = this.playlists.map((playlist, index) => {
                return `
                <div class="col l-2-4">
                    <div class="row--item playlist__item">
                        <div class="row__item-container flex--top-left">
                            <div class="item--display">
                                <div class="display--background pt-1" 
                                    style="background: url('${playlist.background}') no-repeat center center / cover;">
                                </div>
                                <div class="display--actions">
                                    <div class="actions--item">
                                        <i class="btn--icon icon--heart bi bi-heart-fill primary"></i>
                                    </div>
                                    <div class="btn--play">
                                        <div class="control-btn btn-toggle-play">
                                            <i class="bi bi-play-fill"></i>
                                        </div>
                                    </div>
                                    <div class="actions--item">
                                        <i class="btn--icon bi bi-three-dots"></i>
                                    </div>
                                </div>
                                <div class="overlay"></div>
                            </div>
                            <div class="item--infor">
                                <a class="item--title is-twoline">${playlist.title}</a>
                                <h3 class="item--subtitle">${playlist.subtitle}</h3>
                            </div>
                        </div>
                    </div>
                </div>`
            })
            playlistList.innerHTML = htmlPlaylist.join('')
    },

    renderAlbum: function () {
        const htmlAlbum = this.ablumLists.map((album, index) => {
            return `
            <div class="col l-2-4">
                    <div class="row--item album__item">
                        <div class="row__item-container flex--top-left">
                            <div class="item--display">
                                <div class="display--background pt-1" 
                                    style="background: url('${album.background}') no-repeat center center / cover;">
                                </div>
                                <div class="display--actions">
                                    <div class="actions--item">
                                        <i class="btn--icon icon--heart bi bi-heart-fill primary"></i>
                                    </div>
                                    <div class="btn--play">
                                        <div class="control-btn btn-toggle-play">
                                            <i class="bi bi-play-fill"></i>
                                        </div>
                                    </div>
                                    <div class="actions--item">
                                        <i class="btn--icon bi bi-three-dots"></i>
                                    </div>
                                </div>
                                <div class="overlay"></div>
                            </div>
                            <div class="item--infor">
                                <a class="item--title is-twoline">${album.title}</a>
                            </div>
                        </div>
                    </div>
                </div>`
        }) 
        albumList.innerHTML = htmlAlbum.join('')
    },

    renderMV: function() {
        const htmlMv = this.mvlists.map((mvList, mvIndex) => {
            return `
            <div class="col l-4">
                <div class="row--item album__item">
                    <div class="row__item-container flex--top-left">
                        <div class="item--display">
                            <div class="display--background pt-2" 
                                style="background: url('${mvList.background}') no-repeat center center / cover;">
                            </div>
                            <div class="display--actions">
                                <div class="actions--item">
                                    <i class="btn--icon icon--heart bi bi-heart-fill primary"></i>
                                </div>
                                <div class="btn--play">
                                    <div class="control-btn btn-toggle-play">
                                        <i class="bi bi-play-fill"></i>
                                    </div>
                                </div>
                                <div class="actions--item">
                                    <i class="btn--icon bi bi-three-dots"></i>
                                </div>
                            </div>
                            <div class="overlay"></div>
                        </div>
                        <div class="item--infor mv--infor">
                            <div class="item--infor-thumb">
                                <img src="${mvList.thumb}" alt="">
                            </div>
                            <div class="item--infor-section">
                                <a class="item--title is-twoline">${mvList.title}</a>
                                <h3 class="item--subtitle">${mvList.subtitle}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        })
        mvContainer.innerHTML = htmlMv.join('')
    },
    
    renderCreater: function() {
        const htmlCreater = this.createrlists.map((createrList, createrIndex) => {
            return `
            <div class="col l-2-4">
                <div class="row--item creater__item">
                    <div class="row__item-container flex--top-left">
                        <div class="item--display br-5">
                            <div class="display--background pt-1" 
                                style="background: url('${createrList.background}') no-repeat center center / cover;">
                            </div>
                            <div class="display--actions">
                                <div class="btn--play">
                                    <div class="control-btn btn-toggle-play">
                                        <i class="bi bi-play-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="overlay"></div>
                        </div>
                        <div class="item--info creater creater--infor">
                            <div class="creater__left">
                                <div class="infor__creater-section">
                                    <div href="#" class="row__info-name is-ghost mt-15 lh-19 text-center">
                                    ${createrList.title}
                                        <i class="bi bi-star-fill row__info-icon">
                                            <div class="icon-overlay"></div>
                                        </i>
                                    </div>
                                    <h3 class="row__info-creator text-center">${createrList.followers} quan tâm</h3>
                                </div>
                            </div>
                            <div class="row__item-btn">
                                <button class="button is-small button-primary">
                                    <i class="bi bi-check2"></i>
                                    <span>&nbsp;Đã quan tâm</span>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>`
        })
        createrContainer.innerHTML = htmlCreater.join('')
    },

    render: function() {
        this.handleEvents();

        this.renderSong();

        this.renderPlaylist();

        this.renderAlbum();

        this.renderMV();

        this.renderCreater();
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songlists[this.currentIndex]
            }
        })
    },

    handleEvents: function () {
        const _this = this
        const playBtns = $$('.btn-toggle-play.btn--play-song')


        // Set background for header when scroll
        appContainers.forEach(appContainer => {
            appContainer.onscroll = function() {
                const onscrollTop = appContainer.scrollY || appContainer.scrollTop
                if(onscrollTop > 5) {
                    Object.assign(header.style, {
                        backgroundColor: 'var(--layout-bg)',
                        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.08',
                    })
                } else {
                    Object.assign(header.style, {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    })
                }
            }
        })

        // hide and visible shadow of subnav on sidebar
        sidebarSubnav.onscroll = (e) => {
            const scrollTop = sidebarSubnav.scrollY || sidebarSubnav.scrollTop
            if(scrollTop > 10) {
                sidebarSubnav.classList.add('has-mask')
            } else {
                sidebarSubnav.classList.remove('has-mask')
            }
        }
        
        // open setting menu
        btnNavSetting.onclick = (e) => {
            e.stopPropagation()
            btnMenuSetting.classList.toggle('open')
        }

        // when click on setting menu
        btnMenuSetting.onclick = (e) => {
            e.stopPropagation()
        }

        // close setting menu
        document.onclick = (e) => {
            btnMenuSetting.classList.remove('open')
        }

        //click tabs content
        tabs.forEach((tab, index) => {
            const pane = panes[index]
            tab.onclick = function() {
                $('.content__navbar-item.active').classList.remove('active')
                $('.container__tab.active').classList.remove('active')

                this.classList.add('active')
                pane.classList.add('active')
            }
        })


        //click to play song
        playBtns.forEach(playBtn => {
            playBtn.onclick = function () {
                if(_this.isPlaying) {
                    audio.pause()
                } else {
                    audio.play()
                }
            }
        })

        // Khi song duoc play
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            playerSongInfor.classList.add('playing')
        }

        // Khi song pause
        audio.onpause = function () {
            _this.isPlaying = false
            player.classList.remove('playing')
            playerSongInfor.classList.remove('playing')
        }

        // Xu li thay doi trang thai khi song play
        audio.ontimeupdate = function(e) {
            if(audio.duration) {
                if(!_this.isSeeking) {
                    trackTimes.forEach(trackTime => {
                        trackTime.innerHTML = _this.audioCalTime(audio.currentTime)
                    })

                    progress.forEach(progressChild => {
                        progressChild.value = Math.round(audio.currenTime / audio.duration * 100)
                    })

                    progressTracks.forEach(progressTrack => {
                        progressTrack.style.width = Math.round(audio.currentTime / audio.duration * 100) + '%'
                    })

                    const listDurationTime = $('.playlist__list-song.active .playlist__song-time')
                   
                    if(listDurationTime.innerText === '--/--' || listDurationTime.innerText === '') {
                        _this.durationList[_this.currentPlaylist].splice(_this.currentIndex, 1, _this.audioCalTime(audio.duration))
                        localStorage.setItem(DURATION_STORAGE_KEY, JSON.stringify(_this.durationList));
                        listDurationTime.innerHTML = _this.durationList[_this.currentPlaylist][_this.currentIndex];
                        durationTimes.forEach(durationTime => {
                            durationTime.innerHTML = _this.durationList[_this.currentPlaylist][_this.currentIndex];
                        })
                    }
                }
            } else {
                // Xứ lí khi tua song
                progress.forEach(progressChild => {
                    progressChild.onchange = function(e) {
                        const seekTime = e.target.value * audio.duration / 100
                        audio.currentTime = seekTime
                    }
                })
            }
        }

        // Xu li keo tha khi tua song
        function currentTime() {
            if(_this.isSeeking) {
                let seekTime;
                progress.forEach(progressChild => {
                    progressChild.oninput = (e) => {
                        seekTime = e.target.value * audio.duration / 100
                        progressTracks.forEach(progressTrack => {
                            progressTrack.style.width = e.target.value + '%'
                        })
                        trackTimes.forEach(trackTime => {
                            trackTime.innerHTML = _this.audioCalTime(seekTime)
                        })
                        
                    }
                })
            }
        }

        progress.forEach(progressChild => {
            progressChild.onmousemove = currentTime;         
            progressChild.addEventListener('touchmove', currentTime);
        })

        function seekStart() {
            if(audio.duration) {
                _this.isSeeking = true;
            }
        }

        function seekEnd() {
            _this.isSeeking = false;
        }

        // progressBlock.addEventListener('touchstart', seekStart);
        progress.forEach(progressChild => {
            progressChild.onmousedown = seekStart;
            progressChild.ontouchstart = seekStart;
        })

        progress.forEach(progressChild => {
            progressChild.onmouseup = seekEnd;
            progressChild.ontouchend = seekEnd;
        })

        // handle when click lists song
        playlistSongs.forEach(playlistSong => {
            playlistSong.onclick = function(e) {
                const songNode = e.target.closest('.playlist__list-song:not(.active)')
                const heartIcon = e.target.closest('.song__heart-icon')
                const optionIcon = e.target.closest('.song__option-icon')
                const microIcon = e.target.closest('.song__micro-icon')
                const optionNode = e.target.closest('.playlist__song-options')

                if(songNode && !optionNode) {
                    // when click songlist to play
                    if(songNode) {
                        _this.currentIndex = Number(songNode.dataset.index)
                        const songActives = $$(`.playlist__list-song[data-index="${_this.currentIndex}"]`)
                        _this.loadCurrentSong()
                        Array.from($$('.playlist__list-song.active')).forEach(songActive => {
                            songActive.classList.remove('playing')
                            songActive.classList.remove('active')
                        })
                        Array.from(songActives).forEach(songActive => {
                            songActive.classList.add('active')
                        })
                        audio.play()
                    }
                    //when click icon heart
                    if(heartIcon) {

                    }
                    //when click icon option
                    if(optionIcon) {

                    }
                    //when click icon micro
                    if(microIcon) {

                    }
                    //when click option area on song
                    if(optionNode) {

                    }
                }
            }
        })
        
        //Function change volume
        function changVolume(index) {
            if(audio.volume * 100 != volumes[index].value) {
                audio.volume = volumes[index].value / 100
                volumeTracks.forEach((volumeTrack, index) => {
                    volumeTrack.style.width = volumes[index].value + '%'
                })
                if(!audio.volume) {
                    volumeIcons.forEach((volumeIcon, index) => {
                        volumeIcon.classList.replace('bi-volume-up','bi-volume-mute')
                    })
                } else {
                    volumeIcons.forEach((volumeIcon, index) => {
                        volumeIcon.classList.replace('bi-volume-mute','bi-volume-up')
                    })
                }
            }
        }

        volumeBtns.forEach((volumeBtn, index) => {
            volumeBtn.onclick = (e) => {
                let currenVolume
                if(audio.volume > 0) {
                    currenVolume = 0
                } else {
                    if(volumes[index].value > 0) {
                        currenVolume = volumes[index].value
                    } else {
                        currenVolume = 100
                        volumes.forEach(volume => {
                            volume.value = 100
                        })
                    }
                }
                audio.volume = currenVolume / 100
                volumeTracks.forEach((volumeTrack, index) => {
                    volumeTrack.style.width = currenVolume + '%'
                })
                if(!audio.volume) {
                    volumeIcons.forEach((volumeIcon, index) => {
                        volumeIcon.classList.replace('bi-volume-up','bi-volume-mute')
                    })
                } else {
                    volumeIcons.forEach((volumeIcon, index) => {
                        volumeIcon.classList.replace('bi-volume-mute','bi-volume-up')
                    })
                }
            }          
        })

        volumes.forEach((volume, index) => {
            volume.onchange = (e) => {
                changVolume(index)
            }

            volume.onmousedown = (e) => {
                _this.isChangeVolume = true
            }
            
            volume.onmouseup = (e) => {
                _this.isChangeVolume = false
            }

            volume.onmousemove = (e) => {
                if(_this.isChangeVolume === true) {
                    changVolume(index)
                    e.stopPropagation()
                }
            }

            volume.addEventListener('touchstart', function(e) {
                _this.isChangeVolume = true
            })
            volume.addEventListener('touchend', function(e) {
                _this.isChangeVolume = false
            })
            volume.addEventListener('touchmove', function(e) {
                if(_this.isChangeVolume === true) {
                    changVolume(index)
                    e.stopPropagation()
                }
            })
        })


        // when click next song
        nextBtns.forEach(nextBtn => {
            nextBtn.onclick = function() {
                if(_this.isRandom) {
                    _this.playRandomSong()
                } else {
                    _this.nextSong()
                }       
                audio.play()
                _this.renderSong()
                _this.scrollToActiveSong()  
            }
        })

        // When click prev song
        prevBtns.forEach(prevBtn => {
            prevBtn.onclick = function() {
                if(_this.isRandom) {
                    _this.playRandomSong()
                } else {
                    _this.prevSong()
                }
                audio.play()
                _this.renderSong()
                _this.scrollToActiveSong()
            }
        })

        //When click random song
        randomBtns.forEach(randomBtn => {
            randomBtn.onclick = function(e) {
                _this.isRandom = !_this.isRandom
                randomBtns.forEach(randomBtn => {
                    randomBtn.classList.toggle('active',_this.isRandom)
                })
            }
        })

        //When click repeat song
        repeatBtns.forEach(repeatBtn => {
            repeatBtn.onclick = function(e) {
                _this.isRepeat = !_this.isRepeat
                repeatBtns.forEach(repeatBtn => {
                    repeatBtn.classList.toggle('active',_this.isRepeat)
                })
            }
        })

        //Auto next song
        audio.onended = function(e) {
            if(_this.isRepeat) {
                audio.play()
            } else {
                nextBtns.forEach(nextBtn => {
                    nextBtn.click()
                })
            }
        }

       
    },

    

    loadCurrentSong: function() {
        songAnimateTitles.map(songAnimateTitle => {
            songAnimateTitle.innerHTML = app.html`
                <div class="title__item">${this.currentSong.name}</div>
                <div class="title__item">${this.currentSong.name}</div>`
        })

        authors.map(author => {
            author.innerHTML = app.html`
            <div class="player__song-author info__author">${this.currentSong.singer}</div>`
        })

        thumbImgs.map(thumbImg => {
            thumbImg.innerHTML = app.html`
            <div class="thumb-img" style="background: url('${this.currentSong.image}') no-repeat center center / cover;"></div>`
        })

        audio.src = this.currentSong.path

        durationTimes.forEach(durationTime => {
            durationTime.innerHTML = this.durationList[this.currentPlaylist][this.currentIndex]
        })

        slideContainers.forEach(slideContainer => {
            slideContainer.innerHTML = app.html`
            <img src="${this.currentSong.image}" alt="">`
        })

    },

    audioCalTime: function(time) {
        let minute
        let second
        if(time) {
            minute = Math.floor(time / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            second = Math.floor(time % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        } else {
            minute = (0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
            second = (0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        }
        return `${minute}:${second}`;
    },

    scrollToActiveSong: function() {
        setTimeout(function() {
            Array.from($$('.playlist__list-song.active')).forEach(songActive => {
                songActive.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end'
                })
            })
        }, 250)
    },

    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songlists.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songlists.length - 1
        }
        this.loadCurrentSong()
    },
 
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songlists.length)
        }while(newIndex == this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    start: function () {

        //Dinh nghia cac object
        this.defineProperties()
        
        //render
        this.render();

        this.handleEvents()

        this.loadCurrentSong()

    }
}

app.start();
