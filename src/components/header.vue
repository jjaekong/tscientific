<template>
    <div>
        <header id="header">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto d-flex align-items-center">
                        <button class="btn btn-menu border-0 p-0 d-md-none" data-toggle="modal" data-target="#gnb-menu">
                            <span class="rounded-pill d-block"></span>
                            <span class="rounded-pill d-block"></span>
                            <span class="rounded-pill d-block"></span>
                        </button>
                        <h1 class="logo mb-0 float-left"><router-link class="d-block" to="/"><img class="d-block" src="@/assets/logo_en_blue.png" alt="TSCIENTIFIC"></router-link></h1>
                    </div>
                    <div class="col-auto d-flex align-items-center">
                        <nav class="menu d-none d-md-flex">
                            <router-link to="/company">COMPANY</router-link>
                            <router-link to="/business">BUSINESS</router-link>
                            <router-link to="/ir">IR</router-link>
                            <router-link to="/career">CAREER</router-link>
                        </nav>
                        <!-- <a class="inquiry text-decoration-none rounded-pill d-inline-block" href="#inquire" data-toggle="modal">제휴/서비스 문의</a> -->
                        <a class="d-lg-none cs-center text-decoration-none rounded-pill d-inline-block" href="https://cs.tscientific.co.kr" target="_blank">온라인 고객센터 <i class="bi bi-box-arrow-up-right"></i></a>
                        <a class="d-none cs-center-qr d-lg-inline-flex text-decoration-none align-items-center" href="https://cs.tscientific.co.kr" target="_blank">
                            <img src="@/assets/img_qrcode.jpg">
                            <div>
                                온라인<br>
                                <span>고객센터</span><br>
                                바로가기
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <div class="modal fade" tabindex="-1" id="inquire">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header d-flex align-items-center">
                        <h5 class="modal-title">제휴 제안ㆍ서비스 문의</h5>
                    </div>
                    <div class="modal-body p-4 p-md-5">
                        <div class="mb-3">
                            회사명, 연락처, 문의내용을 아래의 메일로 보내주세요.<br class="d-none d-sm-inline">
                            빠른 시간 안에 확인 후 연락드리겠습니다.
                        </div>
                        <div class="mb-4">
                            <div class="card p-4" style="border-radius: 1rem;">
                                <h6 class="mb-2">제휴영업팀</h6>
                                <!-- <p class="mb-0 heading-4"><b>aff@tscientific.co.kr</b></p> -->
                                <p clsas="mb-0 text-left"><button class="btn btn-link p-0 border-0 text-decoration-none d-inline text-dark outline-none" @click.prevent="copyEmail"><b>aff@tscientific.co.kr</b> <i class="bi bi-files"></i></button></p>
                            </div>
                        </div>
                        <button class="btn btn-lg btn-ok btn-block" data-dismiss="modal">확인</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        copyEmail: function () {
            prompt('이메일주소를 복사하세요.', 'aff@tscientific.co.kr')
        },
    }
}
</script>

<style lang="scss" scoped>
#header {
    background: var(--light);
    .row {
        height: 64px;
    }
    .btn-menu {
        margin-right: 16px;
        span {
            height: 3px;
            width: 17px;
            background-color: black;
            & + span {
                margin-top: 4px;
            }
        }
    }
    .logo {
        color: blue;
        img {
            height: 11px;
        }
    }
    .inquiry {
        color: rgb(44, 46, 135);
        font-weight: 900;
        background-color: #eee;
        font-size: 10px;
        line-height: 20px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .cs-center {
        color: rgb(44, 46, 135);
        font-weight: 900;
        background-color: #eee;
        font-size: 10px;
        line-height: 20px;
        padding-left: 10px;
        padding-right: 10px;
    }
    @media screen and (min-width: 768px) {
        .row {
            height: 90px;
        }
        .logo {
            img {
                height: 16px;
            }
        }
        .menu {
            margin-right: 20px;
            a {
                text-decoration: none;
                font-size: 14px;
                color: black;
                & + a {
                    margin-left: 20px;
                }
                &.router-link-active {
                    color: #2f74f5;
                }
            }
        }
        .inquiry {
            font-size: 12px;
            line-height: 24px;
            padding-left: 15px;
            padding-right: 15px;
        }
    }
    @media screen and (min-width: 992px) {
        .row {
            height: 120px;
        }
        .logo {
            img {
                height: 22px;
            }
        }
        .menu {
            margin-right: 50px;
            a {
                font-size: 15px;
                & + a {
                    margin-left: 45px;
                }
            }
        }
        .inquiry {
            font-size: 15px;
            line-height: 30px;
            padding-left: 20px;
            padding-right: 20px;
        }
        .cs-center-qr {
            color: #000;
            font-weight: 800;
            line-height: 1.2;
            img {
                margin-right: .25rem;
                width: 50px;
                height: 50px;
            }
            div {
                span {
                    color: #2f74f5;
                }
            }
        }
    }
}
#inquire.modal {
    .modal-content {
        border-radius: 0;
        border: 0;
    }
    .modal-header {
        border-radius: 0;
        justify-content: center;
        background-color: rgb(44, 46, 135);
        color: white;
        height: 50px;
        .modal-title {
            font-weight: 600;
            font-size: 15px;
        }
    }
    .form-control {
        border-radius: 0;
        border: 1px solid #000;
        font-size: 12px;
    }
    .agree {
        font-size: 10px;
        > div {
            border: 1px solid black;
            > div {
                &:nth-of-type(1) {
                    border-bottom: 1px solid black;
                }
            }
        }
    }
    .card {
        height: 15rem;
        background-image: url('~@/assets/logo_with_shape.png');
        background-repeat: no-repeat;
        background-size: 100px auto;
        background-position: calc(100% - 2rem) calc(100% - 2rem);
        .btn {
            font-size: 1rem;
        }
    }
    .btn-ok {
        flex: 1;
        border: 1px solid black;
        border-radius: 0;
        font-size: 12px;
        height: 40px;
        // background-color: rgb(44, 46, 135);
        // color: white;
        background-color: white;
        color: black;
    }
    @media screen and (min-width: 768px) {
        .modal-header {
            height: 80px;
            .modal-title {
                font-size: 18px;
            }
        }
        .form-control {
            font-size: 14px;
        }
        .agree {
            font-size: 11px;
        }
        .btn-ok {
            font-size: 14px;
            height: 45px;
        }
        .card {
            .btn {
                font-size: 1.5rem;
            }
        }
    }
    @media screen and (min-width: 1200px) {
        .modal-header {
            height: 100px;
            .modal-title {
                font-size: 20px;
            }
        }
        .form-control {
            font-size: 15px;
        }
        .agree {
            font-size: 12px;
        }
        .btn-ok {
            font-size: 15px;
            height: 50px;
        }
    }
}
</style>