<template>
    <nav class="theNavigation">
        <section class="theNavigation__actions">
            <header class="theNavigation__header">
                <img src="../../assets/bellman-logo.svg" alt="">
            </header>
            <base-property-selector></base-property-selector>
            <ul class="theNavigation__pages">
                <li v-for="page in pages" :key="page.label" class="theNavigation__page">
                    <a href="#">
                        <i :class="page.icon"></i>
                        <span>{{page.label}}</span>
                    </a>
                </li>
            </ul>
        </section>
        <footer>
            <ul class="theNavigation__contactLinks">
                <li class="theNavigation__contactLink"><a href="">Contact</a></li>
                <li class="theNavigation__contactLink"><a href="">Terms of service</a></li>
                <li class="theNavigation__contactLink"><a href="">Legal stuff</a></li>
            </ul>
        </footer>
    </nav>
</template>

<script>
import BasePropertySelector from './BasePropertySelector'

export default {
    components: {
        BasePropertySelector
    },
    data: () => {
        return {
            pages: [
                {
                    label: 'Homepage',
                    icon: 'fa fa-desktop'
                },
                {
                    label: 'My property',
                    icon: 'fa fa-home'
                },
                {
                    label: 'Accountancy',
                    icon: 'fa fa-desktop'
                },
                {
                    label: 'Preferences',
                    icon: 'fa fa-desktop'
                },
                {
                    label: 'Help',
                    icon: 'fa fa-desktop'
                },
            ]

        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../styles/variables";
    @import "../../styles/base";

    .theNavigation {
        padding: 48px 0;
        max-width: 205px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &__actions {

        }

        &__header {
            margin-bottom: 50px;

            img {
                width: 100%;
            }
        }

        &__pages {
            display: flex;
            flex-direction: column;
            padding: 24px 0;
        }

        &__page {
            padding: 8px 0;

            a {
                color: $base-color-dark;
            }

            span {
                margin-left: 14px;
                font-size: 15px;
                text-transform: uppercase;
                font-family: 'Rubik', sans-serif;
            }
        }

        &__contactLink a {
            font-size: 13px;
            padding: 4px 0;
            color: $base-color-light-2;
        }
    }
</style>
