<template>
    <section class="thePropertyFiles">
        <header class="thePropertyFiles__header">
            <h1>{{numberOfFiles}} Files</h1>
            <div class="thePropertyFiles__filterBar">
                <input type="text" placeholder="Search a file" v-model="searchText">
                <i class="fa fa-search"></i>
            </div>
        </header>
        <section class="thePropertyFiles__tabs">
            <ul class="tabs">
                <li class="tabs__tab" :class="{'tabs__tab--isSelected' : filesFulterNormalized === filter.label}"
                    v-for="filter in filters" :key="filter.label">
                    <button @click.prevent="selectFilter(filter.label)">{{filter.label}} <span>{{filter.count}}</span>
                    </button>
                </li>
            </ul>
        </section>
        <main class="theProperty__filesList">
            <base-property-file
                    :file-name="file.title"
                    :file-description="file.lastActivity"
                    :file-status="file.status"
                    :file-update-time="file.lastActivityDate"
                    :file-type="file.type"
                    v-for="(file, index) in filesFiltered"
                    :key="`${file.fileName}_${index}`"
            />
        </main>
        <footer>
            <div class="footer__pages"></div>
            <div class="footer__pagesNavigation">
                <button class="pagesNavigation__previous"></button>
                <ul class="pagesNavigation__pages">
                    <!--                    <li class="pagesNavigation__page">1</li>-->
                    <!--                    <li class="pagesNavigation__page">1</li>-->
                    <!--                    <li class="pagesNavigation__page">1</li>-->
                    <!--                    <li class="pagesNavigation__page">1</li>-->
                </ul>
                <button class="pagesNavigation__next"></button>
            </div>
        </footer>
    </section>
</template>

<script>
import axios from 'axios'
import {countBy, map} from 'lodash'

import configuration from '../../../../configuration'

import BasePropertyFile from './BasePropertyFile'

export default {
    components: {
        BasePropertyFile
    },
    data: () => {
        return {
            files: [],
            searchText: '',
            filesFiter: '',
        }
    },
    props: {
        propertyId: {
            type: String,
            required: true,
            default: '',
        }
    },
    mounted() {
        this.getFile()
    },
    methods: {
        async getFile() {
            try {
                const response = await axios({
                    method: 'get',
                    url: `${configuration.backEndUrl}/property/${this.propertyId}/file`
                })

                this.files = response.data
            } catch (err) {
                console.error('Files cannot be fetched')
            }
        },
        selectFilter(filterLabel) {
            const cleanFileFilter = filterLabel.toUpperCase().replace(' ', '_')

            if (this.filesFiter === cleanFileFilter) {
                this.filesFiter = ''
            } else {
                this.filesFiter = cleanFileFilter
            }
        }
    },
    computed: {
        numberOfFiles() {
            return this.files.length
        },
        filters() {
            const temporaryObject = countBy(this.files, 'type')
            const cleanFilters = map(temporaryObject, (count, label) => ({
                label: label.toLowerCase().replace('_', ' '),
                count
            }))

            return cleanFilters
        },
        filteredList() {
            const inputValue = this.searchText.toLowerCase()

            return this.files.filter(file => {
                const includeRoomName = file.title.toLowerCase().includes(inputValue)

                return includeRoomName
            })
        },
        filesFiltered() {
            if (this.filesFiter === '') {
                return this.filteredList
            }

            return this.filteredList.filter(file => file.type === this.filesFiter)
        },
        filesFulterNormalized() {
            return this.filesFiter.toLowerCase().replace('_', ' ')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../styles/variables";
    @import "../../../styles/base";

    .thePropertyFiles {
        box-shadow: 0px 4px 20px #4D5E711A;
        border-radius: 4px;
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
                border: 1px solid transparent;
                background-color: $tertiary-color;
                max-width: 350px;
                flex: 1;
                padding: 10px 48px 10px 24px;
                color: $secondary-color;

                &:focus {
                    border-color: $taking-action-1;
                    transition: background-color 0.1s ease-out;
                    background-color: darken($tertiary-color, 1);
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
            border-bottom: 1px solid transparentize($base-color-light-2, 0.7);
            padding: 16px 0;
            display: flex;

            &__tab {
                margin-right: 16px;
                font-size: 14px;

                button {
                    text-transform: capitalize;
                    color: $base-color-light-2;
                    white-space: nowrap;
                }

                span {
                    margin-left: 4px;
                }

                &--isSelected button {
                    color: $secondary-color;
                    border-bottom: 1px solid $secondary-color;
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
