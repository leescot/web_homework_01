const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
//const apiResponse = document.getElementById("api-response");

submitBtn.addEventListener("click", () => {
  // 從 OpenAI API 中獲取回應，並顯示在 apiResponse 元素中
});


    const api-response = document.getElementById("api-response");

      submitBtn.addEventListener("click", () => {
        const text = input.value;
        const reversed = text.split("").reverse().join("");
        api-response.textContent = reversed;
      });
