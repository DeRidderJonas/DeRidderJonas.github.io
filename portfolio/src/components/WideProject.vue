<template>
    <div class="full-project" style="height: 430px">
        <img src="assets/img/GroupProjectSignature.png" alt="Group Project" v-if="Project.groupProject" class="GPSig">
        <div class="actual-project">
            <h2>{{Project.name}}</h2>
            <div class="info">
                <img :src="'assets/img/' + Project.img" class="projectImg"/>
                <div class="info-text">
                    <p v-html="Project.info"></p>
                    <a :href="Project.link" target="_blank">{{Project.linkText}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        Project: Object
    }
}
</script>

<style>
    .full-project
    {
        background-color: #808080D0;
        border-radius: 15px;
    }

    .actual-project{
        padding: 5px;
    }

    .info{
        display: flex;
        justify-content: space-evenly;
    }

    .info-text{
        width: 20%;
    }

    .GPSig{
        max-width: 5%;
        float: right;
    }

    .projectImg{
        width: 70%;
        border-radius: 15px;
    }

    h2{
        text-decoration: underline;
    }
</style>
