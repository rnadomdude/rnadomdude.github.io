<script setup lang="ts">
import { useDraggable, useWindowSize } from '@vueuse/core';
import {useWindows} from '~/stores/window_states';
import { UseDraggable } from '@vueuse/components';

const { width, height } = useWindowSize()

const width1 = unref(width) / 2 - 72;
const height1 = unref(height) / 2 - 139.5;

let windows = useWindows();

console.log(width1, height1)

function showAbout() {windows.about = !windows.about}

// let visibility = defineModel<Boolean>({default: true});
</script>

<template>
    <BaseWindow :initial_x=width1 :initial_y=height1 :visibility="true">
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

<style>

.window {
  margin: auto 0;
  padding: 6px;
  padding-top: 0px;
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: var(--aqua);
  border: var(--purple) 2px solid;
  box-shadow: 5px 5px 0 rgba(77, 35, 139, 0.4);
  /* box-sizing: border-box; */
}

</style>