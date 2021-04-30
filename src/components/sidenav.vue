<template>
    <div class="modal fade" id="gnb-menu" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-body">
                    <button class="btn btn-close-gnb border-0 p-0" data-dismiss="modal"><img src="@/assets/ico_close.svg"></button>
                    <ul class="list-unstyled">
                        <li><router-link to="/company" data-dismiss="modal">COMPANY</router-link></li>
                        <li><router-link to="/business" data-dismiss="modal">BUSINESS</router-link></li>
                        <li><router-link to="/ir" data-dismiss="modal">IR</router-link></li>
                        <li><router-link to="/career" data-dismiss="modal">CAREER</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#gnb-menu {
    &.fade {
        .modal-dialog {
            transform: translate(-50px, 0);
        }
    }
    &.show {
        .modal-dialog {
            transform: none;
        }
    }
    .modal-fullscreen {
        margin: 0;
        width: 75vw;
    }
    .modal-content {
        background-color: black;
        background-image: url('~@/assets/bg_logo_blue.png');
        background-repeat: no-repeat;
        background-size: 50% auto;
        background-position: 100% 100%;
    }
    .modal-body {
        padding-right: .75rem!important;
        padding-left: .75rem!important;
        .btn-close-gnb {
            margin-top: 5px;
            img {
                width: 18px;
            }
        }
        ul {
            margin-left: 10px;
            margin-top: 10vh;
            a {
                color: white;
                text-decoration: none;
                font-size: 20px;
                font-weight: 500;
                font-family: 'GmarketSans', sans-serif !important;
            }
            li + li {
                margin-top: 20px;
            }
        }
    }
}
</style>