<template>
    <footer id="footer">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-12 col-sm-5 col-lg-8">
                    <div class="row">
                        <div class="col">
                            <h2 class="logo"><img class="d-block" src="@/assets/logo_ko_white.png"></h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-4 col-xl-3">
                            <div class="cs-center">
                                <h4>CS CENTER</h4>
                                <a href="tel:1588-5639">1588-5639</a>
                            </div>
                        </div>
                        <div class="col-12 col-lg-8 col-xl-9">
                            <div class="contacts">
                                <dl class="d-flex align-items-center">
                                    <dt>대표번호</dt>
                                    <dd>02-2181-8000</dd>
                                </dl>
                                <dl class="d-flex align-items-center">
                                    <dt>팩스번호</dt>
                                    <dd>02-2181-8001</dd>
                                </dl>
                                <dl class="d-flex align-items-center">
                                    <dt>메일</dt>
                                    <dd><a href="mailto:info@tscientific.co.kr" target="_blank">info@tscientific.co.kr</a></dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-auto col-lg-auto">
                    <div class="row">
                        <div class="col">
                            <div class="policy">
                                <ul class="list-unstyled d-flex">
                                    <li><router-link to="/privacy_policy">개인정보 처리방침</router-link></li>
                                    <li><router-link to="/data_loss_prevention">내부정보 관리규정</router-link></li>
                                </ul>
                                <address>
                                    주식회사 티사이언티픽<br>
                                    서울시 동작구 여의대방로 62길 1 이투데이빌딩 3층
                                </address>
                                <div class="copyright text-uppercase">Copyright © 2016 by Tscientific All rights reserved</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
#footer {
    padding: 40px 20px;
    background-color: black;
    color: white;
    .logo {
        margin-bottom: 20px;
        img {
            height: 14px;
        }
    }
    .cs-center {
        margin-bottom: 20px;
        h4 {
            margin-bottom: 2px;
            font-size: 10px;
            font-weight: 600;
            color: #888d96;
            font-family: 'GmarketSans', sans-serif;
        }
        a {
            color: white;
            text-decoration: none;
            font-size: 14px;
            font-weight: 900;
            font-family: 'GmarketSans', sans-serif;
            letter-spacing: 1px;
        }
    }
    .contacts {
        dl {
            font-family: 'InfinitySans', sans-serif;
            margin-bottom: 0;
            font-size: 10px;
            color: #888d96;
            dt {
                &:after {
                    margin-left: 1px;
                    margin-right: 1px;
                    content: ':'
                }
            }
            dd {
                margin-bottom: 0;
            }
            a {
                color: #888d96;
                text-decoration: none;
            }
        }
    }
    .policy {
        margin-top: 20px;
        font-family: 'InfinitySans', sans-serif;
        ul {
            margin-bottom: 20px;
            font-size: 10px;
            li + li:before {
                margin-left: 5px;
                margin-right: 5px;
                content: '|'
            }
            a {
                color: white;
                text-decoration: none;
            }
            li:first-child {
                a {
                    color: #2f74f5;
                }
            }
        }
        address {
            margin-bottom: 20px;
            font-size: 10px;
            letter-spacing: -1px;
            color: #888d96;
        }
        .copyright {
            font-family: "GmarketSans", sans-serif;
            font-weight: 600;
            font-size: 6px;
            color: #474747;
        }
    }
    @media screen and (min-width: 576px) {
        .policy {
            margin-top: 56px;
            address {
                margin-bottom: 5px;
            }
        }
    }
    @media screen and (min-width: 992px) {
        padding-top: 70px;
        padding-bottom: 50px;
        .logo {
            margin-bottom: 30px;
            img {
                height: 20px;
            }
        }
        .cs-center {
            margin-bottom: 0;
            h4 {
                margin-bottom: 5px;
                font-size: 12px;
            }
            a {
                font-size: 24px;
            }
        }
        .contacts {
            dl {
                font-size: 12px;
                line-height: 20px;
            }
        }
        .policy {
            margin-top: 10px;
            ul {
                font-size: 14px;
                li + li:before {
                    margin-left: 10px;
                    margin-right: 10px;
                }
            }
            address {
                font-size: 12px;
                line-height: 20px;
                margin-bottom: 10px;
            }
            .copyright {
                font-size: 7px;
            }
        }
    }
}
</style>