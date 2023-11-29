<script setup lang="ts">

import { ref } from 'vue'
import { useDateFormat, useNow } from '@vueuse/core'

const formatter = ref('HH:mm')
const time_str = useDateFormat(useNow(), formatter, { locales: 'en-US' }) 

function dropdownClick() {
    document.getElementById("ligma")?.classList.toggle("show");
}

</script>

<template>
    <footer>
        <div class="taskbar-button">
            <div id="ligma" class="taskbar-item-border dropup start-button" @click="dropdownClick()">
                <div class="flexy">
                    <div class="dropup-content">
                        <div class="flexy-sideways">
                            <div class="flexy-sideways-box">Overdose</div>
                            <div class="flexy-menu">
                                <div class="menu-hover"> <img src="/winlogo.png" draggable="false"/> Hi </div>
                                <div class="menu-hover"> <img src="/winlogo.png" draggable="false"/> Hello </div>
                                <div class="menu-hover"> <img src="/winlogo.png" draggable="false"/> Look here </div>
                                <div class="menu-separator"></div>
                                <div class="menu-hover"> <img src="/winlogo.png" draggable="false"/> Suspend </div>
                                <div class="menu-hover"> <img src="/winlogo.png" draggable="false"/> Shutdown </div>
                            </div>
                        </div>
                    </div>
                    <img src="/winlogo.png" alt="fnaf" draggable="false">
                    <div>start
                    </div>
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
                    <img src="/deadlylaser.png" draggable="false"/>
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

.idiot {
    display: absolute;
    width: 100%;
    background-color: var(--lightpurple);
}

.dropup-content {
    display: none;
    position: fixed;
    background-color: var(--taskbarpink);
    bottom: 49px;
    left: 4px;
    min-width: 180px;
    border: 2px solid var(--offwhite);
    border-right-color: var(--lightpurple);
    border-bottom-color: var(--lightpurple);
}

.show .dropup-content {
    display: block;
}

.show .start-button {
    display: block;
    padding: 0 3px;
    border: 2px solid var(--offwhite);
    border-left-color: var(--lightpurple);
    border-top-color: var(--lightpurple);
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

.flexy-sideways {
    display: flex;
    flex-direction: row;
}

.flexy-sideways-box{
    background-color: var(--lightpurple);
    writing-mode: sideways-lr;
    font-weight: bold;
    color: var(--offwhite);
    padding-bottom: 5px;
    padding-right: 3px;
}

.flexy-menu {
    display: flex;
    flex-direction: column;
    padding-left: 1px;
}

.menu-hover:hover {
    color: var(--offwhite);
    background-color: var(--lightpurple);
}

.menu-separator {
    min-width: 1px;
    box-sizing: content-box;
    border: 2px solid var(--lightpurple);
    border-bottom-color: var(--offwhite);
    border-left-color: var(--offwhite);
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