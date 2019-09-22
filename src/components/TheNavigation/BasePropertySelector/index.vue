<template>
    <button class="propertySelector">
        <span class="propertySelector__label">Property X</span>
        <i class="propertySelector__icon fa fa-chevron-down"></i>
    </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    @import "../../../styles/variables";
    @import "../../../styles/base";

    .propertySelector {
        padding: 14px 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid transparentize($base-color-light-2, 0.7);

        &:hover {
            transition: border-bottom-color 0.3s ease-out;
            border-bottom-color: transparentize($base-color-light-2, 0.2);
        }

        &__label {
            font-size: 18px;
            color: $secondary-color;
        }

        &__icon {
            font-size: 13px;
            color: $primary-color;
        }
    }
</style>
