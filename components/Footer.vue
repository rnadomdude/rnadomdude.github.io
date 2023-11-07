<script setup lang="ts">

import { ref } from 'vue'
import { useDateFormat, useNow } from '@vueuse/core'

const formatter = ref('HH:mm')
const time_str = useDateFormat(useNow(), formatter, { locales: 'en-US' })

</script>

<template>
    <footer>
        <div class="taskbar-button">
            <div class="taskbar-item-border">
                <div class="flexy">
                    <img src="/winlogo.png" alt="fnaf">
                    <div>start</div>
                </div>
            </div>
            
        </div>
        <div class="taskbar-button">
            <div class="separator"></div>
        </div>
        <div class="taskbar-button">
            <div class="taskbar-item-border"> a </div>
        </div>
        <div class="taskbar-button-right">
            <div class="taskbar-item-border-inverted">
                <div class="flexy">
                    <img src="/deadlylaser.png"/>
                    <div>
                        {{ time_str }}
                    </div> 
                </div>
            </div>
        </div>
    </footer>
</template>

<style>

footer {
    border: 2px solid var(--offwhite);
    border-width: 3px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    background: var(--taskbarpink);
    position: fixed;
    padding: 4px 4px;
    gap: 4px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    font-size: 21.5px;
    --purple: #5f508d;
    --lightpurple: #815CDA;
    --aqua: #90F3E1;
    --pink: #EFCFEF;
    --darkerpink: #EAA0E7;
    --offwhite: #FDF7FD;
    --taskbarpink: #F7E0FA;
}

.taskbar-button {
    display: block;
}

.taskbar-button-right {
    display: block;
    justify-content: space-between;
    margin-left: auto;
    padding: 0 9px;
}

.taskbar-item-border {
    display: block;
    padding: 0 3px;
    border: 2px solid var(--offwhite);
    border-right-color: var(--lightpurple);
    border-bottom-color: var(--lightpurple);
}

.taskbar-item-border-inverted {
    display: block;
    align-items: center;
    padding: 0 3px;
    border: 2px solid var(--offwhite);
    border-left-color: var(--lightpurple);
    border-top-color: var(--lightpurple);
}

.flexy {
    display: flex;
    align-items: center;
    gap: 7px;
}

.separator {
    /* padding-bottom: 35px; */
    height: 100%;
    box-sizing: border-box;
    border: 2px solid var(--offwhite);
    border-right-color: var(--lightpurple);
    border-bottom-color: var(--lightpurple);
}


</style>