const doors = document.querySelectorAll(".door");
const doorAudio = document.getElementById("dooraudio");

doors.forEach(function(door) {

    door.addEventListener("click", function() {

        console.log("Door clicked!");

        doorAudio.currentTime = 0;

        doorAudio.play()
            .then(function() {
                console.log("Audio is playing!");
            })
            .catch(function(error) {
                console.log("Audio error:", error);
            });

        const page = door.dataset.page;

        setTimeout(function() {
            window.location.href = page;
        }, 1500);

    });

});

const storyButton = document.getElementById("story-button");
const storyContent = document.getElementById("story-content");

storyButton.addEventListener("click", function() {
    storyContent.classList.toggle("open");
});