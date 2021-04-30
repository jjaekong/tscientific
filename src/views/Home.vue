<template>
    <div>
        <Header />
        <main id="main" class="main">
            <div class="introduce">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide ratio ratio-1x1">
                            <video muted loop autoplay>
                                <source src="https://storage.coverr.co/videos/JzeUAO3sh3Jx8002TRKGOzpd4hkSh571W?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE5MTYxMzg3fQ.1axTx46AdD2VsQRv6FV5FEivsl-u1Y86LdPQTuT31o0" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="content">
                                <div class="container">
                                    <h4>TOWARD<br>TECH &amp; SCIENCE</h4>
                                    <p>새로운 세상을 만드는 사람들, 티사이언티픽.</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide ratio ratio-1x1">
                            <img src="@/assets/bg_building.jpg" alt="">
                            <div class="content">
                                <div class="container">
                                    <h4>KEEP<br>SMART &amp; FUN</h4>
                                    <p>똑똑하고 편리한 모바일 커머스.</p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide ratio ratio-1x1">
                            <video muted loop autoplay>
                                <source src="https://storage.coverr.co/videos/QddliPVHBsTBNQvYqzZMfCjTsbpxdLUO?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE5MTYxNzE4fQ.-7WGnFHNnhKRdhNbg_6DCls0Fv1mePSW3g2Ggzne-ww" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="content">
                                <div class="container">
                                    <h4>BE BOLD!</h4>
                                    <p>새로운 생각, 과감한 도전.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="controls">
                        <div class="container">
                            <div class="row">
                                <div class="col d-flex align-items-center">
                                    <div class="swiper-button-prev"><i class="bi bi-chevron-left"></i></div>
                                    <div class="btn-play"><i class="bi bi-play-fill"></i></div>
                                    <div class="btn-pause"><i class="bi bi-pause-fill"></i></div>
                                    <div class="swiper-button-next"><i class="bi bi-chevron-right"></i></div>
                                    <div class="progress-bar"><div></div></div>
                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="stock-cell col-12 col-lg-6">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="stock">
                                        <h4 class="mb-0"><div>STOCK</div></h4>
                                        <div class="price">
                                            3,500
                                        </div>
                                        <dl class="compare d-flex align-items-center mb-0">
                                            <dt>전일대비</dt>
                                            <dd class="mb-0"><i class="bi bi-caret-up-fill"></i> 300</dd>
                                        </dl>
                                        <dl class="rate d-flex align-items-center mb-0">
                                            <dt>등락률</dt>
                                            <dd class="mb-0"><i class="bi bi-caret-down-fill"></i> 0.42%</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="news-cell col-12 col-lg-6">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="news">
                                        <h4 class="mb-0"><div>NEWS</div></h4>
                                        <ul class="list-unstyled mb-0">
                                            <li><a class="text-truncate" href="#" onclick="window.open('http://dart.fss.or.kr/dsaf001/main.do?rcpNo=20210331002628', '_blank', 'width=1000, height=600'); return false;">[기재정정]사업보고서 (2020.12)</a></li>
                                            <li><a class="text-truncate" href="#" onclick="window.open('http://dart.fss.or.kr/dsaf001/main.do?rcpNo=20210324900751', '_blank', 'width=1000, height=600'); return false;">정기주주총회결과</a></li>
                                            <li><a class="text-truncate" href="#" onclick="window.open('http://dart.fss.or.kr/dsaf001/main.do?rcpNo=20210319901702', '_blank', 'width=1000, height=600'); return false;">증권발행결과(자율공시)</a></li>
                                            <li><a class="text-truncate" href="#" onclick="window.open('http://dart.fss.or.kr/dsaf001/main.do?rcpNo=20210316902069', '_blank', 'width=1000, height=600'); return false;">감사보고서제출</a></li>
                                            <li><a class="text-truncate" href="#" onclick="window.open('http://dart.fss.or.kr/dsaf001/main.do?rcpNo=20210311901373', '_blank', 'width=1000, height=600'); return false;">[기재정정]매출액또는손익구조30%(대규모법인은15%)이상변동</a></li>
                                            <li><a class="text-truncate" href="#" onclick="window.open('http://dart.fss.or.kr/dsaf001/main.do?rcpNo=20210310001236', '_blank', 'width=1000, height=600'); return false;">[기재정정]사업보고서 (2019.12)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export default {
    components: {
        Header, Footer
    },
    data: function() {
        return {
            swiper: null
        }
    },
    mounted: function() {
        this.swiper = new Swiper('.swiper-container', {
            loop: true,
            // allowTouchMove: false,
            // pagination: {
            //     el: '.swiper-pagination',
            //     type: 'fraction'
            // },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
        })
    },
    destroyed: function() {
        this.swiper.destroy(true, false)
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
.main {
    .stock-cell {
        background-color: #222;
        color: white;
    }
    .news-cell {
        background-color: #2c2e87;
        color: white;
    }
    .stock, .news {
        display: flex;
        align-items: center;
        height: 64px;
        h4 {
            font-size: 10px;
            letter-spacing: 2px;
            font-weight: 800;
            div {
                width: 60px;
            }
        }
    }
    .stock {
        .bi-caret-up-fill {
            color: #ff4704;
        }
        .bi-caret-down-fill {
            color: rgb(44, 46, 135);
        }
        .trends {
            display: flex; 
        }
        .price {
            margin-right: 15px;
            font-size: 20px;
            font-weight: 600;
            font-family: 'GmarketSans';
            i {
                font-size: 60%;
            }
        }
        .compare {
            margin-right: 15px;
        }
        .rate, .compare {
            font-size: 10px;
            dt {
                font-weight: 300;
                margin-right: 5px;
                display: none;
            }
        }
    }
    .news {
        h4 {
            line-height: 1.5 !important;
        }
        ul {
            overflow: hidden;
            height: 15px;
        }
        li {
            line-height: 1.5 !important;
            a {
                display: block;
                color: white;
                text-decoration: none;
                font-weight: 200;
                font-size: 10px;
                line-height: 1.5 !important;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    .introduce {
        position: relative;
        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .content {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            color: white;
            background-color: rgba(0, 0, 0, .35);
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 60px;
            h4 {
                font-size: 25px;
                font-weight: 700;
            }
            p {
                font-size: 10px;
                font-weight: 100;
            }
        }
        .controls {
            position: absolute;
            bottom: 25px;
            left: 30px;
            width: 100%;
            font-size: 10px;
            .btn-play,
            .btn-pause {
                display: none;
                z-index: 10;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 1;
                cursor: pointer;
            }
            &.play {
                .btn-play { display: none; }
                .btn-pause { display: block; }
            }
            &.pause {
                .btn-play { display: block; }
                .btn-pause { display: none; }
            }
            .swiper-button-prev,
            .swiper-button-next {
                margin-top: 0;
                margin-bottom: 0;
                position: relative;
                top: auto;
                bottom: auto;
                left: auto;
                right: auto;
                width: auto;
                height: auto;
                color: white;
                opacity: 1;
                line-height: 1;
                &:after {
                    content: '';
                }
            }
            .swiper-button-prev {
                margin-right: 5px;
            }
            .swiper-button-next {
                margin-left: 5px;
            }
            .progress-bar {
                margin-left: 15px;
                margin-right: 15px;
                width: 100px;
                height: 2px;
                z-index: 10;
                background: white;
                div {
                    width: 0;
                    height: 100%;
                    background: rgb(44, 46, 135);
                    animation-name: progressbar;
                    animation-duration: 3.3s;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    animation-play-state: paused;
                }
            }
            &.play {
                .progress-bar {
                    div {
                        animation-play-state: running;
                    }
                }
            }
            &.pause {
                .progress-bar {
                    div {
                        animation: none;
                    }
                }
            }
            .swiper-pagination {
                position: relative;
                bottom: auto;
                left: auto;
                width: auto;
                color: white;
            }
        }
    }
    @media screen and (min-width: 576px) {
        .stock {
            .rate, .compare {
                dt {
                    display: block;
                }
            }
        }
        .introduce {
            .swiper-slide {
                height: 400px;
                right: auto;
                left: auto;
                .content {
                    padding-left: 0;
                    padding-right: 0;
                    padding-bottom: 80px;
                    h4 {
                        margin-bottom: 20px;
                        font-size: 35px;
                    }
                    p {
                        font-size: 12px;
                    }
                }
            }
            .controls {
                left: auto;
                bottom: 40px;
                .swiper-button-prev {
                    margin-right: 10px;
                }
                .swiper-button-next {
                    margin-left: 10px;
                }
                .progress-bar {
                    margin-left: 20px;
                    margin-right: 20px;
                    width: 120px;
                }
            }
        }
    }
    @media screen and (min-width: 992px) {
        .stock {
            padding-left: 1.5rem;
            float: right;
        }
        .stock, .news {
            width: calc(480px - 1.75rem);
            height: 120px;
            h4 {
                font-size: 15px;
                div {
                    width: 85px;
                }
            }
        }
        .stock {
            .price {
                margin-right: 20px;
                font-size: 30px;
            }
            .rate, .compare {
                font-size: 12px;
            }
            .compare {
                margin-right: 20px;
            }
        }
        .news {
            padding-left: 20px;
            ul {
                height: calc(15px * 1.5);
            }
            li {
                a {
                    font-size: 15px;
                }
            }
        }
        .introduce {
            .swiper-slide {
                height: 600px;
                .content {
                    padding-bottom: 120px;
                    h4 {
                        margin-bottom: 20px;
                        font-size: 45px;
                    }
                    p {
                        font-size: 15px;
                    }
                }
            }
            .controls {
                bottom: 60px;
                font-size: 15px;
                .swiper-button-prev {
                    margin-right: 15px;
                }
                .swiper-button-next {
                    margin-left: 15px;
                }
                .progress-bar {
                    margin-left: 25px;
                    margin-right: 25px;
                    width: 180px;
                }
            }
        }
    }
    @media screen and (min-width: 1200px) {
        .stock, .news {
            width: calc(570px - 1.75rem);
        }
    }
    @media screen and (min-width: 1400px) {
        .stock {
            padding-left: 8rem;
        }
        .stock, .news {
            width: calc(660px - 1.75rem);
        }
    }
}

</style>