import axios from "axios";

export const createAsyncHandler = (requestData, setResult, timeoutRef) => {
    return (inputValue) => {
      setResult(inputValue);
  
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
  
      timeoutRef.current = setTimeout(async () => {
        if (inputValue.length > 0) {
          try {
            requestData.methodProperties.CityName = inputValue; // Обновляем CityName в requestData
            const res = await axios.post('https://api.novaposhta.ua/v2.0/json/', requestData);
            const data = res.data.data;
  
            setResult(data);
          } catch (error) {
            console.error('Ошибка запроса:', error);
          }
        }
      }, 1000);
    };
  };