<template>
    <div class="full-project actual-project">
        <h2>{{Project.name}}</h2>
        <div class="info">
            <div v-if="Project.imgAlt" v-html="Project.imgAlt">
			<img v-else :src="'assets/img/' + Project.img">
            <div class="info-text">
                <p v-html="Project.info"></p>
                <a :href="Project.link" target="_blank">{{Project.linkText}}</a>
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
