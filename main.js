function displayCurrentDayAndUTCTime() {
    const currentDate = new Date();
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0'); // Format hours with leading zero
    const minutes = now.getUTCMinutes().toString().padStart(2, '0'); // Format minutes with leading zero

    const timeOnly = `${hours}:${minutes}`;
    console.log(timeOnly);


    const currentDayElement = document.getElementById("day");
    currentDayElement.textContent = currentDate.toLocaleDateString("en-US", { weekday: "long" });

    const currentTimeElement = document.getElementById("time");
    currentTimeElement.textContent = timeOnly;
}

displayCurrentDayAndUTCTime();