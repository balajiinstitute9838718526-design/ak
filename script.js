const schedule = [
  { start: "05:00", end: "06:00", task: "📖 Acharya Prashant Reading" },
  { start: "06:00", end: "08:00", task: "📝 General Hindi" },
  { start: "09:00", end: "11:00", task: "⚖️ Constitution / GK" },
  { start: "11:00", end: "12:00", task: "📰 Current Affairs" },
  { start: "14:00", end: "15:30", task: "➗ Maths" },
  { start: "16:00", end: "17:30", task: "🧠 Reasoning" },
  { start: "18:00", end: "19:00", task: "💻 Computer Science" },
  { start: "19:00", end: "20:00", task: "🔄 Revision" }
];

function updateTask() {
    const now = new Date();

    document.getElementById("time").innerText =
        now.toLocaleTimeString();

    const currentMinutes =
        now.getHours() * 60 + now.getMinutes();

    let current = "😴 Free Time";
    let next = "No Task";

    schedule.forEach((item, index) => {

        const [sh, sm] = item.start.split(":");
        const [eh, em] = item.end.split(":");

        const start =
            parseInt(sh) * 60 + parseInt(sm);

        const end =
            parseInt(eh) * 60 + parseInt(em);

        if (currentMinutes >= start &&
            currentMinutes < end) {
            current = item.task;

            if(schedule[index+1]){
                next = schedule[index+1].task;
            }
        }
    });

    document.getElementById("task").innerText = current;
    document.getElementById("nextTask").innerText = next;
}

setInterval(updateTask,1000);
updateTask();