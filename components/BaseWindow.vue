<script setup lang="ts">
import { ref } from 'vue';
import { useElementSize, useWindowSize, useDraggable } from '@vueuse/core';

const handle = ref<HTMLElement | null>(null);
const the_window = ref<HTMLElement | null>(null);
const { width: the_width_padded, height: the_height_padded } = useElementSize(the_window, { width: 0, height: 0 }, {box: "border-box"});
const { width: the_width, height: the_height } = useElementSize(the_window, { width: 0, height: 0 }, {box: "content-box"});
const { x, y, style } = useDraggable(the_window, {
    initialValue: { x: props.initial_x, y: props.initial_y },
    handle,
})
const { width: vp_w, height: vp_h } = useWindowSize();

let old_width = the_width.value, old_height = the_height.value;
let old_x = x.value, old_y = y.value;

const maximized = ref<boolean>(false);

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

let visibility = defineModel<Boolean>({ default: true });

function close() { }
function maximize() {
    if (!maximized.value) {
        maximized.value = true;
        old_width = the_width.value
        old_height = the_height.value;
        old_x = x.value;
        old_y = y.value;
        the_window.value.style.width = vp_w.value.toString() + "px";
        the_window.value.style.height = vp_h.value.toString() + "px";
        x.value = 0;
        y.value = 0;
    } else {
        maximized.value = false;
        the_window.value.style.width = old_width.toString() + "px";
        the_window.value.style.height = old_height.toString() + "px";
        x.value = old_x;
        y.value = old_y;
    }
}

function minimize() {
    console.log(visibility.value);
    visibility.value = false;
    console.log(visibility.value);
}

function on_drag_cb() {
    if (maximized.value) {
        maximized.value = false;
        the_window.value.style.width = old_width.toString() + "px";
        the_window.value.style.height = old_height.toString() + "px";
    }
}

onMounted(async () => {
    // super fucking hacky but getBoundingClientRect returns wrong values if we don't!
    // used to be 0ms but chromium is so slow we have to do this
    await new Promise(r => setTimeout(r, 1000));
    const vals = the_window.value.getBoundingClientRect();
    the_window.value.style.width = vals.width.toString() + "px";
    the_window.value.style.height = vals.height.toString() + "px";
});

</script>

<template>
    <div ref="the_window" class="window" :style="style" v-show="visibility">
        <div ref="handle" class="controls-wrapper">
            <div class="controls controls-left">
                <img src="/fnaf_purpleguy.png" alt="OMG ITS THE PURPLE GUY FROM FNAF THE BITE OF 87" draggable="false">
            </div>
            <div class="controls controls-right">
                <img src="/mini.png" alt="minimize button" @click="minimize" draggable="false">
                <img src="/maxi.png" alt="maximize button" @click="maximize" draggable="false">
                <img src="/bye.png" alt="close button" @click="" draggable="false">
            </div>
        </div>
        <div class="window-content">
            <slot></slot>
        </div>
        <div>
            <img class="decorative" src="/tplink_deco.png" alt="i use the deco m5" draggable="false" />
        </div>
    </div>
</template>

<style scoped>
img {
    image-rendering: pixelated;
    user-select: none;
    display: block;
    /* frick you inline-block give me my time back */
    height: fit-content;
}

.window {
    box-sizing: border-box;
    position: fixed;
    margin: auto 0;
    padding: 0 6px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: var(--aqua);
    border: var(--purple) 2px solid;
    box-shadow: 5px 5px 0 rgba(77, 35, 139, 0.4);
    resize: both;
    overflow: hidden visible;
    min-height: 128px;
    min-width: 128px;
}

.controls-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3px;
    padding-bottom: 3px;
    margin-top: 6px;
    /* 2+4 to compensate for outline */
    margin-bottom: 8px;
    background-color: var(--pink);
    outline: var(--purple) 2px solid;
}

.window-content {
    padding: 8px;
    background-color: var(--offwhite);
    outline: var(--purple) 2px solid;
    overflow: hidden visible;
    flex: 1 1 auto;
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
    padding-top: 6px;
    /* 2+4 to compensate for outline */
}</style>