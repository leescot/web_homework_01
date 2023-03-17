const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const apiResponse = document.getElementById("api-response");

submitBtn.addEventListener("click", () => {
  const userQuestion = userInput.value;
  // 發送 API 請求，並在回傳後更新 apiResponse 的內容
  fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer <YOUR_API_KEY>"
    },
    body: JSON.stringify({
      prompt: userQuestion,
      max_tokens: 50,
      n: 1,
      stop: "\n"
    })
  })
  .then(response => response.json())
  .then(data => {
    apiResponse.textContent = data.choices[0].text;
  })
  .catch(error => console.error(error));
});
