<template>
    <div>
        <Header />
        <main id="main" class="career">
            <section class="overview">
                <div class="container">
                    <div class="row">
                        <div class="col d-flex flex-column justify-content-center align-items-center">
                            <h1 class="section-title">RECRUIT<span>.</span></h1>
                            <p>
                                남다른 사고, 도전을 향한 열정을 가진 사람들이 모여<br class="d-none d-sm-inline">
                                새로운 세상을 만들기 위해 끊임없이 도전합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="org-chart">
                <div class="container">
                    <div class="row no-gutters">
                        <div class="col col-lg-8 offset-lg-2">
                            <header>
                                <h2>경영총괄</h2>
                            </header>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col col-lg-2 offset-lg-2">
                            <h3>영업본부</h3>
                            <ul class="list-unstyled mb-0">
                                <li>법인영업 1팀</li>
                                <li>법인영업 2팀</li>
                                <li>제휴영업팀</li>
                            </ul>
                        </div>
                        <div class="col col-lg-2">
                            <h3>운영본부</h3>
                            <ul class="list-unstyled mb-0">
                                <li>마케팅운영팀</li>
                                <li>고객지원팀</li>
                            </ul>
                        </div>
                        <div class="col col-lg-2">
                            <h3>R&amp;D</h3>
                            <ul class="list-unstyled mb-0">
                                <li>개발팀</li>
                                <li>전산운영팀</li>
                            </ul>
                        </div>
                        <div class="col col-lg-2">
                            <h3>경영기획</h3>
                            <ul class="list-unstyled mb-0">
                                <li>경영기획팀</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="talent">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <header>
                                <h1 class="section-title">인재상<span>.</span></h1>
                                <p>티사이언티픽과 함께 성장할 훌륭한 인재를 기다립니다.</p>
                            </header>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col col-12 col-md-4 col-lg-3">
                            <div class="feature" style="z-index: 3">
                                <h2>새로운 생각</h2>
                                <p>
                                    남다른 사고,<br>
                                    엉뚱한 상상력으로<br>
                                    창의적인 아이디어를 만들어내는<br>
                                    창조적인 인재
                                </p>
                            </div>
                        </div>
                        <div class="col col-12 col-md-4 col-lg-3">
                            <div class="feature" style="z-index: 2">
                                <h2>가치를 위한 노력</h2>
                                <p>
                                    끊임없이 변화하는 시대에<br>
                                    적극적이고 능동적으로<br>
                                    개인의 발전과 회사의 성장을<br>
                                    꾀하며 자기개발을 하는 인재
                                </p>
                            </div>
                        </div>
                        <div class="col col-12 col-md-4 col-lg-3">
                            <div class="feature" style="z-index: 1">
                                <h2>정직하고 예의바름</h2>
                                <p>
                                    정직과 성실성을 기본으로<br>
                                    법규와 규범을 준수하고,<br>
                                    직관적으로 대화하며<br>
                                    상호존중 할 줄 아는 인재
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="apply">
                <div class="container">
                    <div class="row align-items-end">
                        <div class="col">
                            <a href="#" @click.prevent="copyEmail">
                                <div><span>recruit@tscientific.co.kr</span></div>
                                <div>입사지원<i class="bi bi-arrow-right"></i></div>
                            </a>
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

    export default {
        components: {
            Header,
            Footer
        },
        methods: {
            copyEmail: function() {
                prompt('이메일주소를 복사하세요.', 'recruit@tscientific.co.kr')
            }
        }
    }
</script>

