<template>
    <div id="app">
        <the-navigation></the-navigation>
        <main class="app__main property">
            <section class="property__management">
                <the-property-files></the-property-files>
                <the-property-contracts></the-property-contracts>
                <the-property-coowners></the-property-coowners>
            </section>
            <aside class="property__information">
                <the-property-basic-information></the-property-basic-information>
                <the-property-requests></the-property-requests>
                <the-property-rules></the-property-rules>
            </aside>
        </main>
    </div>
</template>

<script>
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
    }
}
</script>

<style>
</style>
