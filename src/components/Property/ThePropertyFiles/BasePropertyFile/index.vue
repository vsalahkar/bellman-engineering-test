<template>
    <div class="basePropertyFile">
        <div class="basePropertyFile__icon" :class="`basePropertyFile__icon${getFileType(fileType)}`">
            <i class="fa fa-shield-alt"></i>
        </div>
        <div class="basePropertyFile__name">
            <h1 class="basePropertyFile__fileName">{{fileName}}</h1>
            <h2 class="basePropertyFile__description">{{fileDescription}}</h2>
        </div>
        <div class="basePropertyFile__updates">
            <div class="basePropertyFile__status" :class="`basePropertyFile__status${getFileStatusColor}`">{{fileStatusLowerCased}}</div>
            <div class="basePropertyFile__time">Last activity on {{fileUpdateTimeFormatted}}</div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        fileName: {
            type: String,
            required: true,
        },
        fileDescription: {
            type: String,
            required: true,
        },
        fileStatus: {
            type: String,
            required: true,
        },
        fileUpdateTime: {
            type: String,
            required: true,
        },
        fileType: {
            type: String,
            required: true,
        },
    },
    methods: {
        getFileType(type) {
            switch (type) {
                case 'WORK':
                    return '--isWork'
                case 'GENERAL_MEETING':
                    return '--isGeneralMeeting'
                case 'ELEVATOR':
                    return '--isElevator'
                default:
                    return '--isSmallWork'
            }
        }
    },
    computed: {
        fileStatusLowerCased() {
            return this.fileStatus.toLowerCase()
        },
        getFileStatusColor() {
            return this.fileStatusLowerCased === 'open' ? '--isOpen' : '--isClosed'
        },
        fileUpdateTimeFormatted() {
            return moment(this.fileUpdateTime).format('DD/MM/YYYY')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../../../styles/variables";
    @import "../../../../styles/base";

    .basePropertyFile {
        display: flex;
        align-items: center;
        padding: 8px 0;
        margin-bottom: 16px;

        &__icon {
            border-radius: 100%;
            flex-shrink: 0;
            align-self: flex-start;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;

            i {
                color: $base-color-light-3;
            }

            &--isWork {
                background-color: $taking-action-1;
            }

            &--isSmallWork {
                background-color: $taking-action-2;
            }

            &--isGeneralMeeting {
                background-color: $primary-color;
            }

            &--isElevator {
                background-color: $tertiary-color;

                i {
                    color: $base-color-light-2;
                }
            }
        }

        &__name {
            flex: 1;
            padding: 0 12px;
        }

        &__fileName {
            font-size: 16px;
        }

        &__description {
            font-size: 15px;
            color: $base-color-light-2;
            font-weight: normal;
        }

        &__updates {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        &__status,
        &__time {
            text-align: right;
        }

        &__status {
            font-size: 14px;
            font-weight: bold;
            text-transform: capitalize;

            &--isOpen {
                color: $taking-action-3;
            }

            &--isClosed {
                color: transparentize($secondary-color, 0.3);
            }
        }

        &__time {
            font-size: 12px;
            color: $base-color-light-2;
        }
    }
</style>
