<template>
    <section class="bellman">
        <div class="bellman__navigation">
            <the-navigation></the-navigation>
        </div>
        <main class="app__main property">
            <section class="property__management">
                <the-property-files v-if="state.selectedPropertyId" :propertyId="state.selectedPropertyId"></the-property-files>
                <the-property-contracts></the-property-contracts>
                <the-property-coowners></the-property-coowners>
            </section>
            <aside class="property__information">
                <the-property-basic-information></the-property-basic-information>
                <the-property-requests></the-property-requests>
                <the-property-rules></the-property-rules>
            </aside>
        </main>
    </section>
</template>

<script>
import axios from 'axios'
import Configuration from '../configuration'

import TheNavigation from './components/TheNavigation'

import ThePropertyFiles from './components/Property/ThePropertyFiles'
import ThePropertyContracts from './components/Property/ThePropertyContracts'
import ThePropertyCoowners from './components/Property/ThePropertyCoowners'

import ThePropertyBasicInformation from './components/Property/ThePropertyBasicInformation'
import ThePropertyRequests from './components/Property/ThePropertyRequests'
import ThePropertyRules from './components/Property/ThePropertyRules'

export default {
    name: 'app',
    components: {
        TheNavigation,
        ThePropertyFiles,
        ThePropertyContracts,
        ThePropertyCoowners,
        ThePropertyBasicInformation,
        ThePropertyRequests,
        ThePropertyRules
    },
    mounted() {
        this.fetchProperties()
    },
    data: () => {
        return {
            state: {
                properties: [],
                selectedPropertyId: null
            }
        }
    },
    methods: {
        async fetchProperties() {
            try {
                const response = await axios.get(`${Configuration.backEndUrl}/property`)

                this.state.properties = response.data
                this.state.selectedPropertyId = this.state.properties[0].id
            } catch (err) {
                console.error('Properties cannot be fetched')
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    @import "./styles/variables";
    @import "./styles/base";

    .bellman {
        height: 100vh;
        display: flex;

        &__navigation {
            padding: 0 40px;
            display: flex;
            justify-content: center;
            flex: 4;
            height: 100%;
        }
    }

    .property {
        flex: 16;
        display: flex;
        overflow: auto;

        &__management,
        &__information {
            padding: 48px 0;
        }

        &__management {
            flex: 9;
        }

        &__information {
            flex: 5;
        }
    }
</style>
