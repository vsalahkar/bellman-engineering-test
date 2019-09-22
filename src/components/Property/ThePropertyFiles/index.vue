<template>
    <section class="thePropertyFiles">
        <header class="thePropertyFiles__header">
            <h1>247 Files</h1>
            <div class="thePropertyFiles__filterBar">
                <input type="text" placeholder="Search a file">
                <i class="fa fa-search"></i>
            </div>
        </header>
        <section class="thePropertyFiles__tabs">
            <ul class="tabs">
                <li class="tabs__tab">
                    <button href="">Accountancy <span>42</span></button>
                </li>
                <li class="tabs__tab">
                    <button href="">Accountancy <span>42</span></button>
                </li>
                <li class="tabs__tab">
                    <button href="">Accountancy <span>42</span></button>
                </li>
                <li class="tabs__tab">
                    <button href="">Accountancy <span>42</span></button>
                </li>
            </ul>
        </section>
        <main class="theProperty__filesList">
            <base-property-file
                    :file-name="file.fileName"
                    :file-description="file.fileDescription"
                    :file-status="file.fileStatus"
                    :file-update-time="file.fileUpdateTime"
                    v-for="file in filesList"
            />
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
    },
    data: () => {
        return {
            filesList: [
                {
                    fileName: 'Ravalement de façade',
                    fileDescription: 'Demande de devis envoyée à l\'architecte',
                    fileStatus: 'Open',
                    fileUpdateTime: '20/01/2019'
                },
                {
                    fileName: 'Ravalement de façade',
                    fileDescription: 'Demande de devis envoyée à l\'architecte',
                    fileStatus: 'Open',
                    fileUpdateTime: '20/01/2019'
                },
                {
                    fileName: 'Ravalement de façade',
                    fileDescription: 'Demande de devis envoyée à l\'architecte',
                    fileStatus: 'Open',
                    fileUpdateTime: '20/01/2019'
                },
                {
                    fileName: 'Ravalement de façade',
                    fileDescription: 'Demande de devis envoyée à l\'architecte',
                    fileStatus: 'Open',
                    fileUpdateTime: '20/01/2019'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../styles/variables";
    @import "../../../styles/base";

    .thePropertyFiles {
        background-color: $base-color-light-3;
        padding: 32px 24px;

        &__header {
            padding: 8px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h1 {
                font-family: 'Rubik', sans-serif;
                color: $base-color-dark;
                font-size: 24px;
                font-weight: bold;
            }
        }

        &__filterBar {
            position: relative;
            margin-bottom: 12px;

            input {
                border-radius: 1000px;
                background-color: $tertiary-color;
                max-width: 350px;
                flex: 1;
                padding: 10px 48px 10px 24px;
                color: $secondary-color;

                &:focus {
                    transition: background-color 0.1s ease-out;
                    background-color: darken($tertiary-color, 5);
                }
            }

            i {
                position: absolute;
                top: 50%;
                right: 24px;
                transform: translateY(-50%);
                color: $base-color-light-2;
            }
        }

        &__tabs {

        }

        .tabs {
            display: flex;
            padding: 16px 0;
            border-bottom: 1px solid transparentize($base-color-light-2, 0.7);

            &__tab {
                font-size: 14px;
                margin-right: 16px;

                button {
                    color: $base-color-light-2;
                }

                span {
                    margin-left: 4px;
                }
            }
        }

        &__filesList {

        }

        .footer {
            &__pages {

            }

            &__pagesNavigation {

            }
        }

        .pagesNavigation {
            &__previous {

            }

            &__next {

            }

            &__page {

            }
        }
    }

</style>
