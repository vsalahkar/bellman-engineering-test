<template>
    <nav class="theNavigation">
        <section class="theNavigation__actions">
            <header class="theNavigation__header"><img src="" alt=""></header>
            <base-property-selector></base-property-selector>
            <ul class="theNavigation__pages">
                <li class="theNavigation__page">
                    <a href="">
                        <i></i>
                        <span></span>
                    </a>
                </li>
            </ul>
        </section>
        <footer>
            <ul class="theNavigation__contact-links">
                <li class="theNavigation__contact-link"></li>
            </ul>
        </footer>
    </nav>
</template>

<script>
import BasePropertySelector from './BasePropertySelector'

export default {
    components: {
        BasePropertySelector
    }
}
</script>

<style lang="scss" scoped>

</style>
