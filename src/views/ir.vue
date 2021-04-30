<template>
    <div>
        <Header />
        <main id="main" class="ir">
            <section class="overview">
                <div class="container">
                    <div class="row">
                        <div class="col d-flex flex-column justify-content-center align-items-center">
                            <h1 class="section-title">INVESTOR RELATIONS<span>.</span></h1>
                            <p>
                                티사이언티픽 기업정보
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="tabs">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col col-lg-8 col-xl-7">
                            <ul class="nav nav-tabs nav-fill border-bottom-0" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="notice-tab" data-toggle="tab"
                                        data-target="#notice" type="button">공고사항</button>
                                </li>
                                <!-- <li class="nav-item" role="presentation">
                                <button class="nav-link" id="stock-tab" data-toggle="tab" data-target="#stock" type="button">주가정보</button>
                            </li> -->
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="finance-tab" data-toggle="tab"
                                        data-target="#finance" type="button">재무정보</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-content">
                <div class="tab-pane fade active show" id="notice">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col col-lg-8 col-xl-7">
                                <h2 class="text-center">공고사항</h2>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>날짜</th>
                                                <th>제목</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2021.03.31</td>
                                                <td><a href="#" onclick="window.open('http://dart.fss.or.kr/dsaf001/main.do?rcpNo=20210331002628', '_blank', 'width=1000, height=600'); return false;">[기재정정]사업보고서 (2020.12)</a></td>
                                            </tr>
                                            <tr>
                                                <td>2021.03.24</td>
                                                <td><a href="#" onclick="window.open('http://dart.fss.or.kr/dsaf001/main.do?rcpNo=20210324900751', '_blank', 'width=1000, height=600'); return false;">정기주주총회결과</a></td>
                                            </tr>
                                            <tr>
                                                <td>2021.03.19</td>
                                                <td><a href="#" onclick="window.open('http://dart.fss.or.kr/dsaf001/main.do?rcpNo=20210319901702', '_blank', 'width=1000, height=600'); return false;">증권발행결과(자율공시)</a></td>
                                            </tr>
                                            <tr>
                                                <td>2021.03.16</td>
                                                <td><a href="#" onclick="window.open('http://dart.fss.or.kr/dsaf001/main.do?rcpNo=20210316902069', '_blank', 'width=1000, height=600'); return false;">감사보고서제출</a></td>
                                            </tr>
                                            <tr>
                                                <td>2021.03.11</td>
                                                <td><a href="#" onclick="window.open('http://dart.fss.or.kr/dsaf001/main.do?rcpNo=20210311901373', '_blank', 'width=1000, height=600'); return false;">[기재정정]매출액또는손익구조30%(대규모법인은15%)이상변동</a></td>
                                            </tr>
                                            <tr>
                                                <td>2021.03.10</td>
                                                <td><a href="#" onclick="window.open('http://dart.fss.or.kr/dsaf001/main.do?rcpNo=20210310001236', '_blank', 'width=1000, height=600'); return false;">[기재정정]사업보고서 (2019.12)</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="stock">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col col-lg-8 col-xl-7">
                                <h2 class="text-center">티사이언티픽(057580)</h2>
                                <div class="d-flex justify-content-between align-items-center info-1">
                                    <div class="price">
                                        3,500<span>원</span>
                                    </div>
                                    <div class="d-flex compare">
                                        <dl class="d-flex mb-0">
                                            <dt>전일대비</dt>
                                            <dd class="mb-0"><i class="bi bi-caret-up-fill"></i>1,024</dd>
                                        </dl>
                                        <dl class="d-flex mb-0">
                                            <dt>등락률</dt>
                                            <dd class="mb-0"><i class="bi bi-caret-down-fill"></i>0.42%</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="table-responsive info-2">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>시가</th>
                                                <th>고가</th>
                                                <th>저가</th>
                                                <th>거래량</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>3,040</td>
                                                <td>3,040</td>
                                                <td>3,040</td>
                                                <td>3,040</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table-responsive info-3">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th>전일가</th>
                                                <td>3,500</td>
                                                <th>전일거래량</th>
                                                <td>3,500,000</td>
                                            </tr>
                                            <tr>
                                                <th>상한가</th>
                                                <td>3,500</td>
                                                <th>하한가</th>
                                                <td>3,500</td>
                                            </tr>
                                            <tr>
                                                <th>52주 최고</th>
                                                <td>3,500</td>
                                                <th>52주 최저</th>
                                                <td>3,500</td>
                                            </tr>

                                            <tr>
                                                <th>액면가</th>
                                                <td>3,500</td>
                                                <th>PER</th>
                                                <td>67.78</td>
                                            </tr>
                                            <tr>
                                                <th>상장일</th>
                                                <td>2002.06.18.</td>
                                                <th>상장주식수</th>
                                                <td>47,004,217</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="finance">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col col-lg-8 col-xl-7">
                                <h2 class="text-center">요약재무재표</h2>
                                <div class="table-responsive">
                                    <table class="table details">
                                        <thead>
                                            <tr>
                                                <th>과목</th>
                                                <th>제23기 (2020년)</th>
                                                <th>제22기 (2019년)</th>
                                                <th>제21기 (2018년)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Ⅰ. 유동자산</th>
                                                <td>28,840</td>
                                                <td>13,707</td>
                                                <td>45,371</td>
                                            </tr>
                                            <tr>
                                                <th class="pl-4 pr-1">당좌자산</th>
                                                <td>28,840</td>
                                                <td>13,707</td>
                                                <td>45,367</td>
                                            </tr>
                                            <tr>
                                                <th class="pl-4 pr-1">재고자산</th>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                <th>Ⅱ. 비유동자산</th>
                                                <td>79,876</td>
                                                <td>64,311</td>
                                                <td>25,014</td>
                                            </tr>
                                            <tr>
                                                <th class="pl-4 pr-1">투자자산</th>
                                                <td>78,031</td>
                                                <td>62,572</td>
                                                <td>23,408</td>
                                            </tr>
                                            <tr>
                                                <th class="pl-4 pr-1">유형자산</th>
                                                <td>467</td>
                                                <td>242</td>
                                                <td>245</td>
                                            </tr>
                                            <tr>
                                                <th class="pl-4 pr-1">사용권자산</th>
                                                <td>153</td>
                                                <td>57</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th class="pl-4 pr-1">무형자산</th>
                                                <td>373</td>
                                                <td>588</td>
                                                <td>649</td>
                                            </tr>
                                            <tr class="before-total">
                                                <th class="pl-4 pr-1">기타 비유동자산</th>
                                                <td>853</td>
                                                <td>853</td>
                                                <td>712</td>
                                            </tr>
                                            <tr>
                                                <th>자산총계</th>
                                                <td>108,716</td>
                                                <td>78,018</td>
                                                <td>70,385</td>
                                            <tr>
                                                <th>Ⅰ. 유동부채</th>
                                                <td>15,775</td>
                                                <td>23,353</td>
                                                <td>38,537</td>
                                            </tr>
                                            <tr class="before-total">
                                                <th>Ⅱ. 비유동부채</th>
                                                <td>9,240</td>
                                                <td>380</td>
                                                <td>219</td>
                                            </tr>
                                            <tr class="total">
                                                <th>부채총계</th>
                                                <td>25,015</td>
                                                <td>23,732</td>
                                                <td>38,756</td>
                                            </tr>
                                            <tr>
                                                <th>Ⅰ. 자본금</th>
                                                <td>23,413</td>
                                                <td>20,247</td>
                                                <td>16,849</td>
                                            </tr>
                                            <tr>
                                                <th>Ⅱ. 자본잉여금</th>
                                                <td>43,251</td>
                                                <td>38,008</td>
                                                <td>33,994</td>
                                            </tr>
                                            <tr>
                                                <th>Ⅲ. 자본조정</th>
                                                <td>(81)</td>
                                                <td>(31)</td>
                                                <td>(31)</td>
                                            </tr>
                                            <tr>
                                                <th>Ⅳ. 기타포괄손익누계액</th>
                                                <td>30,649</td>
                                                <td>10,278</td>
                                                <td>279</td>
                                            </tr>
                                            <tr class="before-total">
                                                <th>Ⅴ. 이익잉여금</th>
                                                <td>(13,531)</td>
                                                <td>(14,217)</td>
                                                <td>(19,463)</td>
                                            </tr>
                                            <tr class="before-total">
                                                <th>자본총계</th>
                                                <td>83,702</td>
                                                <td>54,285</td>
                                                <td>31,629</td>
                                            </tr>
                                            <tr>
                                                <th>부채와 자본 총계</th>
                                                <td>108,716</td>
                                                <td>78,018</td>
                                                <td>70,385</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table summary">
                                        <tbody>
                                            <tr>
                                                <th>매출액</th>
                                                <td>9,519</td>
                                                <td>7,690</td>
                                                <td>5,214</td>
                                            </tr>
                                            <tr>
                                                <th>영업이익</th>
                                                <td>725</td>
                                                <td>2,031</td>
                                                <td>(1,411)</td>
                                            </tr>
                                            <tr>
                                                <th>법인세비용차감전<br>계속사업이익</th>
                                                <td>(683)</td>
                                                <td>1,953</td>
                                                <td>2,462</td>
                                            </tr>
                                            <tr>
                                                <th>당기순이익</th>
                                                <td>652</td>
                                                <td>5,290</td>
                                                <td>2,339</td>
                                            </tr>
                                            <tr>
                                                <th>기본주당손익</th>
                                                <td>16</td>
                                                <td>151</td>
                                                <td>83</td>
                                            </tr>
                                            <tr>
                                                <th>희석주당손익 </th>
                                                <td>16</td>
                                                <td>147</td>
                                                <td>83</td>
                                            </tr>
                                        </tbody>
                                    </table>
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

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
#main.ir {
    .overview {
        background-image: url('~@/assets/bg_ir.jpg');
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
            .container {
                background-image: url('~@/assets/bg_logo_transparent.png');
                background-repeat: no-repeat;
                background-position: 100% 100%;
                background-size: auto 100%;
            }
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
    .tabs {
        background: rgb(44,46,135);
        background: linear-gradient(90deg, rgba(44,46,135,1) 0%, rgba(47,116,245,1) 100%);
        color: white;
        height: 45px;
        .nav {
            .nav-item {
                .nav-link {
                    padding: 0;
                    border: 0;
                    color: rgba(255, 255, 255, .4);
                    width: 100%;
                    height: 45px;
                    border-radius: 0;
                    border-bottom: 2px solid transparent;
                    font-size: 12px;
                    background-color: transparent;
                    &.active {
                        margin: 0;
                        background-color: transparent;
                        border-bottom: 2px solid white;
                        color: white;
                    }
                }
            }
        }
        @media screen and (min-width: 768px) {
            height: 55px;
            .nav {
                .nav-item {
                    .nav-link {
                        height: 55px;
                        font-size: 13px;
                    }
                }
            }
        }
        @media screen and (min-width: 1200px) {
            height: 60px;
            .nav {
                .nav-item {
                    .nav-link {
                        height: 60px;
                        font-size: 15px;
                    }
                }
            }
        }
    }
    #notice {
        padding-top: 25px;
        h2 {
            margin-bottom: 20px;
            font-size: 15px;
            color: #383d42;
            font-weight: 800;
        }
        .table {
            margin-bottom: 25px;
            border-top: 2px solid black;
            th, td {
                font-size: 12px;
                height: 40px;
                vertical-align: middle;
                a {
                    font-size: 12px;
                }
            }
            td {
                &:nth-of-type(1) {
                    color: #888d96;
                }
                &:nth-of-type(2) {
                    a {
                        color: #383d42;
                        text-decoration: none;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
                &:nth-of-type(3) {
                    min-width: 50px;
                    max-width: 60px;
                }
            }
        }
        .pagination {
            margin-bottom: 50px;
            .page-item {
                .page-link {
                    border-radius: 0;
                    border: 0;
                    color: #d6d6e2;
                    font-size: 12px;
                    background-color: transparent;
                    font-weight: 700;
                }
                &.active {
                    .page-link {
                        color: #2f74f5;
                        background-color: transparent;
                    }
                }
            }
        }
        @media screen and (min-width: 768px) {
            padding-top: 45px;
            h2 {
                margin-bottom: 30px;
                font-size: 18px;
            }
            .table {
                margin-bottom: 35px;
                th, td {
                    height: 50px;
                    font-size: 13px;
                    a {
                        font-size: 13px;
                    }
                }
            }
            .pagination {
                margin-bottom: 75px;
                .page-item {
                    .page-link {
                        font-size: 13px;
                    }
                }
            }
        }
        @media screen and (min-width: 1200px) {
            padding-top: 60px;
            h2 {
                margin-bottom: 40px;
                font-size: 20px;
            }
            .table {
                margin-bottom: 45px;
                th, td {
                    height: 60px;
                    font-size: 15px;
                    a {
                        font-size: 15px;
                    }
                }
            }
            .pagination {
                margin-bottom: 95px;
                .page-item {
                    .page-link {
                        font-size: 15px;
                    }
                }
            }
        }
    }
    #stock {
        padding-top: 25px;
        h2 {
            margin-bottom: 20px;
            font-size: 15px;
            color: #383d42;
            font-weight: 800;
        }
        .table {
            border-top: 1px solid black;
            th, td {
                font-size: 10px;
                height: 20px;
                width: 25%;
                color: #383d42;
            }
            th {
                background: #eee;
            }
        }
        .info-1 {
            margin-bottom: 10px;
            .price {
                font-size: 24px;
                font-weight: 800;
                span {
                    font-size: 10px;
                }
            }
            .compare {
                font-size: 10px;
                dl {
                    margin-left: 15px;
                    dt {
                        margin-right: 5px;
                    }
                }
                .bi-caret-up-fill {
                    color: #ff4704;
                }
                .bi-caret-down-fill {
                    color: rgb(44, 46, 135);
                }
            }
        }
        .info-2 {
            margin-bottom: 10px;
            .table {
                text-align: center;
                thead {
                    th {
                        border-bottom: 0;
                    }
                }
            }
        }
        .info-3 {
            margin-bottom: 50px;
            .table {
                td {
                    text-align: right;
                    color: #686868;
                }
            }
        }
        @media screen and (min-width: 768px) {
            padding-top: 45px;
            h2 {
                margin-bottom: 30px;
                font-size: 18px;
            }
            .table {
                th, td {
                    font-size: 12px;
                    height: 28px;
                }
            }
            .info-1 {
                margin-bottom: 15px;
                .price {
                    font-size: 30px;
                    span {
                        font-size: 12px;
                    }
                }
                .compare {
                    font-size: 12px;
                }
            }
            .info-2 {
                margin-bottom: 20px;
            }    
            .info-3 {
                margin-bottom: 70px;
            }
        }
        @media screen and (min-width: 1200px) {
            padding-top: 60px;
            h2 {
                margin-bottom: 40px;
                font-size: 20px;
            }
            .table {
                th, td {
                    font-size: 14px;
                    height: 35px;
                }
            }
            .info-1 {
                margin-bottom: 20px;
                .price {
                    font-size: 36px;
                    span {
                        font-size: 14px;
                    }
                }
                .compare {
                    font-size: 14px;
                }
            }
            .info-2 {
                margin-bottom: 30px;
            }
            .info-3 {
                margin-bottom: 90px;
            }
        }
    }
    #finance {
        padding-top: 25px;
        h2 {
            margin-bottom: 25px;
            font-size: 15px;
            font-weight: 700;
        }
        .table {
            min-width: 500px;
            border-top: 2px solid #383d42;
            th, td {
                height: 20px;
                font-size: 10px;
                border-bottom: 1px solid #e1e1e1;
            }
            th {
                width: 25%;
                color: #2b2b2b;
            }
            td {
                color: #686868;
                text-align: right;
                font-size: 10px;
                font-weight: 300;
            }
            thead {
                th {
                    background-color: #eee;
                    text-align: center;
                }
            }
            tbody {
                th {
                    background-color: #f2f2f2;
                    font-weight: 300;
                }
                // .total {
                //     th, td {
                //         border-top: 2px solid #383d42;
                //         border-bottom: 1px solid #383d42;
                //     }
                // }
                .before-total {
                    th, td {
                        border-bottom: 1px solid #383d42;
                    }
                    & + tr {
                        th, td {
                            border-bottom: 1px solid #383d42;
                        }
                        th {
                            text-align: center;
                            font-weight: 600;
                        }
                        td {
                            color: #222;
                            font-weight: 600;
                            background-color: #f6f6f6;
                        }
                    }
                }
            }
        }
        .details {
            margin-bottom: 20px;
        }
        .summary {
            margin-bottom: 50px;
            border-top: 1px solid #383d42;
            th {
                text-align: right;
            }
            tr:last-child {
                th, td {
                    border-bottom: 1px solid #383d42;
                }
            }
        }
        @media screen and (min-width: 768px) {
            padding-top: 45px;
            h2 {
                font-size: 18px;
                margin-bottom: 30px;
            }
            .table {
                th, td {
                    height: 28px;
                    font-size: 12px;
                }
            }
            .details {
                margin-bottom: 25px;
            }
            .summary {
                margin-bottom: 70px;
            }
        }
        @media screen and (min-width: 1200px) {
            padding-top: 60px;
            h2 {
                font-size: 20px;
                margin-bottom: 35px;
            }
            .table {
                th, td {
                    height: 35px;
                    font-size: 14px;
                }
            }
            .details {
                margin-bottom: 30px;
            }
            .summary {
                margin-bottom: 90px;
            }
        }
    }
}
</style>