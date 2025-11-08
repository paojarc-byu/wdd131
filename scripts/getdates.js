const today = new Date();
document.getElementById("currentYear").innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = "Last modification: " + document.lastModified;