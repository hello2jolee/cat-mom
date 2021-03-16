const END_POINT =
  "https://raw.githubusercontent.com/hello2jolee/cat-mom/feature/3-information_page/src/data.json";

const request = (url) => {
  try {
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.responseType = "json";
    request.send();

    request.onload = () => {
      const data = request.response;
      return JSON.stringify(data);
    };

    request.onload();
  } catch (e) {
    throw e;
  }
};

export const fetchInfoData = () => {
  request(`${END_POINT}`);
};
