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
                        <a class="inquiry text-decoration-none rounded-pill d-inline-block" href="#inquire" data-toggle="modal">제휴/서비스 문의</a>
                    </div>
                </div>
            </div>
        </header>
        <div class="modal fade" tabindex="-1" id="inquire">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">제휴 제안ㆍ서비스 문의</h5>
                    </div>
                    <div class="modal-body p-4 p-md-5">
                        <div class="mb-3">
                            <input type="text" class="form-control form-control-lg" placeholder="회사명" required>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control form-control-lg" placeholder="이름" required>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control form-control-lg" placeholder="이메일" required>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control form-control-lg" placeholder="전화번호" required>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control form-control-lg" placeholder="문의내용" rows="5"></textarea>
                        </div>
                        <div class="mb-3 agree">
                            <div>
                                <div class="p-3">
                                    <label class="d-flex align-items-center mb-0">
                                        <input type="checkbox"><span class="ml-2">개인정보 수집 및 이용 동의 <b>(필수)</b></span>
                                    </label>
                                </div>
                                <div class="p-3">
                                    개인정보 수집 항목  :  회사명, 이름, 이메일, 전화번호<br>
                                    개인정보 수집 및 이용 목적  :  접수된 문의사항에 대한 답변 안내<br>
                                    개인정보 보유 및 이용기간  :  답변 완료 시점으로부터 3개월 보관 후 파기
                                </div>
                            </div>
                        </div>
                        <div class="btn-area">
                            <button class="btn btn-lg btn-cancel" data-dismiss="modal">취소</button>
                            <button class="btn btn-lg btn-submit ml-3">문의하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
                &.active {
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
            margin-right: 30px;
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
    .btn-area {
        display: flex;
        .btn {
            flex: 1;
            border: 1px solid black;
            border-radius: 0;
            font-size: 12px;
            height: 40px;
        }
        .btn-submit {
            background-color: black;
            color: white;
        }
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
        .btn-area {
            .btn {
                font-size: 14px;
                height: 45px;
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
        .btn-area {
            .btn {
                font-size: 15px;
                height: 50px;
            }
        }
    }
}
</style>