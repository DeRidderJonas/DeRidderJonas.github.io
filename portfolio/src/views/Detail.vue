<template>
    <div>
        <WhatToDoWithYou v-if="projectId == 'whattodowithyou'"/>
    </div>
</template>

<script>
import WhatToDoWithYou from '@/components/details/WhatToDoWithYou.vue'

export default {
    components: {
        WhatToDoWithYou
    },
    computed: {
        projectId() {
            return this.$route.params.id;
        }
    }
}
</script>
