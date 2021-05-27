<template>
    <div id="app">
        <SideNav />
        <router-view />
    </div>
</template>

<script>
import SideNav from '@/components/sidenav'

export default {
    components: {
        SideNav
    }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css");

@font-face {
    font-family: 'GmarketSans'; //Medium
    src: url('~@/assets/fonts/GmarketSansMedium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'GmarketSans'; //Bold
    src: url('~@/assets/fonts/GmarketSansBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'GmarketSans'; //Light
    src: url('~@/assets/fonts/GmarketSansLight.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'S-CoreDream'; //9Black
    src: url('~@/assets/fonts/S-CoreDream-9Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'S-CoreDream'; //8Heavy
    src: url('~@/assets/fonts/S-CoreDream-8Heavy.woff') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'S-CoreDream'; //7ExtraBold
    src: url('~@/assets/fonts/S-CoreDream-7ExtraBold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'S-CoreDream'; //6Bold
    src: url('~@/assets/fonts/S-CoreDream-6Bold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'S-CoreDream'; //5Medium
    src: url('~@/assets/fonts/S-CoreDream-5Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'S-CoreDream'; //4Regular
    src: url('~@/assets/fonts/S-CoreDream-4Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'S-CoreDream'; //3Light
    src: url('~@/assets/fonts/S-CoreDream-3Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'S-CoreDream'; //2ExtraLight
    src: url('~@/assets/fonts/S-CoreDream-2ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'S-CoreDream'; //1Thin
    src: url('~@/assets/fonts/S-CoreDream-1Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'InfinitySans'; //RegularA1
    src: url('~@/assets/fonts/InfinitySans-RegularA1.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@keyframes progressbar {
    0% { width: 0; }
    85% { width: 100%; }
    100% { width: 100%; }
}

@font-face {
    font-family: 'ROEHOE-CHAN';
    src: url('~@/assets/fonts/ROEHOE-CHAN.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
    font-family: 'S-CoreDream', 'GmarketSans', sans-serif;
    font-weight: 500;
}

.section-title {
    margin-bottom: 0;
    font-weight: 800;
    font-size: 24px;
    span {
        color: #2f74f5;
    }
    @media screen and (min-width: 768px) {
        font-size: 29px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 36px;
    }
}

</style>