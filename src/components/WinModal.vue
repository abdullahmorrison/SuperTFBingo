<template>
    <div id="myModal" className="modal">
        <div className="modal-content">
            <div className="modal-header"><h3>BINGO!</h3></div>
            <div id="modal-question" className="modal-body">
                Do You Want to Continue Playing for a Blackout (Fill The Entire Board)?
            </div>
            <div className="modal-footer">
                <button class="confirm" @click="$emit('goForBlackout')">Continue Playing</button>
                <button @click="$emit('newGame')">New Game</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['newGame']
}
</script>

<style scoped>
.modal {
    position: fixed; /* Stay in place */
    z-index: 2; /* Sit on top */
    
    padding-top: 15%;
    
    /* Location of the box */
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    overflow: auto;/* Enable scroll if needed */
    background-color: black;/* Fallback color */
    background-color: rgba(0, 0, 0, 0.685);
}
.modal-content {
    background-color: #ffffff;
    margin: auto;
    font-size: large;
    width: 300px;
}
.modal-content div {
    padding: 10px 20px;
}
.modal-footer {
    margin: 10px;
    text-align: right;
}
.modal-footer button {
    cursor: pointer;
    font-weight: bold;
    padding: 10px;
    margin: 5px;

    border: none;
    box-shadow: 2px 2px 4px #919191;
}
.modal-footer .confirm{
    background:  orange;
}
.modal-footer button:active {
    box-shadow: 1px 1px 3px #919191;
}
</style>