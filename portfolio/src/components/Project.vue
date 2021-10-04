<template>
    <div class="full-project">
        <h2>{{Project.name}}</h2>
        <div class="info">
            <img :src="'assets/img/' + Project.img"/>
            <div class="info-text">
                <p>{{Project.info}}</p>
                <a :href="Project.link" target="_blank">Link</a>
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
        background-color: grey;
        border-radius: 15px;
        padding: 1px;
    }

    .info{
        display: flex;
        justify-content: space-around;
    }

    .info-text{
        width: 20%;
    }

    img{
        width: 70%;
        border-radius: 15px;
    }

    h2{
        text-decoration: underline;
    }
</style>
