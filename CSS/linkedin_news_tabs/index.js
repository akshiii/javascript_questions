window.onload = function () {
  let peopleYouMayKnowContainer = document.createElement("div");
  let userList = [
    { username: "Akshita", jobName: "Software Engg." },
    { username: "Abc", jobName: "Software Engg." },
  ];

  peopleYouMayKnowContainer.innerHTML = `
  <div class="pymk-container">
    <div class="pymk-title">People You may Know</div>
    <div class="pymk-userlist" id="pymk-userlist">
      ${userList.map((data, key) => {
        return `
          <div class="user-card" id="${key}">
            <div class="user-name">${data.username}<div>
            <img src="dummy.jpg" alt="img" class="user-image"/>
          </div>
        `;
      })}
    </div>
  </div>
`;

  document.body.appendChild(peopleYouMayKnowContainer);
};
