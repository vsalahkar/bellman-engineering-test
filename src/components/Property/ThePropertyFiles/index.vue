<template>
    <section class="thePropertyFiles">
        <header class="thePropertyFiles__header">
            <h1>247 Files</h1>
            <div class="thePropertyFiles__filterBar">
                <input type="text">
                <i></i>
            </div>
        </header>
        <section class="thePropertyFiles__tabs">
            <ul class="tabs">
                <li class="tabs__tab"><a href="">Accountancy <span>42</span></a></li>
                <li class="tabs__tab"><a href="">Accountancy <span>42</span></a></li>
                <li class="tabs__tab"><a href="">Accountancy <span>42</span></a></li>
                <li class="tabs__tab"><a href="">Accountancy <span>42</span></a></li>
            </ul>
        </section>
        <main class="theProperty__filesList">
            <base-property-file></base-property-file>
        </main>
        <footer>
            <div class="footer__pages"></div>
            <div class="footer__pagesNavigation">
                <button class="pagesNavigation__previous"></button>
                <ul class="pagesNavigation__pages">
                    <li class="pagesNavigation__page">1</li>
                    <li class="pagesNavigation__page">1</li>
                    <li class="pagesNavigation__page">1</li>
                    <li class="pagesNavigation__page">1</li>
                </ul>
                <button class="pagesNavigation__next"></button>
            </div>
        </footer>
    </section>
</template>

<script>
import BasePropertyFile from './BasePropertyFile'

export default {
    components: {
        BasePropertyFile
    }
}
</script>

<style scoped>

</style>
