async function traduzir() {
  const inputLanguage = document.getElementById("inputLanguage");
  const outputLanguage = document.getElementById("outputLanguage");
  const textToTranslate = document.getElementById("textToTranslate");
  const showResult = document.getElementById("result");

  if (!textToTranslate.value) return alert("Insira um texto para traduzir");
  if (inputLanguage.value == outputLanguage.value) return alert("Escolha uma linguagem de entrada diferente da de saída");

  const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "270e3a683dmsh42fc1c11023312dp1a9b9cjsneec3898b40e8",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: new URLSearchParams({
      q: textToTranslate.value,
      target: outputLanguage.value,
      source: inputLanguage.value,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data.translations[0].translatedText);
    showResult.innerText = result.data.translations[0].translatedText;
  } catch (error) {
    console.error(error);
  }
}

function switchLanguage() {
  const inputLanguage = document.getElementById("inputLanguage");
  const outputLanguage = document.getElementById("outputLanguage");
  const textToTranslate = document.getElementById("textToTranslate");
  const showResult = document.getElementById("result");
  let initInputValue = inputLanguage.value;
  let initOutputValue = outputLanguage.value;
  let textoToTranslate = textToTranslate.value;
  let showtoResult = showResult.value;
  inputLanguage.value = initOutputValue;
  outputLanguage.value = initInputValue;
  textToTranslate.value = showtoResult;
  showResult.value = textoToTranslate;
}
