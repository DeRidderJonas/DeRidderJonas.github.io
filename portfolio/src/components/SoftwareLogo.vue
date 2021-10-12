<template>
        <img class="softwareLogo" :src="'assets/img/' + imgSrc" :alt="software">
</template>

<script>
export default {
    props: {
        software: String
    },
    computed: {
        imgSrc(){
            switch (this.software) {
                case "C++":
                    return "cppLogo.png";
                case "C#":
                    return "CSharp.png";
                case "3DS":
                    return "3DsMaxLogo.png";
                case "Box2D":
                    return "Box2d.png";
                case "DirectX":
                    return "DirectX11Logo.png";
                case "SDL":
                    return "SDL_Logo.png";
                case "SP":
                    return "SubstancePainterLogo.png";
                case "UE4":
                    return "UnrealEngine4.png";
                case "vue":
                    return "vueJs.png";
                default:
                    return "";
            }
        }
    }
}
</script>

<style scoped>
.softwareLogo {
    height: 20px;
    width: auto;
    margin: 0px 20px 0px 0px;
}

@media screen and (max-width: 1000px) {
    .softwareLogo {
        height: 15px;
    }
}
</style>
