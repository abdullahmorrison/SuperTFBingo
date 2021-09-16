<template>
    <div id="myModal" className="modal">
        <div className="modal-content">
            <div className="modal-header"><h3>BINGO!</h3></div>
            <div id="modal-question" className="modal-body">
                Do You Want to Play Again?
            </div>
            <div className="modal-footer">
                <button id="modal-footer-new"><h3>New Game</h3></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
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
    background:  orange;
    cursor: pointer;
    padding: 10px;
    margin: 5px;

    border: none;
    box-shadow: 2px 2px 4px #919191;
}
.modal-footer button:active {
    box-shadow: 1px 1px 3px #919191;
}
</style>