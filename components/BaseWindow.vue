<script setup lang="ts">
import { ref } from 'vue';
import { UseDraggable } from '@vueuse/components';

const handle = ref<HTMLElement | null>(null)

const props = defineProps({
    initial_x: {
        type: Number,
        default: 0,
    },
    initial_y: {
        type: Number,
        default: 0,
    },
})

let visibility = defineModel<Boolean>({default: true});

</script>

<template>
    <UseDraggable :handle="handle" style="position: fixed" :initialValue="{x: props.initial_x, y: props.initial_y}" >
        <div class="window" v-if="visibility">
            <div ref="handle" class="controls-wrapper">
                <div class="controls controls-left">
                    <img src="/fnaf_purpleguy.png" alt="OMG ITS THE PURPLE GUY FROM FNAF THE BITE OF 87" draggable="false">
                </div>
                <div class="controls controls-right">
                    <img src="/mini.png" alt="minimize button" srcset="" @click="" draggable="false">
                    <img src="/maxi.png" alt="maximize button" srcset="" draggable="false">
                    <img src="/bye.png" alt="close button" srcset="" @click="visibility = !visibility" draggable="false">
                </div>
            </div>
            <div class="window-content">
                <slot></slot>
            </div>
            <div>
                <img class="decorative" src="/tplink_deco.png" alt="my home router is the deco m5" draggable="false"/>
            </div>
        </div>
    </UseDraggable>
</template>

<style scoped>
img {
    image-rendering: pixelated;
    user-select: none;
    display: block; /* frick you inline-block give me my time back */
    height: fit-content;
}
.window {
  margin: auto 0;
  padding: 0 6px;
  display: flex;
  flex-direction: column;
  background-color: var(--aqua);
  border: var(--purple) 2px solid;
  box-shadow: 5px 5px 0 rgba(77, 35, 139, 0.4);
}

.controls-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3px;
    padding-bottom: 3px;
    margin-top: 6px; /* 2+4 to compensate for outline */
    margin-bottom: 8px;
    background-color: var(--pink);
    outline: var(--purple) 2px solid;
}
.window-content {
    padding: 8px;
    background-color: var(--offwhite);
    outline: var(--purple) 2px solid;
}

.controls {
    display: flex;
    flex-direction: row;
    column-gap: 4px;
}

.controls-left {
    padding-bottom: 2px;
    padding-top: 2px;
    padding-left: 4px;
}
.controls-right {
    padding-right: 3px;
}

.decorative {
  margin-left: -2px;
  padding-top: 6px; /* 2+4 to compensate for outline */
}
</style>