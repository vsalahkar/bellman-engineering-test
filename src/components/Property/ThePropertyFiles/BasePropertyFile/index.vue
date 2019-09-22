<template>
    <div class="basePropertyFile">
        <div class="basePropertyFile__icon" :class="`basePropertyFile__icon${getFileType(fileType)}`">
            <i class="fa fa-shield-alt"></i>
        </div>
        <div class="basePropertyFile__name">
            <h1 class="basePropertyFile__fileName">{{fileName}}</h1>
            <h2 class="basePropertyF__description">{{fileDescription}}</h2>
        </div>
        <div class="basePropertyFile__updates">
            <div class="basePropertyFile__status">{{fileStatus}}</div>
            <div class="basePropertyFile__time">{{fileUpdateTime}}</div>
        </div>
    </div>
</template>

<script>
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
                default:
                    return '--isSmallWork'
            }
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

        &__icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;

            &--isWork {
                background-color: $taking-action-1;
            }

            &--isSmallWork {
                background-color: $taking-action-2;
            }

            &--isGeneralMeeting {
                background-color: $primary-color;
            }
        }

        &__name {
        }

        &__fileName {
            font-size: 16px;
        }

        &__description {
            font-size: 15px;
        }

        &__updates {

        }

        &__time {

        }
    }
</style>
