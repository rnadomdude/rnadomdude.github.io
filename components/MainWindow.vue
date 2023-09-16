<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import {useWindows} from '~/stores/window_states';

const { width, height } = useWindowSize()

const width1 = unref(width) / 2 - 72;
const height1 = unref(height) / 2 - 139.5;

let windows = useWindows();

console.log(width1, height1)

function showAbout() {windows.about = true}
</script>

<template>
    <BaseWindow :initial_x=width1 :initial_y=height1>
        <label class="local-link" @click="showAbout"> About </label>
        <div class="local-link"></div>
        <a class="link" href="https://github.com/rnadomdude" title="heheheha" target="_blank"> Github </a>
        <div>
            <a class="link" href="https://osu.ppy.sh/users/11537247" title="clicking circles" target="_blank"> Osu </a>
        </div>
        <div>
            <a class="link" href="https://steamcommunity.com/id/12302003b/" title="fumo" target="_blank">(⁠~⁠_⁠~⁠メ⁠)</a>
        </div>
    </BaseWindow>
</template>