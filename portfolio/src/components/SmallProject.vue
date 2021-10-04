<template>
    <div class="full-project">
        <h2>{{Project.name}}</h2>
        <div class="info">
            <PortalProj v-if="Project.includePortalProj"/>
            <img v-else :src="'assets/img/' + Project.img">
            <div class="info-text">
                <p v-html="Project.info"></p>
                <a :href="Project.link" target="_blank">Link to project</a>
            </div>
        </div>
    </div>
</template>

<script>
import PortalProj from '@/components/PortalProject.vue';

export default {
    components:{
        PortalProj
    },
    props:{
        Project: Object
    }
}
</script>

<style>
</style>