<style lang="scss" scoped>
#main.career {
    .overview {
        background-image: url('~@/assets/bg_career.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        text-align: center;
        .col {
            height: 210px;
        }
        .section-title {
            margin-bottom: 10px;
            color: white !important;
        }
        p {
            margin-bottom: 0;
            color: white;
            font-weight: 300;
            font-size: 12px;
        }
        @media screen and (min-width: 576px) {}
        @media screen and (min-width: 768px) {
            .col {
                height: 280px;
            }
            .section-title {
                margin-bottom: 20px;
            }
            p {
                font-size: 13px;
                line-height: 1.8;
            }
        }
        @media screen and (min-width: 992px) {}
        @media screen and (min-width: 1200px) {
            .col {
                height: 360px;
            }
            .section-title {
                margin-bottom: 30px;
            }
            p {
                font-size: 15px;
                line-height: 2;
            }
        }
    }
    .org-chart {
        padding-top: 12px;
        header {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 45px;
            background-color: rgb(44, 46, 135);
            h2 {
                margin-bottom: 0;
                color: white;
                font-size: 15px;
                font-weight: 900;
            }
        }
        .row {
            &:nth-of-type(2) {
                .col {
                    padding-top: 35px;
                    height: 200px;
                    & + .col {
                        border-left: 1px solid #dadae3;
                    }
                }
                text-align: center;
                h3 {
                    margin-bottom: 15px;
                    color: rgb(44, 46, 135);
                    font-size: 15px;
                    font-weight: 900;
                }
                ul {
                    color: #383d42;
                    font-size: 10px;
                    li {
                        margin-bottom: 10px;
                    }
                }
            }
        }
        @media screen and (min-width: 576px) {
            .row {
                &:nth-of-type(2) {
                    .col {
                        &:first-child {
                            border-left: 1px solid #dadae3;
                        }
                        &:last-child {
                            border-right: 1px solid #dadae3;
                        }
                    }
                }
            }
            
        }
        @media screen and (min-width: 768px) {
            padding-top: 50px;
            header {
                height: 60px;
                h2 {
                    font-size: 20px;
                }
            }
            .row {
                &:nth-of-type(2) {
                    .col {
                        padding-top: 50px;
                        height: 290px;
                    }
                    h3 {
                        margin-bottom: 20px;
                        font-size: 20px;
                    }
                    ul {
                        font-size: 12px;
                        li {
                            margin-bottom: 15px;
                        }
                    }
                }
            }
        }
        @media screen and (min-width: 1200px) {
            padding-top: 80px;
            header {
                height: 80px;
                h2 {
                    font-size: 24px;
                }
            }
            .row {
                &:nth-of-type(2) {
                    .col {
                        padding-top: 65px;
                        height: 380px;
                    }
                    h3 {
                        margin-bottom: 30px;
                        font-size: 24px;
                    }
                    ul {
                        font-size: 15px;
                        li {
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
    }
    .talent {
        padding-bottom: 20px;
        background-image: url('~@/assets/bg_talent.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        color: white;
        header {
            padding-top: 30px;
            margin-bottom: 20px;
            text-align: center;
            .section-title {
                margin-bottom: 5px;
            }
            p {
                font-size: 12px;
                font-weight: 300;
            }
        }
        .feature {
            position: relative;
            margin: 0 auto 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 240px;
            height: 240px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, .1);
            border-radius: 50%;
            background-color: #131619;
            h2 {
                margin-bottom: 15px;
                font-size: 18px;
                color: #2f74f5;
                font-weight: 900;
            }
            p {
                margin-bottom: 0;
                font-size: 12px;
                line-height: 2;
                font-weight: 300;
            }
        }
        @media screen and (min-width: 768px) {
            padding-bottom: 35px;
            header {
                padding-top: 45px;
                margin-bottom: 25px;
                .section-title {
                    margin-bottom: 10px;
                }
                p {
                    font-size: 13px;
                }
            }
            .feature {
                width: 260px;
                height: 260px;
                left: -20px;
                h2 {
                    margin-bottom: 20px;
                    font-size: 20px;
                }
                p {
                    font-size: 13px;
                }
            }
        }
        @media screen and (min-width: 1200px) {
            padding-bottom: 50px;
            header {
                padding-top: 60px;
                margin-bottom: 35px;
                .section-title {
                    margin-bottom: 20px;
                }
                p {
                    font-size: 15px;
                }
            }
            .feature {
                width: 360px;
                height: 360px;
                left: -50px;
                h2 {
                    margin-bottom: 25px;
                    font-size: 24px;
                }
                p {
                    font-size: 15px;
                }
            }
        }
        @media screen and (min-width: 1400px) {
            .feature {
                left: -30px;
            }
        }
    }
    .apply {
        .container {
            background-image: url('~@/assets/bg_building2.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50% 50%;
        }
        .row {
            height: 190px;
            a {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 40px;
                background: rgba(44, 46, 135, .9);
                color: white;
                text-decoration: none;
                margin-bottom: 10px;
                font-size: 15px;
                padding-left: 20px;
                padding-right: 20px;
                font-weight: bolder;
                span {
                    margin-right: auto;
                    font-size: 10px;
                    font-weight: 300;
                }
                i {
                    margin-left: 10px;
                }
            }
        }
        @media screen and (min-width: 576px) {
            .container {
                position: relative;
                border: 20px solid white;
            }
            .row {
                a {
                    margin-bottom: 0;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    flex-direction: column-reverse;
                    align-items: flex-start;
                    justify-content: center;
                    padding-left: 20px;
                    padding-right: 20px;
                    width: 180px;
                    height: 80px;
                    right: -20px;
                    background-color: rgb(44, 46, 135);
                    span {
                        font-size: 11px;
                    }
                }
            }
        }
        @media screen and (min-width: 768px) {
            .container {
                border: 40px solid white;
            }
            .row {
                height: 340px;
                a {
                    padding-left: 30px;
                    padding-right: 30px;
                    width: 250px;
                    height: 100px;
                    font-size: 20px;
                    right: -40px;
                    span {
                        font-size: 12px;
                        letter-spacing: 1px;
                    }
                }
            }
        }
        @media screen and (min-width: 1200px) {
            .container {
                border: 60px solid white;
            }
            .row {
                height: 480px;
                a {
                    padding-left: 50px;
                    padding-right: 50px;
                    width: 300px;
                    height: 150px;
                    font-size: 24px;
                    right: -60px;
                    span {
                        font-size: 15px;
                        letter-spacing: 1px;
                    }
                }
            }
        }
    }
}
</style>